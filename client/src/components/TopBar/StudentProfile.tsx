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
import { useGetStudentByIdQuery } from '../../redux/services/studentService'
import LoginButton from './LoginButton'
import ModalEditProfile from '../StudentDashboard/ModalEditProfile'
import { FaDoorOpen, FaUserCog } from 'react-icons/fa'

export default function StudentProfile() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const queryResponse = useGetStudentByIdQuery(userId, { skip: !userId })
  const student = queryResponse.data
  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      item && setUserId(item.uid)
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
  if (student) {
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
                  <Avatar size={'md'} shadow="md" src={student.photo_url}>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                  </Avatar>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      name={student.name}
                      size={'2xl'}
                      src={student.photo_url}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{student.name}</p>
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
          <ModalEditProfile
            userId={userId}
            student={student}
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
