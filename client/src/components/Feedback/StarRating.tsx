import React, { useState } from 'react'
import { Box, Icon, Stack, Text } from '@chakra-ui/react'

// [2] https://www.npmjs.com/package/react-simple-star-rating
import { Rating } from 'react-simple-star-rating'
// [2]

// [1] https://codesandbox.io/s/y8zfo?file=/src/Rating.js

const StarRating = (
  { size, icon, scale, fillColor, strokeColor }: any,
  ref: any
) => {
  const [rating, setRating] = useState(0)
  const buttons = []

  // [2] Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }
  // [2]

  const onClick = (idx: any) => {
    if (!isNaN(idx)) {
      // allow user to click first icon and set rating to zero if rating is already 1
      if (rating === 1 && idx === 1) {
        setRating(0)
      } else {
        setRating(idx)
      }
    }
  }

  const RatingIcon = ({ fill }: any) => {
    return (
      <Icon
        name={icon}
        size={`${size}px`}
        color={fillColor}
        stroke={strokeColor}
        onClick={onClick}
        fillOpacity={fill ? '100%' : '0'}
      />
    )
  }

  const RatingButton = ({ idx, fill }: any) => {
    return (
      <Box
        as="button"
        aria-label={`Rate ${idx}`}
        height={`${size}px`}
        width={`${size}px`}
        // variant="unstyled"
        mx={1}
        onClick={() => onClick(idx)}
        _focus={{ outline: 0 }}
      >
        <Text>Test</Text>
        <RatingIcon fill={fill} />
      </Box>
    )
  }

  for (let i = 1; i <= scale; i++) {
    buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />)
  }

  return (
    // [1]
      // <Stack isInline mt={8} justify="center">
      //   <input name="rating" type="hidden" value={rating} ref={ref} />
      //   {buttons}
      //   <Box width={`${size * 1.5}px`} textAlign="center">
      //     <Text fontSize="sm" textTransform="uppercase">
      //       Rating
      //     </Text>
      //     <Text fontSize="2xl" fontWeight="semibold" lineHeight="1.2em">
      //       {rating}
      //     </Text>
      //   </Box>
      // </Stack>
    // [1]

    // [2]
      <Stack isInline mt={8} justify="center">
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Available Props */
        />
      </Stack>
    // [2]
  )
}

export default StarRating
