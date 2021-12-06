import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  AvatarBadge,
  Center,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase'
import { disconnectFromSocket } from '../../redux/services/socket'
import LoginButton from './LoginButton'
import { FaDoorOpen, FaUserCog } from 'react-icons/fa'
import ModalEditTutorProfile from '../TutorDashboard/ModalEditTutorProfile'
import { useGetTutorByIdQuery } from '../../redux/services/tutorService'

export default function TutorProfile() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const queryResponse = useGetTutorByIdQuery(userId)
  const tutor = queryResponse.data
  console.log(tutor)
  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      if (item) {
        setUserId(item.uid)
      }
    })
  }, [])

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      navigate('/')
      disconnectFromSocket()
    } catch (error) {
      console.error(error)
    }
  }

  const {
    isOpen: OpenModal,
    onOpen: onOpenModal,
    onClose: onModalClose,
  } = useDisclosure()
  if (tutor) {
    return (
      <>
        <Box px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    name={tutor.name}
                    size={'md'}
                    shadow="md"
                    src={tutor.photo_url}
                  >
                    <AvatarBadge boxSize="1em" bg="green.500" />
                  </Avatar>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      name={tutor.name}
                      size={'2xl'}
                      src={tutor.photo_url}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{tutor.name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={onOpenModal}>
                    <FaUserCog />
                    &nbsp; Edit Profile
                  </MenuItem>
                  <MenuItem onClick={handleSignOut}>
                    <FaDoorOpen />
                    &nbsp; Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          <ModalEditTutorProfile
            tutor={tutor}
            isOpen={OpenModal}
            onClose={onModalClose}
          />
        </Box>
      </>
    )
  } else {
    return <LoginButton />
  }
}
