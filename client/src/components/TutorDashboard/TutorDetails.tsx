import React from 'react'
import { Flex, Box, List } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import StudentService from '../../ApiService/StudentService';
import dotenv from 'dotenv';

dotenv.config();

export const TutorDetails = () => {

  async function test () {
    console.log("clicked");
    // const students = await StudentService.updateStudentById("testid", {
    //   name: 'updatedtestname'
    // })
    const students = await StudentService.getAllStudents();
    console.log(students);
  }

  // {
  //   name?: string
  //   bio?: string
  //   photo_url?: string
  //   spoken_language?: string[]
  //   location?: string
  
  // }


  return (
    <Flex flexDirection="column">
      <Box mt={2} py={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color="#A5B4FC">Personal Details:</Box>
      
      <Button onClick={test}>
        Api Test
      </Button>
    </Flex>
  )
}
