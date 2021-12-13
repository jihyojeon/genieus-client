import { Grid, GridItem } from '@chakra-ui/react'
import CreateRequestButton from '../components/StudentDashboard/CreateRequestButton'
import Favourites from '../components/StudentDashboard/Favourites'
import Previous from '../components/StudentDashboard/Previous'
import Stats from '../components/StudentDashboard/StudentStats'
import TopBar from '../components/TopBar/TopBar'

const StudentDashboard = () => {
  return (
    <>
      <TopBar />
      <Grid
        gap={2}
        h="100vh"
        mh="50%"
        padding="5"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(4, 1fr)"
      >
        {/* CREATE REQUEST BUTTON */}
        <GridItem h="5rem" rowSpan={1} colSpan={3}>
          <CreateRequestButton />
        </GridItem>

        <GridItem h="28rem" w="53rem" rowSpan={2} colSpan={2}>
          <Stats />
        </GridItem>

        {/* FAVOURITES (RIGHT) PANE */}
        <GridItem rowSpan={2} colSpan={1}>
          <Favourites />
        </GridItem>

        {/* PREVIOUS (BOTTOM) PANE */}
        <GridItem rowSpan={1} colSpan={2}>
          <Previous />
        </GridItem>
      </Grid>
    </>
  )
}

export default StudentDashboard
