import React from 'react'
import { Flex, Box, List } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import StudentService from '../../ApiService/StudentService';
import dotenv from 'dotenv';
import TutorService from '../../ApiService/TutorService';
import HelpRequestService from '../../ApiService/HelpRequestService';
import SubscriptionService from '../../ApiService/SubscriptionService';

dotenv.config();

export const TutorDetails = () => {

  async function test () {
    console.log("clicked");
    // const test = await TutorService.getAllTutors()
    // const test = await TutorService.deleteTutorById('testid')
    // const test = await TutorService.addTutor({
    //   email: "testemail",
    //   name: "testname",
    //   id: "testid",
    //   photo_url: "testphoto",
    //   spoken_language: ["hello"]
    // })

    // const test = await HelpRequestService.updateHelpRequestById("string", 
    // {
    //   description: "this is an update from the apiservice"
    // })

    // USING PARAMS
    // const test = await HelpRequestService.getHelpRequestsByParams(new URLSearchParams({
    //   student_id: 'fea8be3e64777240'
    // }).toString())

    // const test = await StudentService.addStudent({
    //   email: "test",
    //   name: "testname",
    //   id: "testid3",
    //   subscription_type: "basic",
    //   photo_url: "url",
    //   spoken_language: ['mandarin']
    // })

    const test = await StudentService.blockTutor('testid3', {
      tutor_id: 'hello'
    })
    console.log(test);
  }


  return (
    <Flex flexDirection="column">
      <Box mt={2} py={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color="#A5B4FC">Personal Details:</Box>
      
      <Button onClick={test}>
        Api Test
      </Button>
    </Flex>
  )
}
