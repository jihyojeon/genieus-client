import { useState } from 'react'
import { Box, Icon, Image, VStack } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import StarIcon from '../../assets/icons/star.svg'

const StarRating = ({ size, icon, scale, fillColor, strokeColor }: any) => {
  const [rating, setRating] = useState(0)
  const buttons = []

  const onClick = (idx: any) => {
    if (!isNaN(idx)) {
      if (rating === 1 && idx === 1) {
        setRating(0)
      } else {
        setRating(idx)
      }
    }
    console.log('Click')
    console.log(rating)
  }

  // TODO: NEEDS FIXING
  const RatingIcon = ({ fill }: any) => {
    return (

          // <SunIcon
          //   // name={SunIcon}
          //   size={`${size}px`}
          //   color={fill ? "red" : "blue" }
          //   stroke={strokeColor}
          //   onClick={onClick}
          //   fillOpacity={fill ? '100%' : '0'}
          // />


      <Image
        src={StarIcon}
        size={`${size}px`}
        color={fill ? 'red' : 'blue'}
        stroke={strokeColor}
        onClick={onClick}
        fillOpacity={fill ? '100%' : '0'}
      />
    )
  }

  const RatingButton = ({ idx, fill }: any) => {
    return (
      <Box
        // variant="unstyled"
        as="button"
        aria-label={`Rate ${idx}`}
        height={`${size}px`}
        width={`${size}px`}
        mx={1}
        onClick={() => onClick(idx)}
        _focus={{ outline: 0 }}
      >
        <RatingIcon fill={fill} />
      </Box>
    )
  }

  for (let i = 1; i <= scale; i++) {
    buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />)
  }

  return (
    <VStack isInline mt={8} justify="center">
      {buttons}
    </VStack>
  )
}

export default StarRating
