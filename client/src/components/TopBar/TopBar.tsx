import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Logo from './Logo'
import StudentProfile from './StudentProfile'
import ColorModeSwitcher from './ColorModeSwitcher'
import TutorProfile from './TutorProfile'

type TopBarProps = {
  heading?: string
  tutor?: boolean
}

const TopBar = ({ heading, tutor = false }: TopBarProps) => {
  return (
    <Flex
      justifyContent="space-between"
      p="0 1rem"
      alignItems="center"
      m=".5rem 1rem"
    >
      <Logo />
      {heading && <Heading>{heading}</Heading>}
      <Flex alignItems="center">
        {tutor ? <StudentProfile /> : <TutorProfile />}
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  )
}

export default TopBar
