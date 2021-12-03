import React from 'react'
import { Heading, Box, Flex, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'

const TopBar = ({ hrData }: { hrData: any }) => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="center">


      <Link to="/tutor-dashboard">
        <Box
          _hover={{ color: 'indigo.300', cursor: 'pointer' }}
          left={50}
          top={10}
          opacity={0.6}
          position="absolute"
        >
          <FontAwesomeIcon size="2x" icon={faArrowLeft} />
        </Box>
      </Link>

      <Heading
        as="h2"
        color="indigo.300"
        colorScheme="indigo"
        fontFamily="montserrat"
        fontWeight={400}
        pt={8}
      >
        {hrData.student.name}'s Help Request
      </Heading>

      <ColorModeSwitcher position="absolute" right={'10'} />
    </Flex>
  )
}

export default TopBar
