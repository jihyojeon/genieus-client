import React from 'react'
import { Flex, Button, Stack, useDisclosure } from '@chakra-ui/react'

import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import ModalLogIn from '../LandingPage/ModalLoginIn'
import TutorLoginButton from '../LandingPage/TutorLoginButton'

export default function LoginButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={7}>
          <TutorLoginButton />
          <Button variant="outline" onClick={onOpen}>
            Log In
          </Button>
        </Stack>
      </Flex>
      <ModalLogIn isOpen={isOpen} onClose={onClose} />
    </>
  )
}
