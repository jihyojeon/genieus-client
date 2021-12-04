//@ts-ignore
import React, { useState } from 'react'
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Avatar,
  Box,
  Center,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

//@ts-ignore

const ModalDecline = ({ isOpen, onClose, name, imageUrl }) => {
  const navigate = useNavigate()

  // TODO: DECIDES WHERE TO NAVIGATE ON DECLINE.
  const [isTutor, setIsTutor] = useState(false)

  const abandonAction = () => {
    if (isTutor) {
      return navigate('/tutor-dashboard')
    } else {
      return navigate('/student-hr')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <Center py={6}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}
            >
              <ModalHeader>
                <Text
                  textAlign={'center'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                >
                  Do you really wish to decline this Help Request with {name}?
                </Text>
              </ModalHeader>

              <ModalBody>
                <Avatar size={'2xl'} src={imageUrl} alt={'Avatar Alt'} />
                <Text mt="3rem">
                  {isTutor
                    ? 'Clicking "Confirm" will return you to the Tutor Dashboard'
                    : 'Clicking "Confirm" will return you to the the Help Request Screen to await another tutor'}
                </Text>
              </ModalBody>
              <Flex justify="center">
                <ModalFooter >
                  <Stack direction={'column'} spacing={4}>
                    <Button
                      flex={1}
                      padding="1rem"
                      fontSize={'sm'}
                      rounded={'full'}
                      width="8rem"
                      _focus={{
                        bg: 'gray.200',
                      }}
                      onClick={abandonAction}
                    >
                      Confirm
                    </Button>
                    <Button
                      flex={1}
                      padding="1rem"
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}
                      onClick={onClose}
                      width="8rem"
                      >
                      Back to chat
                    </Button>
                  </Stack>
                </ModalFooter>
              </Flex>
            </Box>
          </Center>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ModalDecline
