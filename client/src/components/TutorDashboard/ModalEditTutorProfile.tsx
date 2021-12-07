import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../firebase'

import {
  Button,
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
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { auth } from '../../firebase'
import {
  useGetTutorByIdQuery,
  useUpdateTutorMutation,
} from '../../redux/services/tutorService'

//@ts-ignore
const ModalEditTutorProfile = ({ isOpen, onClose, tutor }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [spokenLanguage, setSpokenLanguage] = useState([])
  const [bio, setBio] = useState('')
  const [techStack, setTechStack] = useState([])
  const [Url, setUrl] = useState('')
  const [photoFile, setphotoFile] = useState(Url)
  const [avatarBadge, setAvatarBadge] = useState('')

  const [updateTutor, updateTutorResult] = useUpdateTutorMutation()

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

  const uploadFiles = (file: any) => {
    //
    if (!file) return
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL)
        })
      },
      (error) => console.log(error)
    )
  }
  uploadFiles(photoFile)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">
            <Flex minH={'50vh'} align={'center'} justify={'center'}>
              <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                rounded={'xl'}
                boxShadow={'lg'}
                p={4}
              >
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                  Tutor Profile
                </Heading>
                <FormControl id="userName">
                  <FormLabel>Photo</FormLabel>
                  <Stack direction={['column', 'row']} spacing={6}>
                    <Center>
                      <Avatar size="xl" name={tutor?.name} src={avatarBadge}>
                        <AvatarBadge
                          as={IconButton}
                          size="sm"
                          onClick={() => {
                            updateTutor({
                              id: tutor.id,
                              //@ts-ignore
                              photo_url: null,
                            })
                          }}
                          rounded="full"
                          top="-10px"
                          colorScheme="red"
                          aria-label="remove Image"
                          icon={<SmallCloseIcon />}
                        />
                      </Avatar>
                    </Center>
                    <Center w="full">
                      <FormControl>
                        <FormLabel
                          color="indigo.400"
                          fontFamily="montserrat"
                          _hover={{ cursor: 'pointer', opacity: 0.8 }}
                        >
                          Change Photo
                        </FormLabel>

                        <Input
                          w="full"
                          type="file"
                          style={{ display: 'none' }}
                          onChange={(e) => {
                            //@ts-ignore
                            setphotoFile(e.target.files[0])
                            setAvatarBadge(
                              //@ts-ignore
                              URL.createObjectURL(e.target.files[0])
                            )
                          }}
                        />
                      </FormControl>
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
                        photo_url: Url,
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
