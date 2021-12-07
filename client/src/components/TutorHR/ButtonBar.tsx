import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import {
  Flex,
  Button,
  useDisclosure,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import ModalStudentRequest from './ModalStudentRequest'
import { useNavigate } from 'react-router-dom'
import { BsPerson, BsTrash, BsCheckCircle } from 'react-icons/bs'
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

  //@ts-ignore

  const interestedTutors: [] = []

  const [userId, setUserId] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    //@ts-ignore
    if (getHrById.data) {
      setloadingButton(false)
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }
    if (
      //@ts-ignore
      getHrById?.data &&
      getHrById?.data.declined_tutors.length !== 0
    ) {
      console.log('declinedtutors')
      setloadingButton(false)
    }

    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
    //@ts-ignore
  }, [getHrById.data?.status, getHrById.data?.declined_tutors])

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
          justifyContent="space-around"
          px="10"
          ml={3}
        >
          <Button
            colorScheme="indigo"
            fontFamily="montserrat"
            left={0}
            letterSpacing={3}
            onClick={onOpen}
            padding={8}
            variant="ghost"
          >
            Student
            {<BsPerson size={'2em'} />}
          </Button>

          {!loadingButton === true ? (
            <Button
              onClick={() => {
                handleClick()
                setloadingButton(true)
              }}
              ml={99}
              letterSpacing={2}
              // colorScheme="indigo"
              variant="solid"
              padding={8}
              color="white"
              bg="indigo.400"
              // color={'black'}
              _hover={{
                bgGradient: 'linear(to-r, blue.500, teal.300)',
                color: 'gray.300',
              }}
              fontFamily="montserrat"
            >
              Accept
              {<BsCheckCircle size={'2em'} style={{ marginLeft: '10px' }} />}
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
                variant="ghost"
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
                {<BsTrash size={'1em'} />}
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
            {<BsTrash style={{ marginLeft: '10px' }} size={'2em'} />}
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
