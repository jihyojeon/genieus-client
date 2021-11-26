import React from 'react'
import {Box, Grid, useColorModeValue, Flex} from '@chakra-ui/react'
import Lottie from 'react-lottie';
const dark = '#121212';
const light = 'gray.100';

const Hero = () => {
  return (
    <Box bg={useColorModeValue(dark, light)}>
      <Grid templateColumns="1.5fr 2fr">
        <Flex bg='blue' h="90vh" justifyContent="center" alignItems="center">
          <Flex flexDirection="column"></Flex>
        </Flex>
        <Flex h="90vh" bg='red'>
          hellooo
          </Flex>
        
      </Grid>
      
    </Box>
  )
}

export default Hero
