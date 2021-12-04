import { useState } from 'react'
import { Box, Icon, Heading, Image, VStack } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import StarIcon from '../../assets/icons/star.svg'

const StarRating = ({ size, icon, scale, fillColor, strokeColor }: any) => {
  const [rating, setRating] = useState(0)
  // TODO: 1) RETURN "rating" TO PARENT COMPONENT FOR SUBMISSION ON SUBMIT CLICK 
  const buttons = []

  const onClick = (idx: any) => {
    if (!isNaN(idx)) {
      if (rating === 1 && idx === 1) {
        setRating(0)
      } else {
        setRating(idx)
      }
    }
  }

  const RatingIcon = ({ fill }: any) => {
    return (
      
      // TODO: 2) REPLACE SUN ICONS WITH STAR ICONS BELOW
          <SunIcon
            size={`${size}px`}
            color={fill ? "red" : "blue" }
            stroke={strokeColor}
            onClick={onClick}
            fillOpacity={fill ? '100%' : '0'}
          />

        // <Image
        //   src={StarIcon}
        //   size={`${size}px`}
        //   color={fill ? 'red' : 'blue'}
        //   stroke={strokeColor}
        //   onClick={onClick}
        //   fillOpacity={fill ? '100%' : '0'}
        // />
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
    <Box>

    <VStack justify="center" mt={4}>
      <Heading size="sm">
      2. Please rate your tutor
    </Heading>
      </VStack>
    <VStack isInline mt={2} justify="center">
      {/* TODO: ADD LINE SPACING */}
      {buttons}
    </VStack>
    </Box>
  )
}

export default StarRating
