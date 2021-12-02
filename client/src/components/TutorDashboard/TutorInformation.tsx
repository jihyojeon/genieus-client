import {
  Image,
  Box,
  Flex,
  Text,
  Heading,
  List,
  UnorderedList,
  ListItem,
  HStack,
  Tag,
  TagLabel,
  Textarea,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import EditProfileModal from './EditProfileModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


import { auth } from '../../firebase'
import { useGetTutorByIdQuery } from '../../redux/services/tutorService'


export const TutorInformation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [userId, setUserId] = useState()
  //@ts-ignore
  const tutor = useGetTutorByIdQuery(userId)
  const [bioValue, setBioValue] = useState(tutor.data?.bio)

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
      //@ts-ignore
      setBioValue(tutor.data?.bio)
    })
  }, [])


  return (
    <Flex flexDirection="column">
      <Box mt={10} height="30vh" fontFamily="montserrat" h="30vh">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading
            my={2}
            fontSize="xl"
            fontWeight="340"
            color="indigo.400"
            letterSpacing={1}
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

        <Flex direction="column">
          <Text>Location:</Text>
          <HStack spacing={5}>
            <Tag mt={3} variant="outline" size="lg" colorScheme="indigo">
              <TagLabel>{tutor.error
                      ? 'error'
                      : tutor.isLoading
                      ? 'loading'
                      : tutor.data
                      ? ' ' + tutor.data.location
                      : undefined}
              </TagLabel>
            </Tag>
          </HStack>
        </Flex>

        <Flex mt={4} direction="column">
          <Text>Spoken languages:</Text>
          <HStack mt={3} spacing={5}>
            {tutor.data?.spoken_language?.map(language => {
              return (
                <Tag variant="outline" size="lg" colorScheme="indigo">
                  <TagLabel>{language}</TagLabel>
                </Tag>
              )
            })}
          </HStack>
        </Flex>

        <Flex mt={4} direction="column" maxW="15rem">
          <Text>Bio:</Text>
          <Textarea
            mt={2}
            value={bioValue}
            onChange={(e: any) => setBioValue(e.target.value)}
            border="1px solid"
            borderColor="indigo.500"
            isRequired
            minW="15rem"
            minH="8rem"
            fontFamily="montserrat"
            fontSize={'12px'}
            placeholder="Tell us a bit about youself..."
          />
        </Flex>

        <Flex
          alignItems="flex-start"
          justifyContent="center"
          fontFamily="montserrat"
          direction="column"
          maxW="25rem"
          mt={4}
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
      </Box>
      <Box>
        
      </Box>
      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
