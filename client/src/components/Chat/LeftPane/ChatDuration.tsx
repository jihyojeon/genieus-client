import { useState, useEffect } from 'react'
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
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
  }
  const declineClicked = () => {
    console.log('CD DECLINED')
  }
  const completeClicked = () => {
    console.log('CD COMPLETED')
  }

  const renderCountDown = ({ remainingTime }: any) => {
    if (remainingTime === 0) {
      countDownExpired()
    } else if (remainingTime <= 60) {
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
        <CountdownCircleTimer
          // initialRemainingTime={initialTimer}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
          duration={initialTimer}
          isPlaying={clockRunning}
          key={key}
          rotation={'clockwise'}
          size={170}
          strokeWidth={10}
          onComplete={() => {
            // console.log('TIMER ENDED')
            return [false, 0]
          }}
        >
          {renderCountDown}
        </CountdownCircleTimer>
      </Flex>
    </Box>
  )
}

export default ChatDuration
