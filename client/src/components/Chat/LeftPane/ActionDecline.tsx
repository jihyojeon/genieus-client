import React from 'react'
import { Button } from '@chakra-ui/button'
import { useUpdateHRRequestMutation } from '../../../redux/services/helpRequestService'
import { useNavigate } from 'react-router-dom'

const ActionDecline = ({ helpRequestId }: { helpRequestId: string }) => {
  const [updateHelpRequest, updateHelpRequestResponse] =
    useUpdateHRRequestMutation()
  const navigate = useNavigate()

  const handleDecline = () => {
    updateHelpRequest({ id: helpRequestId, status: 'pending' })
    return navigate('/student-dashboard')
  }

  return (
    <Button w="15ch" mt={'1rem'} onClick={handleDecline}>
      Decline Tutor
    </Button>
  )
}
export default ActionDecline
