import React from 'react'
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    useColorModeValue,
    Text,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

// TODO: pull from database/state/props
const name: string = "Louis"
const tier: string = "Pro"
const tierIcon: any = "test"

const CornerProfile = () => {
  return (
    <Flex flexDirection={"row"}>
      <Flex flexDirection={"column"}>
        <Heading>Welcome {name}</Heading>
        <Text>{tier} Tier {tierIcon}</Text>
      </Flex>
      <Image
        src="https://bit.ly/sage-adebayo"
        boxSize="60px"
        borderRadius="50px"
        m="5"
      />
    </Flex>
  )
}

export default CornerProfile
