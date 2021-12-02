import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Divider,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

interface HelpRequestTypes {
  name: string
}

const imageObj = {
  python:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png',
}

export const RequestCard = ({ name }: HelpRequestTypes) => {
  return (
    <Center
      border="1px solid"
      borderColor="rgba(0, 66, 156, .4)"
      borderRadius="10px"
      fontFamily="montserrat"
      mx={6}
      my={2}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Box
        overflow="hidden"
        position="relative"
        maxH={'350px'}
        minW={'200px'}
        boxShadow={'2xl'}
        rounded={'md'}
      >
        <Box position="relative" h={'50px'} w={'full'}>
          <Image
            position="absolute"
            height="25px"
            top={2}
            left={5}
            src={imageObj.python}
          />
        </Box>
        <Flex justify={'center'} mt={-10}>
          <Avatar
            size={'lg'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
          </Stack>
          <Flex
            direction={'column'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
          >
            {/* <Text mb={3}> Description </Text> */}
            <Text fontSize="13">
              {' '}
              I have a problem with react router. I need help...{' '}
            </Text>
          </Flex>
          <Divider mt={3} />
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #redux
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #react
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #vue
            </Badge>
          </Stack>
          <Link to="/tutor-hr">
            <Button
              w={'full'}
              mt={3}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Expand
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  )
}
