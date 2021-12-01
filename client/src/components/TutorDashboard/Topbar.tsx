// import { ReactNode } from 'react'
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
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

import { tutorApi, useGetTutorByIdQuery } from '../../redux/services/tutorService'

export default function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const signTutorOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }

  // ***************************************************************************************************************************************************
  // THIS VARIABLE IS HARD CODED, BUT WE SHOUDL GET THE TUTORID FROM FIREBASE
  // ***************************************************************************************************************************************************
  const tutor = useGetTutorByIdQuery('tutor1')


  return (
    <>
      <Box px={6} py={2} h="10vh">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={Logo} boxSize="7rem" pt={5} pl={7} borderRadius="50px" />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* User area  */}

              <Flex pt={4}>
                <Box>
                  <Text fontFamily="montserrat" fontSize={18} mr={5}>
                    Welcome {tutor.error ? "error" : tutor.isLoading ? "loading" : tutor.data ? tutor.data.name : undefined}
                  </Text>
                  {/* Average Rating */}
                  <Flex alignItems="center" justifyContent="center">
                    <Flex alignItems="center" direction="row">
                      <Text mr={2}> {tutor.error ? "error" : tutor.isLoading ? "loading" : tutor.data ? tutor.data.avg_rating : undefined} </Text>
                      <FontAwesomeIcon icon={faStar} />
                    </Flex>
                    <Button
                      opacity="0.6"
                      variant="ghost"
                      onClick={signTutorOut}
                    >
                      Log Out
                    </Button>
                  </Flex>
                </Box>
                {/* Profile Pic */}
                <Avatar
                  size="md"
                  name={tutor.error ? "error" : tutor.isLoading ? "loading" : tutor.data ? tutor.data.name : undefined}
                  src={tutor.error ? "error" : tutor.isLoading ? "loading" : tutor.data ? tutor.data.photo_url : undefined}
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Flex>

              <ColorModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
