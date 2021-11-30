import React from 'react'
import {
  Box,
  Button,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react'
import Topbar from '../components/TutorDashboard/Topbar'
import { IncomingRequests } from '../components/TutorDashboard/IncomingRequests'
import { TutorStats } from '../components/TutorDashboard/TutorStats'
import { TutorDetails } from '../components/TutorDashboard/TutorDetails'
import { useGetTutorByIdQuery } from '../redux/services/tutorService'


const TutorDashboard = () => {
  const { data, error, isLoading } = useGetTutorByIdQuery('fea8be3e6479812379')



  return (
    <Box>
      <Button
        onClick={() => {
          console.log(data)
        }}

        // onClick={() => dispatch(updateFullTutorInfo('fea8be3e6479812379'))}
      >
        update state
      </Button>

      <Button onClick={() => console.log('')}> See state</Button>
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
          <IncomingRequests />
        </GridItem>

        <GridItem rowSpan={5} colSpan={1}>
          <TutorStats />
        </GridItem>

        <GridItem rowSpan={2} colSpan={3}>
          <TutorDetails />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TutorDashboard
