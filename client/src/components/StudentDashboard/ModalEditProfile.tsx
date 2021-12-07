import React, { useState, useEffect } from 'react'
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
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { useUpdateStudentByIdMutation } from '../../redux/services/studentService'

//@ts-ignore
const ModalEditProfile = ({ isOpen, onClose, userId, student }) => {
  const [progress, setProgress] = useState(0)
  const [updateName, setupdateName] = useState('')
  const [updateBio, setupdateBio] = useState('')
  const [Url, setUrl] = useState('')
  const [updateStudent, updateStudentResult] = useUpdateStudentByIdMutation()
  const [photoFile, setphotoFile] = useState(Url)
  const [avatarBadge, setAvatarBadge] = useState('')

  useEffect(() => {
    setupdateName(student?.name)
    setupdateBio(student?.bio)
    setUrl(student?.photo_url)
    //@ts-ignore
  }, [student?.name, student?.bio, student?.photo_url])

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
              {/* // bg={useColorModeValue('gray.50', 'gray.800')} */}
              <Stack
                spacing={4}
                w={'full'}
                maxW={'full'}
                // bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                p={6}
                my={2}
              >
                <Heading mb={5} fontSize={{ base: '2xl', sm: '3xl' }}>
                  User Profile Edit
                </Heading>
                <FormControl id="userName">
                  <FormLabel>Photo</FormLabel>
                  <Stack direction={['column', 'row']} spacing={6}>
                    <Center>
                      <Avatar
                        size="xl"
                        name={student?.name}
                        //@ts-ignore
                        src={avatarBadge}
                      >
                        <AvatarBadge
                          as={IconButton}
                          size="sm"
                          rounded="full"
                          top="-10px"
                          colorScheme="red"
                          aria-label="remove Image"
                          icon={<SmallCloseIcon />}
                          onClick={() =>
                            updateStudent({
                              id: userId,
                              //@ts-ignore
                              // photo_url: null,
                            })
                          }
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
                  <FormLabel>Name</FormLabel>
                  <Input
                    // placeholder={student?.name}
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setupdateName(e.target.value)}
                    value={updateName}
                    type="text"
                  />
                </FormControl>

                <FormControl id="bio">
                  <FormLabel>Bio</FormLabel>
                  <Input
                    // placeholder={student?.bio}
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) => setupdateBio(e.target.value)}
                    value={updateBio}
                    type="bio"
                  />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                  <Button
                    onClick={() => {
                      uploadFiles(photoFile)
                      console.log('URl', Url)

                      //@ts-ignore
                      updateStudent({
                        id: userId,
                        name: updateName,
                        bio: updateBio,
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
                  <Button variant="outline" w="full" onClick={onClose}>
                    Cancel
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

export default ModalEditProfile
