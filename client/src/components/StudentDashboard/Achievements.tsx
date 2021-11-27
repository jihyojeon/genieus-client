import React from 'react'
import {
    Flex,
    Heading,
    Image,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const mainBoxColor: string = "#374151"

const Achievements = () => {
  return (
    <Flex
      bg={ mainBoxColor }
      borderColor={'white'}
      borderWidth={'solid'}
      borderRadius={'2rem'}
      color={"white"}    
      flexDirection="column"
      p={'1rem'}
      h="100%"
    >
    
      <Heading as="h1" size="xl" fontWeight="600">Achievements</Heading>
      {/* TODO: INSERT FIREWORK */}
      {/* TODO: EXPAND LINE SPACING */}
      <UnorderedList>
        <ListItem>
          <Heading as="h2" size="l">completed bio</Heading>
        </ListItem>
        <ListItem>
          <Heading as="h2" size="l">completed first request</Heading>
        </ListItem>
        <ListItem>
          <Heading as="h2" size="l">member for 3 months</Heading>
        </ListItem>
        <ListItem>
          <Heading as="h2" size="l">favourited a tutor</Heading>
        </ListItem>
        <ListItem>
          <Heading as="h2" size="l">5 JavaScript help requests</Heading>
        </ListItem>
      </UnorderedList>
    </Flex>
  )
}

export default Achievements
