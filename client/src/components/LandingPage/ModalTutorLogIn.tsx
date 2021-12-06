import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { signInWithGoogle } from '../../firebase'
import { FcGoogle } from 'react-icons/fc'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Image,
  ModalBody,
  Button,
  Flex,
  Text,
  FormControl,
  InputGroup,
  FormLabel,
  Input,
  InputRightElement,
  Center,
  FormHelperText,
} from '@chakra-ui/react'
import Logo from '../../assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom'
import { connectToSocket } from '../../redux/services/socket'

//@ts-ignore
const ModalTutorLogIn = ({ isOpen, onClose }) => {
  let navigate = useNavigate()

  const [loginEmail, setLoginEmail] = useState('')
  const [loginpassword, setLoginPassword] = useState('')
  const [errormsg, seterrormsg] = useState('')

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginpassword)
      connectToSocket(auth)
      navigate('/tutor-dashboard')
    } catch (error) {
      if (error instanceof Error) {
        let errmsg = error.message.split(' ')
        errmsg.includes('(auth/invalid-email).')
          ? seterrormsg('Please enter a valid email...')
          : errmsg.includes('(auth/wrong-password).')
          ? seterrormsg('Incorrect password...')
          : seterrormsg('Please enter valid details...')
      }
    }
  }

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily="chivo">
        <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">
          Tutor Log In
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
            <FormControl mb="8.5" id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) => setLoginEmail(e.target.value)}
                type="email"
              />
              <FormHelperText ml={1}>
                We'll never share your email.
              </FormHelperText>
            </FormControl>
            <FormControl my={4} id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  onChange={(e) => setLoginPassword(e.target.value)}
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
            <Button
              onClick={signInWithGoogle}
              w={'25rem'}
              variant={'outline'}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Flex>
        </ModalBody>

        <ModalCloseButton />

        <ModalFooter>
          {/* LINK */}
          <Flex w="100%" direction="column">
            <Text
              color="#cc0000"
              opacity="0.7"
              fontFamily="montserrat"
              mb={2}
              textAlign="center"
            >
              {' '}
              {errormsg}
            </Text>
            <Button w="100%" onClick={login}>
              Submit
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalTutorLogIn
