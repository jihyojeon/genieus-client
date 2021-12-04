import { useState, useEffect } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

//  @ts-ignore
const ChatDuration = (props: any) => {
  // TODO: REFRESHING PAGE RESETS COUNTDOWN TIMER - NEED TO PREVENT THIS
  const minutes: number = 2
  const seconds: number = minutes * 60

  const subscriptionRemainingMins: number = 35;
  const subscriptionRemainingSecs: number = (subscriptionRemainingMins * 60)-seconds;

  const [clockRunning, setClockRunning] = useState(true)
  const [canDecline, setCanDecline] = useState(true)

  const timerProps = {
    isPlaying: clockRunning,
    size: 170,
    strokeWidth: 10,
  }

  const countDownExpired = () => {
    console.log('TIME EXPIRED')
    setCanDecline(false)
    // TODO: 1. pass "canDecline" state to "ChatActions" component to negate "Declne" button
    // TODO: 2. start countdown clock from (remaining subscription minutes) minus (minutes)
  }

  const test = () => {
    console.log('TEST CLICKED')
  }

  const renderCountDown = ({ remainingTime }: any) => {
    if (remainingTime === 0) {
      countDownExpired()
    // TODO: IMPLEMENT REPLACEMENT CLOCK
    } else if (remainingTime <= 60) {
      return (
        <Box>
          <Text
            color="black"
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={25}
            fontWeight={800}
          >
            {remainingTime}
          </Text>
          <Text
            color="black"
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={20}
            fontWeight={400}
          >
            seconds
          </Text>
          <Text
            color="black"
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={20}
            fontWeight={400}
          >
            remaining
          </Text>
        </Box>
      )
    } else {
      return (
        <Box>
          <Text
            color="black"
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={25}
            fontWeight={800}
          >
            {Math.ceil(remainingTime / 60)}
          </Text>
          <Text
            color="black"
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={20}
            fontWeight={400}
          >
            mins
          </Text>
          <Text
            color="black"
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={20}
            fontWeight={400}
          >
            remaining
          </Text>
        </Box>
      )
    }
  }

  return (
    <Flex direction="row">
      <Button
        onclick={test}
      >
        Test
      </Button>
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={timerProps.isPlaying}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
        duration={seconds}
        onComplete={() => [false, seconds]}
      >
        {renderCountDown}
      </CountdownCircleTimer>
    </Flex>
  )
}

export default ChatDuration
