import React, { useState } from 'react'
import {
  Avatar,
  // Badge,
  Box,
  Flex,
  Heading,
  // Image,
  Text,
  // AvatarBadge,
  useDisclosure,
} from '@chakra-ui/react'
// import { MdCheckCircle, MdRemoveCircleOutline } from 'react-icons/md'
import ModalFavourites from './ModalFavourites'

const favArr: any = [
  {
    tutor: 'Vic',
    image: 'https://bit.ly/dan-abramov',
    exp1: 'JS',
    dur1: 1,
    exp2: 'Java',
    dur2: 2,
    online: 0,
    key: 0,
  },
  {
    tutor: 'Charley',
    image: 'https://bit.ly/ryan-florence',
    exp1: 'Ada',
    dur1: 2,
    exp2: 'Python',
    dur2: 2,
    online: 0,
    key: 1,
  },
  {
    tutor: 'Jess',
    image: 'https://bit.ly/dan-abramov',
    exp1: 'Pascale',
    dur1: 3,
    exp2: 'C#',
    dur2: 2,
    online: 1,
    key: 2,
  },
  {
    tutor: 'Maylyn',
    image: 'https://bit.ly/ryan-florence',
    exp1: 'Red',
    dur1: 4,
    exp2: 'Fortran',
    dur2: 2,
    online: 0,
    key: 3,
  },
  {
    tutor: 'Tobias',
    image: 'https://bit.ly/code-beast',
    exp1: 'Kotlin',
    dur1: 5,
    exp2: 'Cobol',
    dur2: 2,
    online: 0,
    key: 4,
  },
]

const colorBgFav = '#C7D2FE'
const colorNameFav = '#F40B0B'
const colorTextFav = 'black'
const colorHeading = 'white'

const Favourites = () => {
  const [favList, setFavList] = useState(favArr)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    // TODO: USE https://chakra-ui.com/docs/overlay/drawer FOR REVIEW

    <Flex
      justifyContent="center"
      color={colorHeading}
      flexDirection="column"
      h="100%"
    >
      <Heading
        as="h1"
        size="lg"
        fontFamily="montserrat"
        fontWeight="300"
        pb={'1rem'}
        ml={10}
      >
        Favourite Tutors
      </Heading>
      <Box
        overflowY={'auto'}
        // scrollBar={"hidden"}
        // sx={{
        //   '&::-webkit-scrollbar': {
        //     backgroundColor: `rgba(150, 150, 190, 0.15)`,
        //     borderRadius: '8px',
        //     width: '16px',
        //   },
        //   '&::-webkit-scrollbar-thumb': {
        //     backgroundColor: `rgba(160, 160, 230, 0.45)`,
        //     borderRadius: '8px',
        //   },
        // }}
      >
        {favList.map((el: any) => {
          return (
            <Box key={el.dur}>
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
                    size={'xl'}
                    src={el.image}
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

                  {/* OLD METHOD FOR SHOWING ONLINE STATUS */}
                  {/* <Box position="relative">
                    {el.online === 0 ? (
                      <Text color="green.500" as={MdCheckCircle} size="large" />
                      ) : (
                        <Text
                        color="green.500"
                        as={MdRemoveCircleOutline}
                        size="large"
                        />
                        )}
                  </Box> */}
                  {/* OLD METHOD FOR SHOWING ONLINE STATUS */}
                </Flex>
                <Flex
                  align="flex-start"
                  flexDirection="column"
                  justify="flex-start"
                  ml="20px"
                >
                  <Heading fontSize={25} fontWeight={300}>
                    {el.tutor}
                  </Heading>
                  <Text fontSize={20} fontWeight={200}>
                    Experience
                  </Text>
                  <Text fontSize={15} fontWeight={200}>
                    {el.exp1} - {el.dur1} years
                  </Text>
                  <Text fontSize={15} fontWeight={200}>
                    {el.exp2} - {el.dur2} years
                  </Text>
                </Flex>
              </Flex>
            </Box>
          )
        })}
      </Box>
      <ModalFavourites isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default Favourites
