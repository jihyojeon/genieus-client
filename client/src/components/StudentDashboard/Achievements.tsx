import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import {  } from '@chakra-ui/icons'
import { MdCheckCircle, MdRemoveCircleOutline } from 'react-icons/md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const mainBoxColor: string = '#374151'
const lottieFirework: any = require('../../assets/lottie/firework/83980-fireworkc.json')

const Achievements = () => {
  // TODO: EXPAND LINE SPACING
  // TODO: FVOURITES
  // TODO: SHADOW ON CREATE REQUEST BUTTON

  return (
    <Flex
      bg={mainBoxColor}
      borderColor={'white'}
      borderWidth={'solid'}
      borderRadius={'2rem'}
      color={'white'}
      flexDirection="column"
      p={'1rem'}
      h="100%"
    >
      {/* <VStack> */}

      <Flex flexDirection="row" bg="red" justify={'space-between'}>
        <Heading as="h1" size="xl" fontWeight="600" zIndex={10}>
          Achievements
        </Heading>
        <Box position="relative" right={"5%"} top={"-5%"} width="50px" h="70px" bg="blue" zIndex="5">
          <Lottie animationData={lottieFirework} style={{ width: '100px' }} />
        </Box>
      </Flex>

      <List spacing={3} position="relative" bg="purple" zIndex={0}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500"/>completed bio
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500'/>completed first request
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500'/>member for 3 months
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500'/>favourited a tutor
        </ListItem>
        <ListItem>
          <ListIcon as={MdRemoveCircleOutline} color='green.500'/>5 JavaScript help requests
        </ListItem>
      </List>
    </Flex>
  )
}

export default Achievements
