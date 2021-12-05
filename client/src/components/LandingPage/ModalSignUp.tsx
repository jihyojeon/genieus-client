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
  Stack,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Image,
  Text,
  FormControl,
  RadioGroup,
  Radio,
  InputGroup,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  InputRightElement,
  HStack,
  FormHelperText,
  Center,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAddStudentMutation } from '../../redux/services/studentService'
import { connectToSocket } from '../../redux/services/socket'

//@ts-ignore
const ModalSignUp = ({ isOpen, onClose }) => {
  let navigate = useNavigate()
  const [addStudent, addStudentResult] = useAddStudentMutation()

  const [radioValue, setRadioValue] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [username, setUsername] = useState('')
  const [errormsg, seterrormsg] = useState('')

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )

      const userId = auth.currentUser?.uid
      connectToSocket(auth)
      await addStudent({
        email: registerEmail,
        id: userId,
        name: username,
        subscription_type: radioValue,
      })
      navigate('/student-dashboard')
    } catch (error) {
      if (error instanceof Error) {
        let errmsg = error.message.split(' ')
        console.log(errmsg)
        errmsg.includes('(auth/invalid-email).')
          ? seterrormsg('Please enter a valid email...')
          : errmsg.includes('Password')
          ? seterrormsg('Password must be more that 6 characters...')
          : errmsg.includes('(auth/email-already-in-use).')
          ? seterrormsg('Email is already in use...')
          : errmsg.includes('(auth/missing-email).')
          ? seterrormsg('Please enter a valid email...')
          : seterrormsg(error.message)
      }
    }
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
              <Input
                onChange={(e) => setUsername(e.target.value)}
                variant="filled"
              />
            </FormControl>
            <FormControl mb="2.5" id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) => setRegisterEmail(e.target.value)}
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormErrorMessage>{errormsg}</FormErrorMessage>
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
              <FormHelperText>
                Password must be more than six characters
              </FormHelperText>
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

            <FormControl
              display="flex"
              justifyContent="center"
              ml="0"
              mt="4"
              as="fieldset"
            >
              <FormLabel as="legend">
                <Flex
                  alignItems="center"
                  direction="row"
                  justifyContent="center"
                  w={'30vw'}
                >
                  <Text
                    fontFamily="montserrat"
                    fontWeight="bold"
                    letterSpacing="2.5"
                    fontSize="18px"
                    textAlign="center"
                  >
                    Please select a subscription type
                  </Text>
                </Flex>
              </FormLabel>

              <HStack
                display="flex"
                justifyContent="left"
                mr={8}
                spacing="24px"
              >
                <RadioGroup onChange={setRadioValue} value={radioValue}>
                  <Stack direction="row">
                    <Radio value="pro">Basic</Radio>
                    <Radio value="max">Pro</Radio>
                    <Radio value="basic">Max</Radio>
                  </Stack>
                </RadioGroup>
              </HStack>
            </FormControl>
          </Flex>
          <Flex
            justifyContent="center"
            fontFamily="montserrat"
            mr={55}
            align="center"
            direction="column"
            color="#cc0000"
            opacity="0.7"
          >
            <Text my={2} textAlign="center">
              {errormsg}
            </Text>
          </Flex>
          <FormControl>
            <Button my={3} w={'100%'} onClick={signup}>
              Next
            </Button>
          </FormControl>
        </ModalBody>

        <ModalCloseButton />

        {/* <ModalFooter>
          <Flex
            justifyContent="center"
            fontFamily="montserrat"
            mr={55}
            align="center"
            direction="column"
            color="#cc0000"
            opacity="0.7"
          >
            <Text mb={2} textAlign="center">
              {errormsg}
            </Text>
          </Flex>
          <FormControl>
            <Button onClick={signup}>Next</Button>
          </FormControl>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  )
}

export default ModalSignUp
