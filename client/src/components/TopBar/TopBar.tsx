import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import Logo from './Logo'
import Profile from './Profile'
import ColorModeSwitcher from './ColorModeSwitcher'

type TopBarProps = {
  heading?: string
  children?: React.ReactNode
}

const TopBar = ({ heading, children }: TopBarProps) => {
  return (
    <Flex justifyContent="space-between" p="0 1rem" alignItems="center">
      <Logo />
      {heading && <Heading>{heading}</Heading>}
      children
      <Flex alignItems="center">
        <Profile />
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  )
}

export default TopBar
