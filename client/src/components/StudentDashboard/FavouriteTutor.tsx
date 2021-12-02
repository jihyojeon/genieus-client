import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import ModalFavourites from './ModalFavourites'

const FavouriteTutor = ({ tutor }: { tutor: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box key={tutor.dur}>
      {/* TODO: CHANGE TO BUTTON OR ADD VIEW/REMOVE BUTTON AND CARRY FORWARD DETAILS */}

      <Flex
        onClick={onOpen}
        _hover={{ cursor: 'pointer', opacity: 0.7 }}
        bg={'gray.700'}
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
              bg: 'green.300',
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
          justify="flex-start"
          ml="20px"
        >
          <Heading fontSize={25} fontWeight={300}>
            {tutor.name}
          </Heading>
          <Text fontSize={20} fontWeight={200}>
            Experience
          </Text>

          {tutor.programming_languages.map((lang: any) => {
            return (
              <Box>
                <Text fontSize={15} fontWeight={200}>
                  {lang}
                </Text>
              </Box>
            )
          })}
        </Flex>
      </Flex>

      <ModalFavourites isOpen={isOpen} onClose={onClose} tutor={tutor} />
    </Box>
  )
}

export default FavouriteTutor
