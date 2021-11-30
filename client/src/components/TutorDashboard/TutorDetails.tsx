import React, { useState } from 'react'
import {
  Flex,
  Box,
  Heading,
  Text,
  Badge,
  Stack,
  HStack,
  VStack,
  TagLabel,
  Textarea,
  Tag,
  useDisclosure,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import StudentService from '../../ApiService/StudentService'
import dotenv from 'dotenv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import EditProfileModal from './EditProfileModal'

dotenv.config()

export const TutorDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [bioValue, setbioValue] = useState(
    'Hey, Im Daniel from Toronto. I love chess and software!'
  )
  return (
    <Box>
      <Flex alignItems="center">
        <Heading
          my={2}
          ml={5}
          fontSize="xl"
          fontWeight="400"
          color="indigo.400"
          letterSpacing={0.5}
        >
          Tutor Information:
        </Heading>
        <Box
          _hover={{ opacity: 0.8, color: 'indigo.400' }}
          onClick={onOpen}
          ml={5}
        >
          <FontAwesomeIcon size="sm" icon={faCog} />
        </Box>
      </Flex>
      {/* Info area */}

      <Flex
        mt={2}
        alignItems="center"
        justifyContent="flex-start"
        direction="row"
      >
        <Flex
          ml={5}
          mr={10}
          direction="column"
          alignItems="flex-start"
          justifyContent="space-evenly"
          maxW="15rem"
        >
          <Flex direction="column">
            <Text>Location:</Text>
            <HStack spacing={5}>
              <Tag mt={2} variant="outline" size="lg" colorScheme="indigo">
                <TagLabel>Toronto</TagLabel>
              </Tag>
            </HStack>
          </Flex>
          <Flex mt={3} direction="column">
            <Text>Non-tech languages:</Text>
            <HStack mt={3} spacing={5}>
              <Tag variant="outline" size="lg" colorScheme="indigo">
                <TagLabel>French</TagLabel>
              </Tag>
              <Tag variant="outline" size="lg" colorScheme="indigo">
                <TagLabel>English</TagLabel>
              </Tag>
            </HStack>
          </Flex>
        </Flex>

        <Flex mx={5} direction="column" maxW="15rem" ml={5}>
          <Text>Bio:</Text>
          <Textarea
            mt={2}
            value={bioValue}
            onChange={(e: any) => setbioValue(e.target.value)}
            border="1px solid"
            borderColor="indigo.500"
            isRequired
            minW="15rem"
            minH="8rem"
            fontFamily="montserrat"
            fontSize={'12px'}
            placeholder={bioValue}
          />
        </Flex>
        <Flex
          alignItems="flex-start"
          justifyContent="center"
          fontFamily="montserrat"
          direction="column"
          maxW="25rem"
          ml={10}
        >
          <Text>Your Tech Expertise:</Text>
          <Text opacity="0.6" fontSize="10px">
            Please mention language and years of experience...
          </Text>

          <Flex>
            <VStack align="left" mt={3} spacing={5}>
              <Tag variant="outline" size="lg" colorScheme="indigo">
                <TagLabel fontWeight="bold">
                  JavaScript -
                  <Text fontWeight="200" ml="4" as="span" opacity="0.8">
                    5 years experience
                  </Text>
                </TagLabel>
              </Tag>
              <Tag variant="outline" size="lg" colorScheme="indigo">
                <TagLabel fontWeight="bold">
                  Python -
                  <Text fontWeight="200" ml="4" as="span" opacity="0.8">
                    2 years experience
                  </Text>
                </TagLabel>
              </Tag>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

// async function test() {
//   console.log('clicked')
//   // const test = await TutorService.getAllTutors()
//   // const test = await TutorService.deleteTutorById('testid')
//   // const test = await TutorService.addTutor({
//   //   email: "testemail",
//   //   name: "testname",
//   //   id: "testid",
//   //   photo_url: "testphoto",
//   //   spoken_language: ["hello"]
//   // })

//   // const test = await HelpRequestService.updateHelpRequestById("string",
//   // {
//   //   description: "this is an update from the apiservice"
//   // })

//   // USING PARAMS
//   // const test = await HelpRequestService.getHelpRequestsByParams(new URLSearchParams({
//   //   student_id: 'fea8be3e64777240'
//   // }).toString())

//   // const test = await StudentService.addStudent({
//   //   email: "test",
//   //   name: "testname",
//   //   id: "testid3",
//   //   subscription_type: "basic",
//   //   photo_url: "url",
//   //   spoken_language: ['mandarin']
//   // })

//   const test = await StudentService.blockTutor('testid3', {
//     tutor_id: 'hello',
//   })
//   console.log(test)
