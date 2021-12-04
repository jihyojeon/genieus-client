import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Topbar from '../components/TutorDashboard/Topbar'
import { IncomingRequests } from '../components/TutorDashboard/IncomingRequests'
import { TutorInformation } from '../components/TutorDashboard/TutorInformation'
import { TutorStats } from '../components/TutorDashboard/TutorStats'
import { useLocation } from 'react-router'

const TutorDashboard = () => {
 
  return (
    <Box>
      <Topbar />
      <Grid
        h="90vh"
        py={2}
        px={4}
        templateRows="repeat(11, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={8} colSpan={3}>
          <IncomingRequests />
        </GridItem>

        <GridItem rowSpan={9} colSpan={1}>
          <TutorInformation />
        </GridItem>

        <GridItem rowSpan={3} colSpan={3}>
          <TutorStats />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TutorDashboard
