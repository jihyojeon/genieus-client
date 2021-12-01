import { ReactNode } from 'react'
import { Avatar, Box, Heading, Text } from '@chakra-ui/react'

export default function Participant() {

// TODO: REFACTOR PARTICIPANT BOX USING THIS INSTEAD

  return (
    <Box>
      <Avatar
        size={'lg'}
        src={"https://bit.ly/ryan-florence"}
        mr="1rem"
      />

      <Heading
        fontFamily="montserrat"
        letterSpacing={1}
        fontSize={15}
        fontWeight={400}
      >
        {"Vic"}
      </Heading>
    </Box>
  )
}
