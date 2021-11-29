import React from 'react'
import { Flex, Heading, List, ListItem } from '@chakra-ui/react'

const mainBoxColor: string = "#374151"

const helpDuration: number = 23 // TOTAL DURATION OF HELP REQUESTS THIS MONTH
const remainingCredit: number = 93 // MINUTES OF HELP REQUESTS REMAINING THIS MONTH
const remainingDays: number = 13 // DAYS REMAINING UNTIL START OF NEXT BILLIGNG CYCLE

const Interactions = () => {
  return (
    <Flex
      bg={ mainBoxColor }
      borderColor={'white'}
      borderRadius={'2rem'}
      borderWidth={'solid'}
      color={"white"}    
      flexDirection="column"
      h="100%"
      p={'1rem'}
    >

      <Heading as="h1" size="xl" fontWeight="600" bg="red">
        Interactions
      </Heading>
      <br/>
      <Heading as="h2" size="l" fontWeight="500">
        Amazing! You've problem-solved with one of our tutors for {helpDuration} minutes this month!
      </Heading>
      <br/>
      <List spacing={3}>
        
        <Heading as="h2" size="l">
          Credit remaining
        </Heading>
        <ListItem>{remainingCredit} minutes</ListItem>
        
        <Heading as="h2" size="l">
          Days remaining
        </Heading>
        <ListItem >{remainingDays} days</ListItem>
      
      </List>
    {/* TODO: INSERT PIE CHART */}
    </Flex>
  )
}

export default Interactions
