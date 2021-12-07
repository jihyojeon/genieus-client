import { useState } from 'react'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

type ChatDurationProps = {
  seconds: number
  subscriptionRemainingSecs: number
  setCanDecline: (canDecline: boolean) => void
}

//  @ts-ignore
const ChatDuration = ({
  seconds,
  subscriptionRemainingSecs,
  setCanDecline,
}: ChatDurationProps) => {
  const [initialTimer, setInitialTimer] = useState(seconds)
  const [secondTimer, setSecondTimer] = useState(subscriptionRemainingSecs)
  const [clockRunning, setClockRunning] = useState(true)
  const [key, setKey] = useState(0) // needed for re-setting clock after initial timer

  const countDownExpired = () => {
    setCanDecline(false)
    setClockRunning(true)
    setInitialTimer(secondTimer)
    setKey(1)
  }

  const renderCountDown = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime <= 60) {
      return (
        <Box>
          <Text fontFamily="montserrat" fontSize={25} fontWeight={800}>
            {remainingTime}
          </Text>
          <Text fontFamily="montserrat" fontSize={20} fontWeight={400}>
            seconds
          </Text>
          <Text fontFamily="montserrat" fontSize={20} fontWeight={400}>
            remaining
          </Text>
        </Box>
      )
    } else {
      return (
        <Box>
          <Text fontFamily="montserrat" fontSize={25} fontWeight={800}>
            {Math.ceil(remainingTime / 60)}
          </Text>
          <Text fontFamily="montserrat" fontSize={20} fontWeight={400}>
            mins
          </Text>
          <Text fontFamily="montserrat" fontSize={20} fontWeight={400}>
            remaining
          </Text>
        </Box>
      )
    }
  }

  return (
    <Box
      alignItems="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="1rem"
      direction="column"
      padding="1rem"
      marginTop="1rem"
      height="100%"
      width="100%"
      justifyContent="space-between"
    >
      <Flex direction="column" justify="center" align="center">
        {initialTimer && (
          <CountdownCircleTimer
            colors={[
              ['#004777', 0.33],
              ['#F7B801', 0.33],
              ['#A30000', 0.33],
            ]}
            duration={initialTimer || 0}
            isPlaying={clockRunning}
            key={key}
            rotation={'clockwise'}
            size={170}
            strokeWidth={10}
            onComplete={() => {
              setClockRunning(false)
              countDownExpired()
            }}
          >
            {renderCountDown}
          </CountdownCircleTimer>
        )}
      </Flex>
    </Box>
  )
}

export default ChatDuration
