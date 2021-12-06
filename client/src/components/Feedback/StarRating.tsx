import { useState } from 'react'
import { IconButton, HStack } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ size, icon, scale, fillColor, strokeColor }: any) => {
  const [rating, setRating] = useState(0)

  const buttons = []

  const clickHandler = (idx: any) => {
    if (!isNaN(idx)) {
      if (rating === 1 && idx === 1) {
        setRating(0)
      } else {
        setRating(idx)
      }
    }
  }

  const RatingButton = ({ idx, fill }: any) => {
    return (
      <IconButton
        icon={<FaStar size="1.6rem" />}
        aria-label={`Rate ${idx}`}
        borderRadius="50%"
        variant="ghost"
        size="md"
        color={fill ? 'indigo.600' : 'gray.300'}
        onClick={() => clickHandler(idx)}
        fillOpacity={fill ? '100%' : '0'}
      />
    )
  }
  for (let i = 1; i <= scale; i++) {
    buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />)
  }
  return (
    <HStack isInline justify="center">
      {buttons}
    </HStack>
  )
}

export default StarRating
