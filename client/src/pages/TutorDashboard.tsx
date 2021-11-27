import React from 'react';
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import Topbar from '../components/TutorDashboard/Topbar';
import { IncomingRequests } from '../components/TutorDashboard/IncomingRequests';
import { TutorStats } from '../components/TutorDashboard/TutorStats';

const dark = '#121212';
const light = 'gray.100';

const TutorDashboard = () => {
  return (
    <Box bg={useColorModeValue(dark, light)}>
      <Topbar />
      <Grid
        h="90vh"
        py={2}
        px={4}
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={3}>
          <IncomingRequests/>
        </GridItem>

        <GridItem rowSpan={5} colSpan={1} >
          <TutorStats/>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3} bg="papayawhip"></GridItem>
      </Grid>
      
      
    </Box>
  )
}

export default TutorDashboard
