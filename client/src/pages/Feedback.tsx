import { useState } from 'react'
import {
  Avatar,
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import StarRating from '../components/Feedback/StarRating'
import StudentComments from '../components/Feedback/StudentComments'
import { useNavigate } from 'react-router-dom'

// TODO: REPLACE WITH DATABASE DATA FOR TUTOROBJSTATE
const tutorObj = {
  tutorName: 'Vic',
  callDuration: 25,
  photo: 'https://bit.ly/sage-adebayo',
}


const Feedback = () => {
  const [tutorObjState, setTutorObjState] = useState(tutorObj)
  const navigate = useNavigate()
  
  // TODO: IMPLEMENT ACTION ON SUBMIT -> UPDATE DATABASE -> RETURN TO DASHBOARD
  const submitHandler = () => {
    console.log('Submit clicked')
    navigate('/student-dashboard')
  }

  return (
    <Center>
      <Flex
        direction="column"
        align="center"
        mt="2rem"
        border="solid"
        borderRadius="3rem"
        padding="2rem"
      >
        <VStack spacing={4}>
          <Text>You were online for {tutorObjState.callDuration} minutes</Text>
          <Heading>How was your call with {tutorObjState.tutorName}?</Heading>
          <Avatar size="2xl" src={tutorObjState.photo} />
          <Heading size="sm">
            1. Add {tutorObjState.tutorName} to your favourites?
          </Heading>
          <Checkbox defaultIsNotChecked mt="1rem">
            {/* TODO: PASS TICKBOX OUTCOME TO PARENT COMPONENT FOR RECORING ON SUBMIT */}
          </Checkbox>
          <StarRating
            size={32}
            icon="StarIcon"
            scale={5}
            fillColor="gold"
            strokeColor="grey"
          />
          <StudentComments name={tutorObjState.tutorName} />
          <Flex direction="row">
            <Button mt="1rem" onClick={submitHandler}>
              Submit
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Center>
  )
}

export default Feedback
