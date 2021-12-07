import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const countdownText = ({ remainingTime }: { remainingTime: number }) => {
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

const CountdownTimer = ({
  duration,
  key,
}: {
  duration: number
  key: number
}) => {
  console.log(duration)
  return (
    <CountdownCircleTimer
      colors={[
        ['#3B82F6', 0.8],
        ['#1D4ED8', 0.1],
        ['#9B2C2C', 0.1],
      ]}
      duration={duration}
      isPlaying={true}
      rotation={'clockwise'}
      key={key}
      size={170}
      strokeWidth={10}
      onComplete={() => [false, 0]}
    >
      {countdownText}
    </CountdownCircleTimer>
  )
}

export default CountdownTimer
