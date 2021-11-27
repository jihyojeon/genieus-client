import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import Navbar from '../components/LandingPage/Navbar'
import Hero from '../components/LandingPage/Hero'
import About from '../components/LandingPage/About'


const LandingPage = () => {
  return (
    <Box >
      <Navbar />
      <Hero />
      <About />
    </Box>
  )
}

export default LandingPage
