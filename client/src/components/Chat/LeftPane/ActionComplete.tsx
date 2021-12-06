import React from 'react'
import { Button } from '@chakra-ui/button'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { VStack } from '@chakra-ui/layout'
import { useUpdateHRRequestMutation } from '../../../redux/services/helpRequestService'
import { useNavigate } from 'react-router-dom'

type ActionCompleteProps = {
  helpRequest: any
}

const ActionComplete = ({ helpRequest }: ActionCompleteProps) => {
  const [updateHelpRequest, updateHelpRequestResponse] =
    useUpdateHRRequestMutation()
  const navigate = useNavigate()

  const submitCompleteHandler = () => {
    updateHelpRequest({ id: helpRequest.id, status: 'closed-complete' })
    console.log(helpRequest)
    return navigate('/student-feedback', { state: helpRequest })
  }

  const submitIncompleteHandler = () => {
    updateHelpRequest({ id: helpRequest.id, status: 'closed-incomplete' })
    return navigate('/student-feedback', { state: helpRequest })
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
