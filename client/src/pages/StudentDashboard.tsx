import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
// import Achievements from '../components/StudentDashboard/Achievements'
import CornerProfile from '../components/StudentDashboard/CornerProfile'
import CreateRequestButton from '../components/StudentDashboard/CreateRequestButton'
import Favourites from '../components/StudentDashboard/Favourites'
// import Interactions from '../components/StudentDashboard/Interactions'
import Previous from '../components/StudentDashboard/Previous'
import Stats from '../components/StudentDashboard/StudentStats'
// import { auth } from '../firebase'

// const gridBackgroundColor: string = 'hsl(217, 22%, 19%)'

const StudentDashboard = () => {
  return (
    <Grid
      gap={5}
      h="100vh"
      mh="100%"
      overflowY={'hidden'}
      padding="5"
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(4, 1fr)"
      // templateRows="auto 1fr auto"
    >
      {/* CREATE REQUEST BUTTON */}
      <GridItem rowSpan={1} colSpan={2}>
        <CreateRequestButton />
      </GridItem>

      {/* PROFILE TOPRIGHT */}
      <GridItem rowSpan={1} colSpan={1}>
        <CornerProfile />
      </GridItem>

      <GridItem w="80vh" rowSpan={1} colSpan={2}>
        <Stats />
      </GridItem>

      {/* FAVOURITES (RIGHT) PANE */}
      <GridItem rowSpan={2} colSpan={1}>
        <Favourites />
      </GridItem>

      {/* PREVIOUS (BOTTOM) PANE */}
      <GridItem rowSpan={1} colSpan={2} h="200px">
        <Previous />
      </GridItem>
    </Grid>
  )
}

export default StudentDashboard
