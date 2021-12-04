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
import ModalEditProfile from './ModalEditProfile'
import { useNavigate } from 'react-router-dom'
import { useGetStudentByIdQuery } from '../../redux/services/studentService'
import { disconnectFromSocket } from '../../redux/services/socket'

const CornerProfile = () => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState()
  //@ts-ignore
  const student = useGetStudentByIdQuery(userId)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
    disconnectFromSocket()
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
                {/* Average Rating */}
                <Flex alignItems="center" justifyContent="center">
                  <Flex alignItems="center" direction="row">
                    <IconButton
                      // TODO: ICON IS TOO DARK IN DARK MODE
                      aria-label="Edit Profile"
                      color={useColorModeValue('#000', '#fff')}
                      bg="gray.700"
                      height="20px"
                      icon={<SettingsIcon />}
                      size="small"
                      onClick={onOpen}
                      width="20px"
                    />
                  </Flex>
                  <Button onClick={handleSignOut} opacity="0.6" variant="ghost">
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

export default CornerProfile
