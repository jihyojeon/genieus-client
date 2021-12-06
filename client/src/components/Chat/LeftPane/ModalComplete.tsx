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
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

//@ts-ignore

const ModalComplete = ({ isOpen, onClose, name, photo_url }) => {
  const navigate = useNavigate()

  // TODO: ISTUTOR FLAG (true/false) DECIDES WHERE TO NAVIGATE TO ON BUTTON CLICK
  // TODO: CHANGE TO PROPS AND PASS IN FROM PREVIOUS COMPONENT
  const [isTutor, setIsTutor] = useState(true)

  const clickHandler = () => {
    if (isTutor) {
      return navigate('/tutor-dashboard')
    } else {
      return navigate('/student-feedback')
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
                  Your Help Request session with {name} is complete
                </Text>
              </ModalHeader>

              <ModalBody>
                <Avatar size={'2xl'} src={photo_url} alt={'Avatar Alt'} />
                {/* TODO: INSERT HELP REQUEST STATS HERE FOR REVIEW */}
                <Text mt="2rem">INSERT HELP REQUEST STATS HERE</Text>
              </ModalBody>
              <Flex direction="column" align="center" justify="center">
                <ModalFooter>
                  <Stack
                    align={'center'}
                    justify={'center'}
                    direction={'column'}
                    mt={1}
                  >
                    <Stack direction={'column'} spacing={4}>
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
                        onClick={clickHandler}
                      >
                        {isTutor ? 'Return to Dashboard' : 'Leave Feedback'}
                      </Button>
                    </Stack>
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

export default ModalComplete
