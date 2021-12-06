import React, { useEffect, useState } from 'react'
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
  useColorModeValue,
} from '@chakra-ui/react'
import StarRating from '../Feedback/StarRating'
import { FaHeart, FaBan } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  useAddBlockedTutorMutation,
  useAddFavouriteTutorMutation,
  useGetFavouriteTutorsByIdQuery,
  useRemoveFavouriteTutorMutation,
} from '../../redux/services/studentService'
import { useUpdateHRRequestMutation } from '../../redux/services/helpRequestService'

const FeedbackForm = () => {
  // HELP REQUEST & STUDENT INFO
  const navigate = useNavigate()
  const location = useLocation()
  const helpRequest = location.state
  // const helpRequest = mockHelpRequest
  const { tutor } = helpRequest
  const userId = helpRequest.student_id
  const favouriteTutors = useGetFavouriteTutorsByIdQuery(userId)

  // FORM STATE
  const [rating, setRating] = useState(0)
  const [error, setError] = useState('')
  const [comments, setComments] = useState('')
  const [alreadyFavourite, setAlreadyFavourite] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  // check if tutor already a student favourite
  useEffect(() => {
    const checkAlreadyFavourite =
      favouriteTutors.isSuccess &&
      favouriteTutors.data.map((tutor) => tutor.id).includes(tutor.id)
    setIsFavourite(checkAlreadyFavourite)
    setAlreadyFavourite(checkAlreadyFavourite)
  }, [favouriteTutors, tutor.id])

  // QUERY MUTATION
  const [updateHr, updateHrResult] = useUpdateHRRequestMutation()
  const [addFavourite, addFavouriteResult] = useAddFavouriteTutorMutation()
  const [removeFavourite, removeFavouriteResult] =
    useRemoveFavouriteTutorMutation()
  const [addBlocked, addBlockedResult] = useAddBlockedTutorMutation()

  // FORM HANDLER FUNCTIONS
  const handleRating = (idx: any) => {
    if (!isNaN(idx)) {
      if (rating === 1 && idx === 1) {
        setRating(0)
      } else {
        setRating(idx)
        setError('')
      }
    }
  }
  const handleFavourite = () => {
    if (!isFavourite && isBlocked) {
      setIsFavourite(true)
      setIsBlocked(false)
    } else {
      setIsFavourite(!isFavourite)
    }
  }
  const handleBlocked = () => {
    if (!isBlocked && isFavourite) {
      setIsBlocked(true)
      setIsFavourite(false)
    } else {
      setIsBlocked(!isBlocked)
    }
  }
  const handleSubmit = () => {
    if (rating === 0) return setError('Please rate your call')
    const requestBody = {
      id: helpRequest.id,
      rating,
      feedback_comments: comments,
    }
    updateHr(requestBody)
    if (isFavourite && !alreadyFavourite) {
      addFavourite({
        studentId: userId,
        tutorId: tutor.id,
      })
    } else if (!isFavourite && alreadyFavourite) {
      removeFavourite({
        studentId: userId,
        tutorId: tutor.id,
      })
    }
    if (isBlocked) {
      addBlocked({
        studentId: userId,
        tutorId: tutor.id,
      })
    }
    navigate('/student-dashboard')
  }

  return (
    <Flex
      // border={'1px solid'}
      backgroundColor={useColorModeValue('white', 'gray.700')}
      direction="column"
      shadow="lg"
      align="center"
      mt="2rem"
      borderRadius="2rem"
      padding="2rem"
      maxW="lg"
      margin="auto"
    >
      <form>
        <VStack spacing="2rem">
          <Flex>
            {tutor.photo_url && (
              <Avatar size="2xl" mr="1rem" src={tutor.photo_url} />
            )}
            <Box>
              <Heading
                textAlign={tutor.photo_url ? 'start' : 'center'}
                size="lg"
              >
                How was your call with{' '}
                <Text sx={{ display: 'inline' }} color="indigo.500">
                  {tutor.name}
                </Text>
                ?
              </Heading>
              <Text
                color="gray.500"
                textAlign={tutor.photo_url ? 'start' : 'center'}
              >
                You were on a call for{' '}
                {Math.floor(helpRequest.call_length / 60)} minutes,{' '}
                {helpRequest.call_length % 60} seconds
              </Text>
            </Box>
          </Flex>
          <FormControl isRequired>
            <FormLabel>Rating</FormLabel>
            <StarRating clickHandler={handleRating} rating={rating} />
            <Text color="red.500">{error}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Comments for tutor</FormLabel>
            <Textarea
              placeholder="Add any comments to share with your tutor ..."
              onChange={(e) => setComments(e.target.value)}
              value={comments}
            />
          </FormControl>
          <Box>
            <FormLabel alignSelf="flex-start">Future request options</FormLabel>
            <Flex alignItems="flex-start">
              <FormControl>
                <Checkbox
                  colorScheme="indigo"
                  isChecked={isFavourite}
                  onChange={handleFavourite}
                  _hover={{
                    color: 'indigo.500',
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
                  isChecked={isBlocked}
                  onChange={handleBlocked}
                  colorScheme="red"
                  _hover={{
                    color: 'red.500',
                    transition: 'color .2s linear',
                  }}
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
          </Box>
          <FormControl textAlign="center">
            <Button mt="1rem" onClick={handleSubmit} type="button">
              Submit
            </Button>
          </FormControl>
        </VStack>
      </form>
    </Flex>
  )
}

export default FeedbackForm
