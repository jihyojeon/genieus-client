import { useState, useEffect } from 'react'
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

//  @ts-ignore
const ChatDuration = (props: any) => {
  // TODO: REFRESHING PAGE RESETS COUNTDOWN TIMER - NEED TO PREVENT THIS
  const minutes: number = 3
  const seconds: number = minutes * 60

  // TIMER WILL SWITCH TO TIME REMAINING ON SUBSCRIPTION AFTER INITIAL TIMER EXPIRES
  const subscriptionRemainingMins: number = 35
  const subscriptionRemainingSecs: number =
    subscriptionRemainingMins * 60 - seconds

  const [clockRunning, setClockRunning] = useState(true)
  const [canDecline, setCanDecline] = useState(true)
  const [duration, setDuration] = useState(seconds)

  // useEffect(() => {
  //   console.log('USEEFFECT TRIGGERED')
  //   // TODO: RE-RENDER SCREEN BUT WITH SUBSCRIPTION TIMER
  // }, [canDecline === false])

  const timerProps = {
    isPlaying: clockRunning,
    size: 170,
    strokeWidth: 10,
  }

  const countDownExpired = () => {
    console.log('TIME EXPIRED')
    setCanDecline(false)
    console.log('CAN DECLINE: ', canDecline)
    setDuration(subscriptionRemainingSecs)
    console.log('DURATION: ', duration)
    setClockRunning(true)
    console.log('CLOCK RUNNING: ', clockRunning)
    // TODO: IMPLEMENT REPLACEMENT CLOCK
    // TODO: 1. pass "canDecline" state to "ChatActions" component to negate "Decline" button (grey out button or replace popup with one stating declining is no longer possible)
    // TODO: 2. start countdown clock from (remaining subscription minutes) minus (minutes)
  }

  const renderCountDown = ({ remainingTime }: any) => {
    if (remainingTime === 0) {
      countDownExpired()
    } else if (remainingTime <= 60) {
      return (
        <Box>
          <Text
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={25}
            fontWeight={800}
          >
            {remainingTime}
          </Text>
          <Text
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={20}
            fontWeight={400}
          >
            seconds
          </Text>
          <Text
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
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={25}
            fontWeight={800}
          >
            {Math.ceil(remainingTime / 60)}
          </Text>
          <Text
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={20}
            fontWeight={400}
          >
            mins
          </Text>
          <Text
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
    <Flex direction="row" justify="center" align="center">
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={clockRunning}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
        duration={duration}
        onComplete={() => [false, duration]}
      >
        {renderCountDown}
      </CountdownCircleTimer>
    </Flex>
  )
}

export default ChatDuration
