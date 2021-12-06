import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import {
  Box,
  Flex,
  IconButton,
  Avatar,
  Text,
  useDisclosure,
  Stack,
  Button,
  AvatarBadge,
  useColorModeValue,
} from '@chakra-ui/react'

import { SettingsIcon } from '@chakra-ui/icons'
import ModalEditProfile from '../StudentDashboard/ModalEditProfile'
import ModalEditTutorProfile from '../TutorDashboard/ModalEditTutorProfile'
import { useNavigate } from 'react-router-dom'
import { useGetStudentByIdQuery } from '../../redux/services/studentService'
import { disconnectFromSocket } from '../../redux/services/socket'

const Profile = () => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const student = useGetStudentByIdQuery(userId)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
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

  return (
    <Flex justifyContent="flex-end" mr={5} px={0} py={0} h="10vh">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            {/* User area  */}

            <Flex pt={4}>
              <Box>
                <Text fontFamily="montserrat" fontSize={18} mr={5}>
                  Welcome
                  {student.error
                    ? 'error'
                    : student.isLoading
                    ? 'loading'
                    : student.data
                    ? ' ' + student.data.name
                    : undefined}
                </Text>
                <Flex alignItems="center" justifyContent="center">
                  <Flex alignItems="center" direction="row">
                    <IconButton
                      aria-label="Edit Profile"
                      color={useColorModeValue('#000', '#fff')}
                      bg={useColorModeValue('gray.100', 'gray.700')}
                      height="20px"
                      icon={<SettingsIcon />}
                      size="small"
                      onClick={onOpen}
                      width="20px"
                    />
                  </Flex>
                  <Button
                    onClick={handleSignOut}
                    color={useColorModeValue('blue.500', 'blue.300')}
                    variant="ghost"
                  >
                    Log Out
                  </Button>
                </Flex>
              </Box>
              {/* Profile Pic */}
              <Avatar
                size="md"
                name={student?.data?.name}
                src={student?.data?.photo_url}
              >
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <ModalEditProfile
        student={student.data}
        userId={userId}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  )
}

export default Profile
