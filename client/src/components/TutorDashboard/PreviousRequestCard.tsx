import React from 'react'
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Image,
  WrapItem,
  TagLabel,
  Tag,
  Avatar,
} from '@chakra-ui/react'
import { ProgrammingLanguages } from '../../assets/devicon/ProgrammingLanguages'
import { displayTimeinHHMMSS, displayDate } from './utils'
import { BiTimeFive } from 'react-icons/bi'
import {
  AiOutlineDollarCircle,
  AiOutlineCalendar,
  AiOutlineStar,
} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function PreviousRequestCard({ hr }: any) {
  const navigate = useNavigate()
  return (
    <Center
      py={2}
      fontFamily="montserrat"
      mx={6}
      my={2}
      bg={useColorModeValue('white', 'gray.800')}
      minW={'20ch'}
      maxW={'20ch'}
    >
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        border="1px solid"
        borderColor="rgba(0, 66, 156, .4)"
        borderRadius="10px"
        
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'lg'} fontWeight={800}>
              {hr.student.name}
            </Text>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', 'gray.200')}
              alignContent={'center'}
            >
              <Avatar
                size={'xs'}
                src={hr.student.photo_url}
                name={hr.student.name}
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Box>
          </Stack>
          <WrapItem>
            {/*@ts-ignore*/}
            <Tag variant="outline" size="lg" colorScheme="indigo">
              <Image
                mr={2}
                height="1rem"
                width="1rem"
                borderRadius="5"
                //@ts-ignore
                src={ProgrammingLanguages[hr.language]}
              />
              <TagLabel>{hr.language}</TagLabel>
            </Tag>
          </WrapItem>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={AiOutlineStar} />
              {hr.rating}
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineDollarCircle} />$
              {((hr.call_length * 40) / 60 / 60).toFixed(2)}
            </ListItem>
            <ListItem>
              <ListIcon as={BiTimeFive} />
              {displayTimeinHHMMSS(hr.call_length)}
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineCalendar} />
              {displayDate(hr.createdAt)}
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            rounded={'xl'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            _focus={{}}
            onClick={() => {
              navigate('/previous-hr', { state: hr })
            }}
          >
            See Feedback
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
