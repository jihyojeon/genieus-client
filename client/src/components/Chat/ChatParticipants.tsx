import React, { ReactNode, useState } from 'react'
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Participant from './Participant'
import ModalChat from './ModalChat'

const participantsArr: any = [
  {
    tutor: 'Vic',
    image: 'https://bit.ly/dan-abramov',
    exp1: 'JS',
    dur1: 1,
    exp2: 'Java',
    dur2: 2,
    online: 0,
    key: 0,
  },
  {
    tutor: 'Charley',
    image: 'https://bit.ly/ryan-florence',
    exp1: 'Ada',
    dur1: 2,
    exp2: 'Python',
    dur2: 2,
    online: 0,
    key: 1,
  },
]

export default function ChatParticipants() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [ particpantDetails, setParticipantDetails ] = useState(participantsArr)

  return (
    <Flex direction="column">
      <Heading
        fontFamily="montserrat"
        letterSpacing={1}
        fontSize={25}
        fontWeight={400}
        mb="1rem"
      >
        Participants
      </Heading>
      <Box bg="grey" borderRadius="1rem" padding="1rem" >

        <Flex direction="row" mb="1rem" align="center">
          {/* TODO: REPLACE THIS AND REPEATED ITEM BELOW WITH PARTICIPANT COMPONENT INSTEAD */}
          <Avatar size={'lg'} src={particpantDetails[0].image} mr="2rem" onClick= {onOpen}></Avatar>
          <Heading
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={25}
            fontWeight={400}
          >
            {particpantDetails[0].tutor}
          </Heading>
        </Flex>

          <Divider/>
        
        <Flex direction="row" mt="1rem" align="center">
        <Avatar size={'lg'} src={particpantDetails[1].image} mr="2rem"></Avatar>
          <Heading
            fontFamily="montserrat"
            letterSpacing={1}
            fontSize={25}
            fontWeight={400}
          >
            {particpantDetails[1].tutor}
          </Heading>
        </Flex>

      </Box>

      {/* TODO: REPLACE WITH STUDENT/TUTOR VERSIONS OF THIS MODAL POPUP */}
      <ModalChat isOpen={isOpen} onClose={onClose} />
      {/*  */}
    </Flex>
  )
}
