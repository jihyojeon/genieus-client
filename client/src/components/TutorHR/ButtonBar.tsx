import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Flex, Button, useDisclosure } from '@chakra-ui/react'
import ModalStudentRequest from './ModalStudentRequest'
import { useNavigate } from 'react-router-dom'
import {
  useDeleteHRRequestMutation,
  useUpdateHRRequestMutation,
} from '../../redux/services/helpRequestService'

const ButtonBar = ({ setloadingBtn, setStudentReady, hrData }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [deleteHr, deleteHrResult] = useDeleteHRRequestMutation()
  const [updateHr, updateHrResult] = useUpdateHRRequestMutation()

  const [userId, setUserId] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  const handleClick = () => {
    hrData.interested_tutors.push(hrData.id)
    // updateHr({ id: hrData.id, tutor_id: userId })
    console.log(hrData.interested_tutors)
    console.log(hrData.id)
    console.log(hrData)
    // navigate('/chat')
  }

  return (
    <Flex
      alignItems="flex-start"
      flexDirection="row"
      justifyContent="center"
      px="10"
    >
      <Button onClick={() => console.log(hrData)}></Button>
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
      <Button
        colorScheme="indigo"
        fontFamily="montserrat"
        letterSpacing={2}
        ml={105}
        onClick={handleClick}
        padding={8}
        variant="outline"
      >
        Accept
      </Button>
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
      <ModalStudentRequest hrData={hrData} isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default ButtonBar
