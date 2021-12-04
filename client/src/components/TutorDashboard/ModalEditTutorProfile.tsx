import React, { useEffect, useState } from 'react'

import {
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Textarea,
  Tag,
  TagLabel,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { auth } from '../../firebase'
import {
  useGetTutorByIdQuery,
  useUpdateTutorMutation,
} from '../../redux/services/tutorService'

//@ts-ignore
const ModalEditTutorProfile = ({ isOpen, onClose, tutor }) => {
  let spokenLanguagesArr: string[] = []
  if (tutor) {
    spokenLanguagesArr = [...tutor.spoken_language]
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [languageText, setLanguageText] = useState('')
  const [spokenLanguage, setSpokenLanguage] = useState<string[]>([])
  const [bio, setBio] = useState('')
  const [techStack, setTechStack] = useState([])

  const [updateTutor, updateTutorResult] = useUpdateTutorMutation()

  useEffect(() => {
    setSpokenLanguage(spokenLanguagesArr)
  }, [])

  useEffect(() => {
    setName(tutor?.name)
    setEmail(tutor?.email)
    setLocation(tutor?.location)
    setSpokenLanguage(tutor?.spoken_language)
    setBio(tutor?.bio)
    setTechStack(tutor?.programming_languages)
  }, [
    tutor?.name,
    tutor?.email,
    tutor?.location,
    tutor?.spoken_language,
    tutor?.bio,
    tutor?.programming_languages,
  ])

  //@ts-ignore
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      console.log(spokenLanguagesArr)
      // spokenLanguagesArr.push(e.target.value)
      setSpokenLanguage(prior => [...prior, e.target.value])
      console.log(spokenLanguage)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <ModalHeader fontWeight="400" align="center" fontSize="30px">
            <Flex minH={'50vh'} align={'center'} justify={'center'}>
              <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                rounded={'xl'}
                boxShadow={'lg'}
                p={3}
              >
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                  Tutor Profile
                </Heading>
                <FormControl id="userName">
                  <FormLabel>Photo</FormLabel>
                  <Stack direction={['column', 'row']} spacing={6}>
                    <Center>
                      <Avatar size="xl" src={tutor?.photo_url}>
                        <AvatarBadge
                          as={IconButton}
                          size="sm"
                          rounded="full"
                          top="-10px"
                          colorScheme="red"
                          aria-label="remove Image"
                          icon={<SmallCloseIcon />}
                        />
                      </Avatar>
                    </Center>
                    <Center w="full">
                      <Button w="full">Change Photo</Button>
                    </Center>
                  </Stack>
                </FormControl>
                <FormControl id="userName">
                  <FormLabel>Name:</FormLabel>
                  <Input
                    placeholder={tutor?.name || 'Your Name'}
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address:</FormLabel>
                  <Input
                    placeholder={tutor?.email || 'your-email@example.com'}
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                  />
                </FormControl>
                <FormControl id="location">
                  <FormLabel>Location:</FormLabel>
                  <Input
                    placeholder={tutor?.location || 'Silicon Valley'}
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    type="location"
                  />
                </FormControl>
                <FormControl id="spoken_languages">
                  <FormLabel>Spoken Languages:</FormLabel>
                  <Input
                    placeholder="English"
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) =>
                      //@ts-ignore
                      setLanguageText(e.target.value)
                    }
                    onKeyDown={handleEnterPress}
                    type="spoken_languages"
                  />
                  {spokenLanguage !== undefined &&
                    //@ts-ignore
                    spokenLanguage.map((language) => {
                      return (
                        <Tag
                          mx={3}
                          mt={2}
                          variant="outline"
                          size="lg"
                          colorScheme="indigo"
                        >
                          <TagLabel textAlign="center">{language}</TagLabel>
                          <CloseButton size="sm" textAlign="center" />
                        </Tag>
                      )
                    })}
                </FormControl>
                <FormControl id="bio">
                  <FormLabel>Bio:</FormLabel>
                  <Textarea
                    placeholder="Hi! I'm Matt, 27, and I have 31 years experience at Glue"
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    type="bio"
                  />
                </FormControl>
                <FormControl id="tech_stack">
                  <FormLabel>Tech Stack:</FormLabel>
                  <Input
                    placeholder="Python, Javascript"
                    _placeholder={{ color: 'gray.500' }}
                    //@ts-ignore
                    onChange={(e) => setTechStack(e.target.value.split(', '))}
                    value={techStack ? techStack.join(', ') : undefined}
                    type="tech_stack"
                  />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                  <Button
                    onClick={() => onClose()}
                    bg={'red.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'red.500',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      //@ts-ignore
                      updateTutor({
                        id: tutor.id,
                        name: name,
                        email: email,
                        location: location,
                        spoken_language: spokenLanguage,
                        bio: bio,
                        programming_languages: techStack,
                      })
                      onClose()
                    }}
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalHeader>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ModalEditTutorProfile
