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
const name: string = 'Louis'
const tier: string = 'Pro'
// TODO: use font-awesome icons depending on tier
const tierIcon: any = '[CrownIcon]'

const CornerProfile = () => {
    return (
        <Flex flexDirection={'row'}>
            <Flex flexDirection={'column'}>
                <Heading>Welcome {name}</Heading>
                <Text>
                    {tier} Tier {tierIcon}
                </Text>
            </Flex>
            <Image
                src="https://bit.ly/sage-adebayo"
                boxSize="10rem"
                borderRadius="5rem"
                ml="5"
            />
        </Flex>
    )
}

export default CornerProfile
