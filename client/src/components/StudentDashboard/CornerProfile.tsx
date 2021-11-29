import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

// TODO: pull from database/state/props
const name: string = 'Louis'
const tier: string = 'Pro'
// TODO: use font-awesome icons depending on tier
const tierIcon: any = '[CrownIcon]'

const topRightColor: string = 'white'

const CornerProfile = () => {
  return (
    <Flex flexDirection={'row'} color={topRightColor}>
      <Flex flexDirection={'column'}>
        <Heading as={'h3'} fontSize={'2xl'} fontWeight={500}>
          Welcome {name}
        </Heading>
        <Text>
          {tier} Tier {tierIcon}
        </Text>
      </Flex>
      <Image
        src="https://bit.ly/sage-adebayo"
        boxSize="8rem"
        borderRadius="4rem"
        ml="5"
      />
    </Flex>
  )
}

export default CornerProfile
