import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Divider,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HRType from '../../redux/services/helpRequestService'
import { ProgrammingLanguages } from '../../assets/devicon/ProgrammingLanguages'

//@ts-ignore
export const RequestCard = ({ hr }: HRType) => {
  const navigate = useNavigate()
  return (
    <Center
      border="1px solid"
      borderColor="rgba(0, 66, 156, .4)"
      borderRadius="10px"
      fontFamily="montserrat"
      mx={6}
      my={2}
      bg={useColorModeValue('white', 'gray.800')}
      minW={'26%'}
      maxW={'26%'}
      minH={'23rem'}
    >
      <Box
        overflow="hidden"
        position="relative"
        minH={'100%'}
        minW={'100%'}
        boxShadow={'2xl'}
        rounded={'md'}
      >
        <Box position="relative" h={'50px'} w={'full'}>
          <Image
            position="absolute"
            height="25px"
            top={2}
            left={5}
            //@ts-ignore
            src={ProgrammingLanguages[hr.language]}
          />
        </Box>
        <Flex justify={'center'} mt={-10}>
          <Avatar
            size={'lg'}
            src={hr.student.photo_url}
            name={hr.student.name}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box
          p={6}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
              {hr.student.name}
            </Heading>
          </Stack>
          <Text fontSize="13">{hr.description.substring(0, 150)}</Text>
          <Divider mt={3} />
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {/*@ts-ignore*/}
            {hr.tags?.map((tag, index) => {
              return (
                <Badge key={index} px={2} py={1} fontWeight={'400'}>
                  {tag}
                </Badge>
              )
            })}
          </Stack>
        </Box>
        <Button
          position={'absolute'}
          bottom={'10px'}
          left={'10%'}
          w={'80%'}
          mt={3}
          onClick={() => {
            navigate('/tutor-hr', { state: hr })
          }}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
        >
          Expand
        </Button>
      </Box>
    </Center>
  )
}
