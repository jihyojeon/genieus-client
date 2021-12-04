import { ReactNode, useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Button,
  Image,
  Avatar,
  Text,
  AvatarBadge,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'

import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import Logo from '../../assets/icons/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import ModalEditTutorProfile from './ModalEditTutorProfile' 

import { useGetTutorByIdQuery } from '../../redux/services/tutorService'
//@ts-ignore
export default function Topbar() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [userId, setUserId] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  //@ts-ignore
  const tutor = useGetTutorByIdQuery(userId)

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Box px={6} py={2} h="10vh">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={Logo} boxSize="6rem" pt={5} pl={7} borderRadius="50px" />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* User area  */}

              <Flex pt={4}>
                <Box>
                  <Flex direction="row">
                    <Text fontFamily="montserrat" fontSize={18} mr={5}>
                      Welcome
                      {tutor.error
                        ? 'error'
                        : tutor.isLoading
                        ? 'loading'
                        : tutor.data
                        ? ' ' + tutor.data.name
                        : undefined}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="space-around">
                  <Box
                    _hover={{ opacity: 0.8, color: 'indigo.400' }}
                    onClick={onOpen}
                    ml={5}
                  >
                  <FontAwesomeIcon size="1x" icon={faCog} />
                  </Box>
                    <Button
                      opacity="0.6"
                      variant="ghost"
                      onClick={handleSignOut}
                    >
                      Log Out
                    </Button>
                  </Flex>
                </Box>
                {/* Profile Pic */}
                <Avatar
                  size="md"
                  name={
                    tutor.error
                      ? 'error'
                      : tutor.isLoading
                      ? 'loading'
                      : tutor.data
                      ? tutor.data.name
                      : undefined
                  }
                  src={
                    tutor.error
                      ? 'error'
                      : tutor.isLoading
                      ? 'loading'
                      : tutor.data
                      ? tutor.data.photo_url
                      : undefined
                  }
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Flex>

              <ColorModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {/*@ts-ignore*/}
      <ModalEditTutorProfile tutor={tutor.data} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
