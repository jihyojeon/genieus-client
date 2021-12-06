import { AddIcon } from '@chakra-ui/icons'
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
  TagCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  Input,
  FormControl,
  FormLabel,
  PopoverBody,
  PopoverFooter,
  ListItem,
  Image
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import  FocusLock from "react-focus-lock"

import { auth } from '../../firebase'
import { useGetTutorByIdQuery, useUpdateTutorMutation} from '../../redux/services/tutorService'

import { ProgrammingLanguages } from '../../assets/devicon/ProgrammingLanguages'

export const TutorInformation = () => {
  const languageKeys = Object.keys(ProgrammingLanguages)

  const [userId, setUserId] = useState()
  const [spokenLanugages, setSpokenLanguages] = useState([])
  const [programmingLanguages, setProgrammingLanguages] = useState([])
  const [addedLanguage, setAddedLanguage] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [filteredLanguages, setFilteredLanguages] = useState(languageKeys)


  //@ts-ignore
  const tutor = useGetTutorByIdQuery(userId)
  const [updateTutor, updateTutorResult] = useUpdateTutorMutation()

  const filterLanguages = (e: any) => {
    setSearchValue(e.target.value)
    setFilteredLanguages(
      languageKeys.filter((language: string) => {

        return searchValue
          ? language.toLowerCase().includes(searchValue.toLowerCase())
          : languageKeys
      })
    )
  }

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      // @ts-ignore
      setUserId(item.uid)
    })
  }, [])

  useEffect(() => {
    //@ts-ignore
    setSpokenLanguages(tutor.data?.spoken_language)
  }, [tutor.data?.spoken_language])

  useEffect(() => {
    //@ts-ignore
    setProgrammingLanguages(tutor.data?.programming_languages)
  }, [tutor.data?.programming_languages])

  function removeSpokenLanguage(language: string) {
    updateTutor({
      //@ts-ignore
      id: tutor.data.id,
      spoken_language: spokenLanugages.filter(lang => lang !== language),
    })
  }

  function addSpokenLanguage() {
    updateTutor({
      //@ts-ignore
      id: tutor.data.id,
      spoken_language: [...spokenLanugages, addedLanguage]
    })
    setAddedLanguage('')
  }

  function removeProgrammingLanguage(language: string) {
    updateTutor({
      //@ts-ignore
      id: tutor.data.id,
      programming_languages: programmingLanguages.filter(lang => lang !== language)
    })
  }

  function addProgrammingLanguage() {
    updateTutor({
      //@ts-ignore
      id: tutor.data.id,
      programming_languages: [...programmingLanguages, addedLanguage]
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
            {spokenLanugages && spokenLanugages.map((language, index) => {
              return (
                <WrapItem key={index}>
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel>{language}</TagLabel>
                    <TagCloseButton onClick={() => removeSpokenLanguage(language)}/>
                  </Tag>
                </WrapItem>
              )
            })}
            <WrapItem>
              <Popover>
                <PopoverTrigger>
                  <Tag variant="outline" size="sm" colorScheme="indigo" mt={1.5}>
                    <AddIcon/>
                  </Tag>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverHeader>Add a Language!</PopoverHeader>
                  <FocusLock returnFocus persistentFocus={false}>
                    <PopoverBody>
                      <FormControl id="language">
                        <Input
                          placeholder='Add a Language'
                          _placeholder={{ color: 'gray.500' }}
                          onChange={(e) => setAddedLanguage(e.target.value)}
                          value={addedLanguage}
                          onKeyDown={(e) => e.key === 'Enter' && addSpokenLanguage()}
                          type="text"
                        />
                      </FormControl>
                    </PopoverBody>
                  </FocusLock>
                </PopoverContent>
              </Popover>
            </WrapItem>
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

          <Wrap align="left" mt={2} spacing={2}>
            {programmingLanguages && programmingLanguages.map((language, index) => {
              return (
                <WrapItem key={index}>
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel>{language}</TagLabel>
                    <TagCloseButton onClick={() => removeProgrammingLanguage(language)}/>
                  </Tag>
                </WrapItem>
              )
            })}
            <WrapItem>
              <Popover>
                <PopoverTrigger>
                  <Tag variant="outline" size="sm" colorScheme="indigo" mt={1.5}>
                    <AddIcon/>
                  </Tag>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverHeader>Add to your Tech Stack!</PopoverHeader>
                  <FocusLock returnFocus persistentFocus={false}>
                    <PopoverBody>
                      <FormControl id="techStack">
                        <Input
                          value={searchValue}
                          type="text"
                          onChange={(e) => filterLanguages(e)}
                          onKeyDown={(e) => e.key === 'Enter' && addProgrammingLanguage()}
                          placeholder='Add a Technology'
                          _placeholder={{ color: 'gray.500' }}
                        />
                      </FormControl>
                    </PopoverBody>
                  </FocusLock>
                  <PopoverFooter>
                          {filteredLanguages.slice(0, 5).map((lang) => {
                            return (
                              <ListItem
                                onClick={() => {
                                  setAddedLanguage(lang)
                                  addProgrammingLanguage()
                                }}
                                listStyleType={'none'}
                              >
                                <Flex alignItems="center" direction="row">
                                  {/*@ts-ignore*/}
                                  <Image
                                    mr={5}
                                    height="1rem"
                                    width="1rem"
                                    borderRadius="5"
                                    // @ts-ignore
                                    src={ProgrammingLanguages[lang]}
                                  />
                                  <Text
                                    _hover={{
                                      cursor: 'pointer',
                                      opacity: '0.7',
                                      color: 'indigo.300',
                                    }}
                                  >
                                    {lang.charAt(0).toUpperCase() +
                                      lang.substr(1).toLowerCase()}
                                  </Text>
                                </Flex>
                              </ListItem>
                            )
                          })}
                        </PopoverFooter>
                </PopoverContent>
              </Popover>
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
    </Flex>
  )
}
