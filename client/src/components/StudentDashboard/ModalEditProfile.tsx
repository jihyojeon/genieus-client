import React, { useState } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

//@ts-ignore
const ModalEditProfile = ({ isOpen, onClose }) => {
  const [updateName, setupdateName] = useState('')
  const [updateEmail, setupdateEmail] = useState('')
  const [updateBio, setupdateBio] = useState('')


  return (
      
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay>
    <ModalContent fontFamily="sans-serif">
    <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">

      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}>
        {/* // bg={useColorModeValue('gray.50', 'gray.800')} */}
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          // bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            User Profile Edit
          </Heading>
          <FormControl id="userName">
            <FormLabel>Photo</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://bit.ly/sage-adebayo">
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
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Your Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="bio">
            <FormLabel>Bio</FormLabel>
            <Input
              placeholder="Biography"
              _placeholder={{ color: 'gray.500' }}
              type="bio"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
            </Flex>
            </ModalHeader>
          
          </ModalContent>
          </ModalOverlay>
            </Modal>
    );
  }

export default ModalEditProfile


