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
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      border="1px solid"
      borderColor="rgba(0, 66, 156, .4)"
      borderRadius="10px"
      fontFamily="montserrat"
      mx={6}
      my={2}
      bg={useColorModeValue('white', 'gray.800')}
      minW={'24ch'}
      maxW={'24ch'}
    >
      <Flex direction="column" justify="flex-start" align="center">
        <Box position="relative">
          <Image
            position="absolute"
            height="25px"
            top={2}
            left={'-80px'}
            //@ts-ignore
            src={ProgrammingLanguages[hr.language]}
          />
          <Avatar
            mt={'0.5rem'}
            size={'lg'}
            src={hr.student.photo_url}
            name={hr.student.name}
            alt={'Author Image'}
            css={{
              border: '2px solid white',
            }}
          />
        </Box>
        <Heading m={2} fontSize={'lg'} fontWeight={500} fontFamily={'body'}>
          {hr.student.name}
        </Heading>
        <Text fontSize="13" justifyContent={'flex-start'} m={3}>
          {hr.description.length < 140
            ? hr.description
            : hr.description
                .substring(0, 150)
                .concat('....[expand to view more]')}
        </Text>
        <Divider />
      </Flex>
      <Flex m={'1rem'} direction="column" justify="flex-end">
        <Box
          align={'center'}
          justify={'flex-end'}
          direction={'row'}
          // mt={6}
          mb={2}
          flexWrap={'wrap'}
        >
          {/*@ts-ignore*/}
          {hr.tags?.map((tag, index) => {
            return (
              <Badge key={index} m={1} px={2} py={1} fontWeight={'400'}>
                {tag}
              </Badge>
            )
          })}
        </Box>
        <Button
          mx={'1rem'}
          width={'20ch'}
          h={'40px'}
          rounded={'xl'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          _focus={{}}
          onClick={() => {
            navigate('/tutor-hr', { state: hr })
          }}
        >
          Expand
        </Button>
      </Flex>
    </Flex>


  )
}
