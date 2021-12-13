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
  HStack,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson, BsCalendar, BsCodeSlash } from 'react-icons/bs'
import { BiInfoCircle, BiTimeFive } from 'react-icons/bi'
import { auth } from '../../firebase'
import { useEffect, useState } from 'react'
import { useGetStudentByIdQuery } from '../../redux/services/studentService'
import { useGetHrRequestByValueQuery } from '../../redux/services/helpRequestService'
import { displayTimeinHHMM } from '../TutorDashboard/utils'

interface StatsCardProps {
  title: string
  stat: string | number | undefined
  icon: ReactNode
}
function StatsCard(props: StatsCardProps) {
  let { title, stat, icon } = props
  const gradient = useColorModeValue(
    'linear(to-r, blue.400, teal.500)',
    'linear(to-l, blue.300, teal.100)'
  )

  if (typeof stat === 'number') {
    stat = displayTimeinHHMM(stat)
  }
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      m={5}
      w={'20rem'}
      shadow={'base'}
      bg={useColorModeValue('gray.100', 'gray.700')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'}>{title}</StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            <Text bgGradient={gradient} bgClip="text" width="fit-content">
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
  const student = useGetStudentByIdQuery(userId, { skip: !userId })
  const helpRequestsSolved = useGetHrRequestByValueQuery({
    student_id: userId,
    status: 'closed-complete',
  })
  const numberofRequestsCompleted = helpRequestsSolved?.data?.length

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
      mt={5}
      direction="column"
      h="40vh"
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <Heading fontFamily="montserrat" fontWeight="400" ml={5} mb={5}>
        <HStack>
          <BiInfoCircle />
          <Text>Your Account</Text>
        </HStack>
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
            stat={student.data?.subscription_type.toUpperCase()}
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
            icon={<BsCalendar size={'3em'} />}
          />
        </WrapItem>
        <WrapItem>
          <StatsCard
            title={'Requests completed'}
            stat={String(numberofRequestsCompleted)}
            icon={<BsCodeSlash size={'3em'} />}
          />
          <StatsCard
            title={'Hours remaining'}
            stat={student?.data?.time_remaining}
            icon={<BiTimeFive size={'3em'} />}
          />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
