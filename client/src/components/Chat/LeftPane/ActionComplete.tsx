import React from 'react'
import { Button } from '@chakra-ui/button'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { VStack } from '@chakra-ui/layout'
import { useUpdateHRRequestMutation } from '../../../redux/services/helpRequestService'
import { useNavigate } from 'react-router-dom'

type ActionCompleteProps = {
  helpRequest: any
  setSessionOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ActionComplete = ({
  helpRequest,
  setSessionOpen,
}: ActionCompleteProps) => {
  const [updateHelpRequest, updateHelpRequestResponse] =
    useUpdateHRRequestMutation()
  const navigate = useNavigate()

  const submitCompleteHandler = () => {
    setSessionOpen(false)
    updateHelpRequest({ id: helpRequest.id, status: 'closed-complete' })
    setTimeout(() => {
      return navigate(`/student-feedback/${helpRequest.id}`)
    }, 500)
  }

  const submitIncompleteHandler = () => {
    setSessionOpen(false)
    updateHelpRequest({ id: helpRequest.id, status: 'closed-incomplete' })
    setTimeout(() => {
      return navigate(`/student-feedback/${helpRequest.id}`)
    }, 500)
  }

  return (
    <VStack>
      <Button w="15ch" mt={'1rem'} onClick={submitCompleteHandler}>
        <FaCheck />
        &nbsp;&nbsp;Completed
      </Button>
      <Button
        w="15ch"
        mt={'1rem'}
        onClick={submitIncompleteHandler}
        variant="outline"
        _hover={{ color: 'red.500' }}
      >
        <FaTimes />
        &nbsp;&nbsp;Incomplete
      </Button>
    </VStack>
  )
}

export default ActionComplete
