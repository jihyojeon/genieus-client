import { useState, useEffect } from 'react'
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

//  @ts-ignore
const ChatDuration = (props: any) => {
  // TODO: TEST DATA------------REPLACE
  const seconds: number = 10

  const subscriptionRemainingSecs: number = 600


  // TODO: TEST DATA------------UNCOMMENT
  // const seconds: number = props.seconds
  // const subscriptionRemainingSecs: number =
  //   subscriptionRemainingMins * 60 - seconds

  const [isTutor, setIsTutor] = useState(false)
  const [initialTimer, setInitialTimer] = useState(seconds)
  const [secondTimer, setSecondTimer] = useState(subscriptionRemainingSecs)
  const [clockRunning, setClockRunning] = useState(true)

  const [key, setKey] = useState(0) // needed for re-setting clock after initial timer

  const countDownExpired = () => {
    console.log('COUNTDOWNEXPIRED FUNCTION TRIGGERED')
    props.setCanDecline(false)
    // TODO: 1. pass "canDecline" state to "ChatActions" component to negate "Decline" button (grey out button or replace popup with one stating declining is no longer possible)

    if (isTutor) {
      // TODO: TUTOR SHOULD NOW SEE A CLOCK COUNTING UP TO SHOW TIME ON CALL
      return <Text>Show Time Elapsed Instead</Text>
    } else {
      setClockRunning(true)
      setInitialTimer(secondTimer)
      setKey(1)
    }
  }

  const declineClicked = () => {
    console.log('CD DECLINED')
    // TODO:
  }

  const zoomClicked = () => {
    console.log('CD ZOOM CLICKED')
    setSecondTimer(subscriptionRemainingSecs)
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
    <Box
      alignItems="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="1rem"
      direction="column"
      padding="1rem"
      marginTop={'1rem'}
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
