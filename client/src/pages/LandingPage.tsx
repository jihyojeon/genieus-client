import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/LandingPage/Navbar'
import Hero from '../components/LandingPage/Hero'
import About from '../components/LandingPage/About'
import Pricing from '../components/LandingPage/Pricing'
import Reviews from '../components/LandingPage/Reviews'
import Topbar from '../components/TopBar/TopBar'

const LandingPage = () => {
  return (
    <Box>
      <Topbar />
      <Hero />
      <About />
      <Pricing />
      <Reviews />
    </Box>
  )
}

export default LandingPage
