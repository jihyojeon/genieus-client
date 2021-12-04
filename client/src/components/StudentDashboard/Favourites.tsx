import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import {
  Avatar,
  Button,
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
import {
  useGetFavouriteTutorsByIdQuery,
  useRemoveFavouriteTutorMutation,
} from '../../redux/services/studentService'
import { useAddFavouriteTutorMutation } from '../../redux/services/studentService'
import { useGetTutorByIdQuery } from '../../redux/services/tutorService'
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
  const favouriteTutor = useGetFavouriteTutorsByIdQuery(userId)

  const [addTutorToFav, addTutorToFavResult] = useAddFavouriteTutorMutation()
  const [RemTutorToFav, RemTutorToFavResult] = useRemoveFavouriteTutorMutation()

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
        console.log('userID', user)
        setTutorConnectedStatus((prior) =>
          Object.assign({}, prior, { [user]: false })
        )
      })
    }
  }, [userId])
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(tutorConnectedStatus)

  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    // TODO: USE https://chakra-ui.com/docs/overlay/drawer FOR REVIEW

    <Flex justifyContent="flex-start" flexDirection="column" h="100vh">
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
          <Text textAlign="center" mt={10} fontSize={'20px'} opacity="0.6">
            Your favourite tutors will be displayed here!{' '}
          </Text>
        )}
      </Box>
    </Flex>
  )
}

export default Favourites
