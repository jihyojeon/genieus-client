import React, { useState, useEffect } from 'react'
import { useUpdateHRRequestMutation } from '../../redux/services/helpRequestService'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  HStack,
  Button,
  Avatar,
  Center,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { useGetTutorByIdQuery } from '../../redux/services/tutorService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const TutorFound = ({ tutors, hrById }: { tutors: any[]; hrById: any }) => {
  const navigate = useNavigate()
  const [tutorId, setTutorId] = useState('')
  const tutorValue = useGetTutorByIdQuery(tutorId)
  const [updateHr, updateHrResult] = useUpdateHRRequestMutation()
  const declinedTutors: [] = []
  const tutor = tutorValue.data?.id

  useEffect(() => {
    console.log(hrById)
    // @ts-ignore
    tutors.map((tutor) => {
      setTutorId(tutor)
    })
  }, [])

  return (
    <Grid
      mt={50}
      templateRows={'0.3fr, 2fr'}
      justifyContent="center"
      alignItems="center"
      h="50vh"
    >
      <GridItem>
        <Heading fontSize={'20px'} fontFamily="montserrat">
          Tutor is available to help!
        </Heading>
      </GridItem>
      <GridItem mb={30}>
        <Center py={6}>
          <Box
            w={'22rem'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
          >
            <Avatar
              size={'xl'}
              src={'...'}
              alt={'Avatar Alt'}
              mb={4}
              // @ts-ignore
              name={tutorValue !== undefined && tutorValue?.data?.name}
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
              {tutorValue !== undefined && tutorValue?.data?.name}
            </Heading>

            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              py={2}
            >
              <Text>
                <FontAwesomeIcon icon={faStar} />{' '}
                {tutorValue.data?.avg_rating ? tutorValue.data?.avg_rating : 0}
              </Text>
              <Text>
                {' '}
                Completed help requests:{' '}
                {tutorValue.data?.completed_help_requests
                  ? tutorValue.data?.completed_help_requests
                  : 0}
              </Text>
            </Text>
            <Grid templateColumns="1fr, 1fr">
              <GridItem>
                <Text> Tech languages: </Text>
                {tutorValue !== undefined &&
                  // @ts-ignore
                  tutorValue.data?.programming_languages.map((lang) => {
                    return (
                      <Flex justifyContent="center" direction="row">
                        <Badge
                          borderRadius="10px"
                          px={2}
                          py={1}
                          my={2}
                          fontWeight={'400'}
                        >
                          {lang} - years of experience
                        </Badge>
                      </Flex>
                    )
                  })}
              </GridItem>
            </Grid>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                onClick={() => {
                  navigate('/chat', { state: hrById.data })
                }}
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
                onClick={() => {
                  //@ts-ignore
                  declinedTutors.push(tutor)
                  updateHr({
                    id: hrById.data.id,
                    declined_tutors: declinedTutors,
                  })
                  navigate('/student-dashboard')
                }}
                opacity="0.5"
                flex={1}
                fontSize={'sm'}
                variant="outline"
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
