import { useState } from 'react'
import {
  Avatar,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import StarRating from '../components/Feedback/StarRating'
import StudentComments from '../components/Feedback/StudentComments'

// TODO: REPLACE WITH DATABASE DATA FOR TUTOROBJSTATE
const tutorObj = {
  tutorName: 'Vic',
  callDuration: 25,
  photo: 'https://bit.ly/sage-adebayo',
}

const Feedback = () => {
  const [tutorObjState, setTutorObjState] = useState(tutorObj)

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
          <StarRating
            size={32}
            icon="StarIcon"
            scale={5}
            fillColor="gold"
            strokeColor="grey"
          />
          <StudentComments name={tutorObjState.tutorName} />
        </VStack>
      </Flex>
    </Center>
  )
}

export default Feedback
