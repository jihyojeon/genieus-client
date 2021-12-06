import React from 'react'
import {
  IconButton,
  HStack,
  Stat,
  StatNumber,
  StatLabel,
  Flex,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

type StarRatingProps = {
  clickHandler: (idx: number) => void
  rating: number
}

const StarRating = ({ clickHandler, rating }: StarRatingProps) => {
  const scale = 5
  const buttons = []

  type RatingButtonProps = {
    idx: number
    hasFill: boolean
  }

  const fillColors = [
    'red.400',
    'orange.400',
    'yellow.500',
    '#83bb48',
    'green.400',
  ]

  const RatingButton = ({ idx, hasFill }: RatingButtonProps) => {
    return (
      <IconButton
        icon={<FaStar size="1.6rem" />}
        aria-label={`Rate ${idx}`}
        borderRadius="50%"
        variant="ghost"
        size="md"
        color={hasFill ? fillColors[rating - 1] : 'gray.300'}
        onClick={() => clickHandler(idx)}
        fillOpacity={hasFill ? '100%' : '0'}
      />
    )
  }
  for (let i = 1; i <= scale; i++) {
    buttons.push(<RatingButton key={i} idx={i} hasFill={i <= rating} />)
  }
  return (
    <Flex justifyContent="space-between">
      <HStack isInline>{buttons}</HStack>
      <Stat textAlign="end">
        <StatNumber>
          {rating} <StatLabel sx={{ display: 'inline' }}>/5</StatLabel>
        </StatNumber>
      </Stat>
    </Flex>
  )
}

export default StarRating
