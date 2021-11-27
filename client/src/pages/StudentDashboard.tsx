import React from 'react'
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react'
import Achievements from '../components/StudentDashboard/Achievements'
import CornerProfile from '../components/StudentDashboard/CornerProfile'
import CreateRequestButton from '../components/StudentDashboard/CreateRequestButton'
import Favourites from '../components/StudentDashboard/Favourites'
import Interactions from '../components/StudentDashboard/Interactions'
import Previous from '../components/StudentDashboard/Previous'

const gridBackgroundColor: string = "hsl(217, 22%, 19%)"

const StudentDashboard = () => {
  return (
      
    <Grid
      bg={gridBackgroundColor}
      gap={5}
      h="100vh"
      padding="5"
      templateRows="repeat(3 1fr)"
      templateColumns="repeat(3, 1fr)"
    >
      
      {/* CREATE REQUEST BUTTON */}
      <GridItem
        rowSpan={1}
        colSpan={2}
        // bg="red"
      >
        <CreateRequestButton/>
      </GridItem>
        
      {/* PROFILE TOPRIGHT */}
      <GridItem
        rowSpan={1}
        colSpan={1}
      // bg="yellow"
      >
        <CornerProfile />
      </GridItem>

      {/* INTRACTIONS PANE */}
      {/* TODO: vh needs vixing - move to other component? */}
      <GridItem
        h="70vh"
        rowSpan={1}
        colSpan={1}
        // bg="blue"
      >
        <Interactions />
      </GridItem>
        
      {/* ACHIEVEMENTS PANE */}
      <GridItem
        rowSpan={1}
        colSpan={1}
        // bg="orange"
      >
        <Achievements />
      </GridItem>
    
      {/* FAVOURITES (RIGHT) PANE */}
      <GridItem rowSpan={2} colSpan={1} bg="red">
        <Favourites />
      </GridItem>
    
      {/* PREVIOUS (BOTTOM) PANE */}
      <GridItem rowSpan={1} colSpan={2} bg="grey" h="130px">
        <Previous />
      </GridItem>
    </Grid>
  )
}

export default StudentDashboard
