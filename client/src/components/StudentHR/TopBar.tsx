import React from 'react'
import { Heading, Box, Flex } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="center">
      <Link to="/student-dashboard">
        <Box
          _hover={{ color: 'indigo.300', cursor: 'pointer' }}
          position="absolute"
          left={50}
          top={10}
          opacity={0.6}
        >
          <FontAwesomeIcon size="2x" icon={faArrowLeft} />
        </Box>
      </Link>
      <Heading
        fontFamily="montserrat"
        fontWeight={400}
        color="indigo.300"
        pt={8}
        as="h2"
        colorScheme="indigo"
      >
        Your Help Request
      </Heading>
      <ColorModeSwitcher position="absolute" right={'10'} />
    </Flex>
  )
}

export default TopBar
