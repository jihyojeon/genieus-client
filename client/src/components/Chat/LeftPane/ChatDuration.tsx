import { useState } from 'react'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import CountdownTimer from './CountdownTimer'

type ChatDurationProps = {
  seconds: number
  subscriptionRemainingSecs: number
  setCanDecline: (canDecline: boolean) => void
}
const ChatDuration = ({
  seconds,
  subscriptionRemainingSecs,
  setCanDecline,
}: ChatDurationProps) => {
  const [isInitialPeriod, setIsInitialPeriod] = useState(true)

  setTimeout(() => {
    setIsInitialPeriod(false)
    setCanDecline(false)
  }, (seconds + 1) * 1000)
  return (
    <Box
      alignItems="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      w="100%"
      borderRadius="1rem"
      direction="column"
      padding="1rem"
      marginTop="1rem"
      justifyContent="space-between"
    >
      <Flex direction="column" justify="center" align="center">
        {isInitialPeriod ? (
          <>
            <Text color="gray.400" size="sm" mb={2}>
              Evaluation time
            </Text>
            <CountdownTimer duration={seconds} version={1} />
          </>
        ) : (
          <>
            <Text color="gray.400" size="sm" mb={2}>
              Remaining time this month
            </Text>
            <CountdownTimer duration={subscriptionRemainingSecs} version={2} />
          </>
        )}
      </Flex>
    </Box>
  )
}

export default ChatDuration
