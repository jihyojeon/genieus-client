import {
  Image,
  Box,
  Flex,
  Text,
  Heading,
  List,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from 'victory'

export const TutorStats = () => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ]
  return (
    <Flex flexDirection="column">
      <Box mt={10} height="30vh" fontFamily="montserrat" h="30vh">
        <Flex alignItems="center">
          <Heading
            my={2}
            ml={5}
            fontSize="xl"
            fontWeight="600"
            fontFamily="montserrat"
            color="indigo.400"
            letterSpacing={0.5}
          >
            Achievements:
          </Heading>
          <Box ml={5}>
            <FontAwesomeIcon size="lg" icon={faCrown} />
          </Box>
        </Flex>
        <UnorderedList lineHeight="2rem" ml={8}>
          <ListItem>
            <Text as="del"> Updated Profile </Text>
          </ListItem>
          <ListItem>Complete 5 reviews</ListItem>
          <ListItem>
            <Text as="del">First Python request</Text>
          </ListItem>
          <ListItem>Reach 5 star rating</ListItem>
        </UnorderedList>
      </Box>
      <Box>
        {/* Victory Chart */}
        <VictoryChart
          style={{}}
          height={350}
          colorScale={['tomato', 'orange', 'gold']}
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis tickFormat={['March', 'April', 'May', 'June']} />
          <VictoryAxis />
          <VictoryBar
            style={{
              data: {
                fill: '#4A5568',
                stroke: 'black',
                strokeWidth: 2,
              },
            }}
            data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
      </Box>
    </Flex>
  )
}
