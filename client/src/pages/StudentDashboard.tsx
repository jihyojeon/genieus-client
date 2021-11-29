import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
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
      mh="100%"
      overflowY={"hidden"}
      padding="5"
      templateColumns="repeat(3, 1fr)"
      templateRows="auto 1fr auto"
    >
      
      {/* CREATE REQUEST BUTTON */}
      <GridItem rowSpan={1} colSpan={2} bg="red">
        <CreateRequestButton/>
      </GridItem>
        
      {/* PROFILE TOPRIGHT */}
      <GridItem rowSpan={1} colSpan={1} bg="red">
        <CornerProfile />
      </GridItem>

      {/* INTRACTIONS PANE */}
      <GridItem rowSpan={1} colSpan={1} bg="red">
        <Interactions />
      </GridItem>
        
      {/* ACHIEVEMENTS PANE */}
      <GridItem  rowSpan={1} colSpan={1} bg="red">
        <Achievements />
      </GridItem>
    
      {/* FAVOURITES (RIGHT) PANE */}
      <GridItem  rowSpan={2} colSpan={1} bg="red">
        <Favourites />
      </GridItem>
    
      {/* PREVIOUS (BOTTOM) PANE */}
      <GridItem rowSpan={1} colSpan={2} bg="red" h="200px">
        <Previous />
      </GridItem>
    </Grid>
  )
}

export default StudentDashboard
