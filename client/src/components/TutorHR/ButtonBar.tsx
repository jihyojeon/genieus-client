import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import {
  Flex,
  Button,
  useDisclosure,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import ModalStudentRequest from './ModalStudentRequest'
import { useNavigate } from 'react-router-dom'
import StudentAccept from './StudentAccept'
import {
  useDeleteHRRequestMutation,
  useUpdateHRRequestMutation,
  useGetHrRequestByValueQuery,
  useGetHRRequestByIdQuery,
} from '../../redux/services/helpRequestService'

const ButtonBar = ({ setloadingBtn, setStudentReady, hrData }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [deleteHr, deleteHrResult] = useDeleteHRRequestMutation()
  const [updateHr, updateHrResult] = useUpdateHRRequestMutation()
  const [loadingButton, setloadingButton] = useState(false)

  const getHrById = useGetHRRequestByIdQuery(hrData.id, {
    pollingInterval: 3000,
  })

  const interestedTutors: [] = []

  const [userId, setUserId] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    //@ts-ignore
    if (getHrById.data !== undefined && getHrById.data.status === 'assigned') {
      setloadingButton(false)
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  const handleClick = () => {
    //@ts-ignore
    interestedTutors.push(userId)
    updateHr({
      id: hrData.id,
      interested_tutors: interestedTutors,
    })
  }

  return (
    <Grid templateRows="1fr 1fr">
      <GridItem>
        <Flex
          alignItems="flex-start"
          flexDirection="row"
          justifyContent="center"
          px="10"
        >
          <Button
            colorScheme="indigo"
            fontFamily="montserrat"
            letterSpacing={2}
            ml={105}
            onClick={onOpen}
            padding={8}
            variant="outline"
          >
            Student
          </Button>

          {!loadingButton === true ? (
            <Button
              onClick={() => {
                handleClick()
                setloadingButton(true)
              }}
              ml={105}
              letterSpacing={2}
              colorScheme="indigo"
              variant="outline"
              padding={8}
              fontFamily="montserrat"
            >
              Accept
            </Button>
          ) : (
            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Button
                isLoading
                loadingText="Waiting for Student response"
                ml={105}
                letterSpacing={2}
                colorScheme="indigo"
                variant="outline"
                padding={8}
              ></Button>
              <Button
                onClick={() => {
                  setloadingButton(false)
                }}
                letterSpacing={1}
                mr={50}
                _hover={{ bg: 'none', opacity: 0.6 }}
                variant="ghost"
                fontFamily="montserrat"
              >
                Cancel
              </Button>
            </Flex>
          )}

          <Button
            colorScheme="indigo"
            fontFamily="montserrat"
            letterSpacing={2}
            ml={105}
            padding={8}
            variant="outline"
            onClick={() => {
              deleteHr(hrData.id)
              navigate('/tutor-dashboard')
            }}
          >
            Decline
          </Button>
          <ModalStudentRequest
            hrData={hrData}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Flex>
      </GridItem>
      <GridItem>
        {/* @ts-ignore */}
        {getHrById.data && getHrById.data.status === 'assigned' ? (
          // @ts-ignore
          <StudentAccept hrData={hrData} />
        ) : null}
      </GridItem>
    </Grid>
  )
}

export default ButtonBar
