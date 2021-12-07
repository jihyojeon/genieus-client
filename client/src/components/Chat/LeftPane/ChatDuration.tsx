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
  console.log(subscriptionRemainingSecs)
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
            <CountdownTimer duration={seconds} key={1} />
            <Text color="gray.400" size="sm">
              Evaluation time
            </Text>
          </>
        ) : (
          <>
            <CountdownTimer duration={subscriptionRemainingSecs} key={2} />
            <Text color="gray.400" size="sm">
              Remaining time this month
            </Text>
          </>
        )}
      </Flex>
    </Box>
  )
}

export default ChatDuration
