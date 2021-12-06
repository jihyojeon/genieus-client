import React from 'react'
import {
  Avatar,
  Button,
  Box,
  Checkbox,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  Textarea,
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react'
import StarRating from '../components/Feedback/StarRating'
import { FaHeart, FaBan } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'

const mockHelpRequest = {
  id: '73668645-b761-4ae2-ac96-e1a52dde2ac8',
  status: 'closed-compelted',
  description: 'this is a description',
  time_opened: '2021-12-02T15:53:37.806Z',
  time_accepted: '2021-12-02T15:53:37.806Z',
  time_closed: '2021-12-02T15:53:37.806Z',
  rating: null,
  feedback_comments: null,
  tags: null,
  language: 'fortran',
  code: 'this is some code',
  zoom_url: 'http://zoom.com/132123412341234',
  call_length: 211,
  favourites_only: false,
  tutor_id: 'sIOHhUgNX8PNU0eDXHAKM2Lnpz43',
  student_id: 'spammyboi23',
  interested_tutors: ['sIOHhUgNX8PNU0eDXHAKM2Lnpz43'],
  declined_tutors: null,
  createdAt: '2021-12-02T15:53:37.806Z',
  updatedAt: '2021-12-02T15:53:37.806Z',
  student: {
    id: 'spammyboi23',
    name: 'string',
    photo_url: 'string',
  },
  tutor: {
    id: 'sIOHhUgNX8PNU0eDXHAKM2Lnpz43',
    name: 'Obama',
    photo_url: null,
  },
}

const Feedback = () => {
  const navigate = useNavigate()
  // TODO: get help request from location state or other approach
  // const location = useLocation()
  // const helpRequest = location.state

  const submitHandler = () => {
    navigate('/student-dashboard')
  }
  const helpRequest = mockHelpRequest
  const { tutor } = mockHelpRequest
  return (
    <Box maxW="lg" margin="auto">
      <Flex
        border={'1px solid'}
        borderColor="gray.100"
        direction="column"
        shadow="lg"
        align="center"
        mt="2rem"
        borderRadius="2rem"
        padding="2rem"
      >
        <form>
          <VStack spacing="1.5rem">
            <Heading textAlign="center">
              How was your call with {tutor.name}?
            </Heading>
            <Text color="gray.500" textAlign="center">
              You were on a call for {Math.floor(helpRequest.call_length / 60)}{' '}
              minutes, {helpRequest.call_length % 60} seconds
            </Text>
            {tutor.photo_url && <Avatar size="2xl" src={tutor.photo_url} />}
            <StarRating
              size={32}
              icon="StarIcon"
              scale={5}
              fillColor="gold"
              strokeColor="grey"
            />
            <FormControl>
              <Textarea placeHolder="Add any comments here..." />
            </FormControl>
            <Flex alignItems="flex-start">
              <FormControl>
                <Checkbox
                  defaultIsNotChecked
                  colorScheme="green"
                  _hover={{
                    color: 'green.500',
                    transition: 'color .2s linear',
                  }}
                >
                  <Icon as={FaHeart} w={3} h={3} />
                  &nbsp; Favourite
                </Checkbox>
                <FormHelperText>
                  If you enjoyed working with {tutor.name} add them to your
                  favourites. You can prioritize your favourite tutors in future
                  requests.
                </FormHelperText>
              </FormControl>
              <FormControl ml={6}>
                <Checkbox
                  defaultIsNotChecked
                  colorScheme="red"
                  _hover={{ color: 'red.500', transition: 'color .2s linear' }}
                >
                  <Icon as={FaBan} w={3} h={3} />
                  &nbsp;Block
                </Checkbox>
                <FormHelperText>
                  Everyone responds differently to certain teaching styles. If
                  you prefer {tutor.name} isn't assigned to your future
                  requests, check the box above.
                </FormHelperText>
              </FormControl>
            </Flex>
            <FormControl textAlign="center">
              <Button mt="1rem" mb="2rem" onClick={submitHandler} type="button">
                Submit
              </Button>
            </FormControl>
          </VStack>
        </form>
      </Flex>
    </Box>
  )
}

export default Feedback
