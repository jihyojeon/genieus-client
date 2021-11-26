import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import Navbar from '../components/LandingPage/Navbar'
import Hero from '../components/LandingPage/Hero'

const LandingPage = () => {
  return (
    <Box >
      <Navbar />
      <Hero />
    </Box>
  )
}

export default LandingPage
