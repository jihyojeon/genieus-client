import {
  Box,
  Flex,
  Heading,
  Stat,
  Wrap,
  WrapItem,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiServer } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { auth } from '../../firebase'
import react, { useEffect, useState } from 'react'
import { useGetStudentByIdQuery } from '../../redux/services/studentService'
import { stat } from 'fs'

interface StatsCardProps {
  title: string
  stat: string | number | undefined
  icon: ReactNode
}
function StatsCard(props: StatsCardProps) {
  let { title, stat, icon } = props

  if (typeof stat === 'number') {
    const mins = String(stat % 60).padStart(2, '0')
    const hrs = String(Math.floor(stat / 60 / 60)).padStart(2, '0')
    stat = `${hrs}:${mins}`
  }
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      m={5}
      w={'30vh'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
              {stat}
            </Text>
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default function BasicStatistics() {
  const [userId, setUserId] = useState()
  //@ts-ignore
  const student = useGetStudentByIdQuery(userId)

  function displayDate(date: Date) {
    let day = date.toString().slice(8, 10)
    let month = date.toString().slice(5, 7)
    let year = date.toString().slice(0, 4)
    return `${day}/${month}/${year}`
  }

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      direction="column"
      h="50vh"
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <Heading fontFamily="montserrat" fontWeight="400" ml={5}>
        Your Account:
      </Heading>
      <Wrap
        mr={10}
        direction="column"
        wrap={'wrap'}
        justifyContent="space-evenly"
        spacing={{ base: 5, lg: 8 }}
      >
        <WrapItem>
          <StatsCard
            title={'Subscription Type '}
            //@ts-ignore
            stat={student.data?.subscription_type}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Expiration date'}
            //@ts-ignore
            stat={
              student.error
                ? 'error'
                : student.isLoading
                ? 'loading'
                : student.data
                ? student.data.subscription_expiry
                  ? displayDate(student.data.subscription_expiry)
                  : 'N/A'
                : 'N/A'
            }
            icon={<FiServer size={'3em'} />}
          />
        </WrapItem>
        <WrapItem>
          <StatsCard
            title={'Requests completed'}
            stat={'5,000'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Hours remaining'}
            stat={student?.data?.time_remaining}
            icon={<FiServer size={'3em'} />}
          />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
