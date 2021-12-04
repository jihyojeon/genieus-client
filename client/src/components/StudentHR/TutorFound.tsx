import React, { useState, useEffect } from 'react'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Avatar,
  Center,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

const TutorFound = ({ data }: { data: any }) => {
  const [tutorName, setTutorName] = useState('')

  useEffect(() => {
    data.map((item: any) => {
      setTutorName(item.tutor.name)
    })
  })

  return (
    <Grid position="relative" id="tutor" templateColumns={'1fr, 2fr'}>
      <GridItem>
        <Flex direction="column" align="center" justifyContent="space-evenly">
          <Button onClick={() => console.log(data)}> </Button>
          <Heading fontFamily="sans-serif" as="h3" fontWeight="200">
            {tutorName} is ready to help!
          </Heading>
        </Flex>
      </GridItem>

      <GridItem>
        <Center py={6}>
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
          >
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
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
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {tutorName}
            </Heading>

            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              py={8}
            >
              Front End Developer
              <br />
              10 years experience with JavaScript
            </Text>

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

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                variant="outline"
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _focus={{
                  bg: 'gray.200',
                }}
              >
                Accept
              </Button>
              <Button
                opacity="0.5"
                flex={1}
                fontSize={'sm'}
                variant="outline"
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                Decline
              </Button>
            </Stack>
          </Box>
        </Center>
      </GridItem>
    </Grid>
  )
}

export default TutorFound
