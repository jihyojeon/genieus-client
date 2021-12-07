import { useState, useEffect } from 'react'
import { RiUserHeartLine } from 'react-icons/ri'
import { auth } from '../../firebase'
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { useGetFavouriteTutorsByIdQuery } from '../../redux/services/studentService'
import FavouriteTutor from './FavouriteTutor'
import socket, { checkAndReconnectToSocket } from '../../redux/services/socket'

type ConnectedUsersRes = {
  userID: string
  connected: boolean
}
type ConnectedUsers = {
  [userID: string]: boolean
}

const Favourites = () => {
  const [userId, setUserId] = useState<string | undefined>()
  const [tutorConnectedStatus, setTutorConnectedStatus] =
    useState<ConnectedUsers>({})

  //@ts-ignore
  const favouriteTutor = useGetFavouriteTutorsByIdQuery(userId, {
    skip: !userId,
  })

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      checkAndReconnectToSocket(userId)
      socket.emit('request status')
      socket.on('users', (users: ConnectedUsersRes[]) => {
        const onlineStatus: ConnectedUsers = {}
        users.forEach((user) => {
          onlineStatus[user.userID] = user.connected
        })
        setTutorConnectedStatus(onlineStatus)
      })
      socket.on('user connected', (user) => {
        setTutorConnectedStatus((prior) =>
          Object.assign({}, prior, { [user]: true })
        )
      })
      socket.on('user disconnected', (user) => {
        setTutorConnectedStatus((prior) =>
          Object.assign({}, prior, { [user]: false })
        )
      })
    }
  }, [userId])

  return (
    <Flex justifyContent="flex-start" flexDirection="column" h="100vh">
      <Heading
        as="h1"
        size="lg"
        fontFamily="montserrat"
        fontWeight="300"
        pb={'1rem'}
        ml={10}
        mt={2}
        mb={5}
        pt={5}
      >
        <HStack>
          <RiUserHeartLine />
          <Text>Favourite Tutors</Text>
        </HStack>
      </Heading>
      <Box>
        {favouriteTutor.isSuccess && favouriteTutor.data.length !== 0 ? (
          favouriteTutor.data
            .slice()
            // sort online tutors first
            .sort(
              (a, b) =>
                (tutorConnectedStatus[b.id] ? 1 : 0) -
                (tutorConnectedStatus[a.id] ? 1 : 0)
            )
            .map((tutor: any) => (
              <FavouriteTutor
                tutor={tutor}
                connected={tutorConnectedStatus[tutor.id] || false}
              />
            ))
        ) : (
          <Text textAlign="center" mt={5} fontSize={'20px'} opacity="0.6">
            Your favourite tutors will be displayed here!{' '}
          </Text>
        )}
      </Box>
    </Flex>
  )
}

export default Favourites
