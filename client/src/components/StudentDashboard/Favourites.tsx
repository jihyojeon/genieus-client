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

const Favourites = () => {
  const [userId, setUserId] = useState()

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

  const { isOpen, onOpen, onClose } = useDisclosure()

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
        {/* @ts-ignore */}
        {favouriteTutor.isSuccess && favouriteTutor.data.length !== 0 ? (
          favouriteTutor.data.map((tutor: any) => (
            <FavouriteTutor tutor={tutor} />
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
