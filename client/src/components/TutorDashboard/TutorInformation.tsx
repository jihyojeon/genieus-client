import {
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  Tag,
  TagLabel,
  VStack,
  useDisclosure,
  Wrap,
  WrapItem,
  CloseButton,
  TagCloseButton
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

import { auth } from '../../firebase'
import { useGetTutorByIdQuery, useUpdateTutorMutation} from '../../redux/services/tutorService'


export const TutorInformation = () => {
  const [userId, setUserId] = useState()
  const [spokenLanguage, setSpokenLanguage] = useState([])
  //@ts-ignore
  const tutor = useGetTutorByIdQuery(userId)
  const [updateTutor, updateTutorResult] = useUpdateTutorMutation()

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      // @ts-ignore
      setUserId(item.uid)
    })
  }, [])

  useEffect(() => {
    //@ts-ignore
    setSpokenLanguage(tutor.data?.spoken_language)
  },[tutor.data?.spoken_language])

  function removeLanguage(language: string){
    updateTutor({
      //@ts-ignore
      id: tutor.data.id,
      spoken_language: spokenLanguage.filter(lang => lang !== language),
    })
  }


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
          <Wrap mt={2} spacing={2}>
            {spokenLanguage && spokenLanguage.map((language, index) => {
              return (
                <WrapItem key={index}>
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel>{language}</TagLabel>
                    <TagCloseButton onClick={() => removeLanguage(language)}/>
                  </Tag>
                </WrapItem>
              )
            })}
          </Wrap>
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
            <Wrap align="left" mt={2} spacing={2}>
              {tutor.data?.programming_languages?.map((language, index) => {
                return (
                  <WrapItem key={index}>
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel fontWeight="bold">
                      {language}
                    </TagLabel>
                  </Tag>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
