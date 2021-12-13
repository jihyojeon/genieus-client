import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { useUpdateHRRequestMutation } from '../../../redux/services/helpRequestService'
import { useNavigate } from 'react-router-dom'

type ActionDeclineProps = {
  helpRequestId: string
  setSessionOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ActionDecline = ({
  helpRequestId,
  setSessionOpen,
}: ActionDeclineProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [updateHelpRequest, updateHelpRequestResponse] =
    useUpdateHRRequestMutation()
  const navigate = useNavigate()

  const handleDecline = () => {
    setSessionOpen(false)

    updateHelpRequest({ id: helpRequestId, status: 'pending' })
    setIsLoading(true)
    setTimeout(() => {
      return navigate(`/student-dashboard`)
    }, 1000)
  }

  return (
    <Button w="15ch" mt={'1rem'} onClick={handleDecline} isLoading={isLoading}>
      Decline Tutor
    </Button>
  )
}
export default ActionDecline
