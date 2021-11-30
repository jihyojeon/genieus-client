import React from 'react'
import { Box, Flex, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import {} from '@chakra-ui/icons'
import { MdCheckCircle, MdRemoveCircleOutline } from 'react-icons/md'

const mainBoxColor: string = '#374151'
const lottieFirework: any = require('../../assets/lottie/firework/83980-fireworkc.json')

const colorsTickBox: string = 'green.500'

const Achievements = () => {
  return (
    <Flex
      bg={mainBoxColor}
      borderColor={'white'}
      borderWidth={'solid'}
      borderRadius={'2rem'}
      color={'white'}
      flexDirection="column"
      height="100%"
      padding={'1rem'}
    >
      <Flex flexDirection="row" justify={'space-between'}>
        <Heading as="h1" size="xl" fontWeight="600" zIndex={10}>
          Achievements
        </Heading>
        <Box position="relative" top={'-10px'} w="70px" h="70px" zIndex="5">
          <Lottie animationData={lottieFirework} style={{ width: '100px' }} />
        </Box>
      </Flex>

      <List spacing={3} position="relative" zIndex={0}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          completed bio
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          completed first help request
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          member for 3 months
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          favourited a tutor
        </ListItem>
        <ListItem>
          <ListIcon as={MdRemoveCircleOutline} color={colorsTickBox} />5
          JavaScript help requests
        </ListItem>
      </List>
    </Flex>
  )
}

export default Achievements
