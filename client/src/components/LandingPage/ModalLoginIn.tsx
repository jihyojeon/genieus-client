import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { signInWithGoogle } from '../../firebase'

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
} from '@chakra-ui/react'

import { FaGoogle } from 'react-icons/fa'

//@ts-ignore
const ModalLogIn = ({ isOpen, onClose }) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginpassword, setLoginPassword] = useState('')

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginpassword
            )
            console.log(`${user} Logged in!`)
        } catch (error) {
            //@ts-ignore
            console.log(error)
        }
    }

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent fontFamily="chivo">
                <ModalHeader
                    m={0}
                    fontWeight="400"
                    align="center"
                    fontSize="30px"
                >
                    Log In
                </ModalHeader>

                <ModalBody>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                    >
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
                        <FormControl my={4} id="email" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size="md">
                                <Input
                                    onChange={(e) =>
                                        setLoginPassword(e.target.value)
                                    }
                                    type={show ? 'text' : 'password'}
                                    placeholder="Enter password"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                    >
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                            onClick={signInWithGoogle}
                            mt={4}
                            colorScheme="facebook"
                            leftIcon={<FaGoogle />}
                        >
                            Sign in with Google
                        </Button>
                    </Flex>
                </ModalBody>

                <ModalCloseButton />

                <ModalFooter>
                    <Button onClick={login} w="100%" variant="primary">
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalLogIn
