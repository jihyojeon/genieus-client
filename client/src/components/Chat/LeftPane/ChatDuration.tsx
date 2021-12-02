import { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const ChatDuration = (props: any) => {
  const [duration, setDuration] = useState(Date.now())

  const MINUTES: number = 3
  const SECONDS: number = MINUTES * 60

  const timerProps = {
    isPlaying: true,
    size: 170,
    strokeWidth: 10,
  }

  // TODO: IMPLEMENT ACTION WHEN COUNTDOWN TIMER REACHES LIMIT
  // TODO: FIX LOGIC TO CHANGE MINUTES TO SECONDS WHEN UNDER 60 SECONDS LEFT - USE STATE

  const renderTime = ({ remainingTime }: any) => {
    if (remainingTime === 0) {
      console.log('Countdown time ended')
      return <Text>{MINUTES} minute window expired</Text>
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
            {Math.ceil(remainingTime)}
            {/* {remainingTime < 60
              ? { remainingTime }
              : Math.ceil(remainingTime / 60)} */}
          </Text>
          <Text
            color="black"
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={20}
            fontWeight={400}
          >
            seconds
            {/* {remainingTime < 60 ? "seconds" : "minutes"} */}
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
      <Box
        bg="grey"
        borderTopLeftRadius="1rem"
        borderBottomLeftRadius="1rem"
        padding="1rem"
        marginTop={'1rem'}
      >
        <CountdownCircleTimer
          {...timerProps}
          isPlaying
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
          duration={SECONDS}
          onComplete={() => [true, SECONDS]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </Box>
    </Flex>
  )
}

export default ChatDuration
