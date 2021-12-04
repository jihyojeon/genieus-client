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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


import { auth } from '../../firebase'
import { useGetTutorByIdQuery } from '../../redux/services/tutorService'


export const TutorInformation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [userId, setUserId] = useState()
  //@ts-ignore
  const tutor = useGetTutorByIdQuery(userId)

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
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
          <Text fontSize={"sm"} color="#ca84dbc7">{tutor.error
                        ? 'error'
                        : tutor.isLoading
                        ? 'loading'
                        : tutor.data
                        ? tutor.data.bio
                        : undefined}
          </Text>
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

          <Flex>
            <VStack align="left" mt={3} spacing={5}>
              {tutor.data?.programming_languages?.map(language => {
                return (
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel fontWeight="bold">
                      {language}
                    </TagLabel>
                  </Tag>
                )
              })}
            </VStack>
          </Flex>
        </Flex>
      </Box>
      <Box>
        
      </Box>
    </Flex>
  )
}
