import React, { useState } from 'react'
import {
  IconButton,
  HStack,
  Stat,
  StatNumber,
  StatLabel,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

type StarRatingProps = {
  clickHandler: (idx: number) => void
  rating: number
}

const StarRating = ({ clickHandler, rating }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const scale = 5
  const buttons = []

  type RatingButtonProps = {
    idx: number
    hasFill: boolean
    colorIdx: number
  }

  const iconcolor = [
    useColorModeValue('gray.400', 'gray.300'),
    useColorModeValue('red.400', 'red.300'),
    useColorModeValue('orange.400', 'orange.300'),
    useColorModeValue('yellow.400', 'yellow.300'),
    useColorModeValue('cyan.400', 'cyan.300'),
  ]

  const RatingButton = ({ idx, hasFill, colorIdx }: RatingButtonProps) => {
    return (
      <IconButton
        icon={<FaStar size="1.6rem" />}
        aria-label={`Rate ${idx}`}
        borderRadius="50%"
        variant="ghost"
        size="md"
        color={hasFill ? iconcolor[colorIdx - 1] : 'gray.300'}
        onClick={() => clickHandler(idx)}
        onMouseEnter={() => setHoverRating(idx)}
        onMouseLeave={() => setHoverRating(null)}
        opacity={hasFill ? 1 : 0.5}
      />
    )
  }
  for (let i = 1; i <= scale; i++) {
    buttons.push(
      <RatingButton
        key={i}
        idx={i}
        colorIdx={hoverRating ? hoverRating : rating}
        hasFill={i <= (hoverRating ? hoverRating : rating)}
      />
    )
  }
  return (
    <Flex justifyContent="space-between">
      <HStack isInline>{buttons}</HStack>
      <Stat textAlign="end">
        <StatNumber sx={{ display: 'inline' }}>{rating}</StatNumber>
        <StatLabel sx={{ display: 'inline' }}>/5</StatLabel>
      </Stat>
    </Flex>
  )
}

export default StarRating
