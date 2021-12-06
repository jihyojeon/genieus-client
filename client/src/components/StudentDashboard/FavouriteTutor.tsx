import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import ModalFavourites from './ModalFavourites'

const FavouriteTutor = ({
  tutor,
  connected,
}: {
  tutor: any
  connected: boolean
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box key={tutor.dur}>
      <Flex
        onClick={onOpen}
        _hover={{ cursor: 'pointer', opacity: 0.7 }}
        bg={useColorModeValue('gray.200', 'gray.700')}
        opacity={connected ? 1 : 0.4}
        borderRadius={'10px'}
        flexDirection="row"
        justify="flex-start"
        p="15px"
        mb="2rem"
        w="80%"
        ml={10}
      >
        <Flex flexDirection="column" justify="space-between">
          <Avatar
            name={tutor.name}
            size={'lg'}
            src={tutor.image}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: connected ? 'green.500' : 'gray.400',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
        </Flex>
        <Flex
          align="flex-start"
          flexDirection="column"
          justify="center"
          ml="20px"
        >
          <Heading fontSize={25} fontWeight={300}>
            {tutor.name}
          </Heading>
          <Flex flexDirection="row">
            {tutor.programming_languages.map((lang: any) => {
              return (
                <Text fontSize={15} fontWeight={200} mr={3}>
                  {lang}
                </Text>
              )
            })}
          </Flex>
        </Flex>
      </Flex>

      <ModalFavourites
        isOpen={isOpen}
        onClose={onClose}
        tutor={tutor}
        connected={connected}
      />
    </Box>
  )
}

export default FavouriteTutor
