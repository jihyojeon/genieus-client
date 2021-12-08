import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
// import Topbar from '../components/TutorDashboard/Topbar'
import { IncomingRequests } from '../components/TutorDashboard/IncomingRequests'
import { TutorInformation } from '../components/TutorDashboard/TutorInformation'
import { TutorStats } from '../components/TutorDashboard/TutorStats'
import TopBar from '../components/TopBar/TopBar'
import PreviousRequests from '../components/TutorDashboard/PreviousRequests'

const TutorDashboard = () => {
  return (
    <Box>
      <TopBar tutor={true} />
      <Grid
        // h="90vh"
        py={2}
        px={4}
        templateRows="auto 1fr auto"
        templateColumns="auto 1fr"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <IncomingRequests />
        </GridItem>

        <GridItem rowSpan={2} colSpan={1}>
          <TutorInformation />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <TutorStats />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <PreviousRequests />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TutorDashboard
