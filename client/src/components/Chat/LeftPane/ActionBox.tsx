import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'

const ActionBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      alignItems="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="1rem"
      direction="column"
      padding="1rem"
      marginTop={'1rem'}
      height="100%"
      width="100%"
      justifyContent="center"
      flexGrow={1}
    >
      {children}
    </Flex>
  )
}

export default ActionBox
