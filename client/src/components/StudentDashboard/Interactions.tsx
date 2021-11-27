import React from 'react'
import { Flex, Heading, ListItem, UnorderedList, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const mainBoxColor: string = "#374151"

const helpDuration: number = 23 // TOTAL DURATION OF HELP REQUESTS THIS MONTH
const remainingCredit: number = 93 // MINUTES OF HELP REQUESTS REMAINING THIS MONTH
const remainingDays: number = 13 // DAYS REMAINING UNTIL START OF NEXT BILLIGNG CYCLE

const Interactions = () => {
  return (
    <Flex
      bg={ mainBoxColor }
      borderColor={'white'}
      borderWidth={'solid'}
      borderRadius={'2rem'}
      color={"white"}    
      flexDirection="column"
    p={'1rem'}
    h="100%"
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight="600"
      >
        Interactions
      </Heading>

      <Heading
        as="h2"
        size="l"
        fontWeight="500"
      >
          Amazing! You've problem-solved with one of our tutors for { helpDuration} minutes this month!
      </Heading>

      <Heading
        as="h2"
        size="l"
      >
        Credit remaining
      </Heading>
      <UnorderedList>
        <ListItem>{remainingCredit} minutes</ListItem>
      </UnorderedList>

      <Heading
        as="h2"
        size="l"
      >
        Days remaining
      </Heading>
      <UnorderedList>
        <ListItem>{remainingDays} days</ListItem>
      </UnorderedList>
    {/* TODO: INSERT PIE CHART */}
    </Flex>
  )
}

export default Interactions
