import React, { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { signInWithGoogle } from '../../firebase'
import { FcGoogle } from 'react-icons/fc'
import Logo from '../../assets/icons/logo.svg'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Image,
  Text,
  FormControl,
  InputGroup,
  FormLabel,
  Input,
  Box,
  InputRightElement,
  HStack,
  Checkbox,
  FormHelperText,
  Center,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

//@ts-ignore
const ModalSignUp = ({ isOpen, onClose }) => {
  let navigate = useNavigate()

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const signup = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
      .then((user) => {
        navigate('/tutor-dashboard')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily="sans-serif">
        <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">
          Sign Up
          <Image
            src={Logo}
            position="absolute"
            top={1}
            boxSize="4.5rem"
            borderRadius="50px"
          />
        </ModalHeader>

        <ModalBody>
          <Flex justifyContent="center" alignItems="center" direction="column">
            <FormControl mb="3" id="first-name" isRequired>
              <FormLabel>Full name</FormLabel>
              <Input variant="filled" />
            </FormControl>
            <FormControl mb="2.5" id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) => setRegisterEmail(e.target.value)}
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <HStack>
              <Button
                mt={4}
                onClick={signInWithGoogle}
                w={'25rem'}
                variant={'outline'}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </HStack>

            <FormControl ml="120" mt="4" as="fieldset">
              <FormLabel as="legend">
                <Flex direction="row" justifyContent="center">
                  <Text
                    fontFamily="chivo"
                    fontWeight="bold"
                    letterSpacing="2.5"
                    fontSize="18px"
                  >
                    Please select a subscription type
                  </Text>
                </Flex>
              </FormLabel>

              <HStack spacing="24px">
                <Checkbox size="lg" colorScheme="purple">
                  Pro
                </Checkbox>
                <Checkbox size="lg" colorScheme="purple">
                  Max
                </Checkbox>
                <Checkbox size="lg" colorScheme="purple">
                  Basic
                </Checkbox>
              </HStack>
            </FormControl>
          </Flex>
        </ModalBody>

        <ModalCloseButton />

        <ModalFooter>
          <Flex fontFamily="chivo" mr={45} align="left">
            <Text mr={2}> Already a user? </Text>
            <Box onClick={isOpen}> Login </Box>
          </Flex>
          <Button onClick={signup}>Next</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalSignUp
