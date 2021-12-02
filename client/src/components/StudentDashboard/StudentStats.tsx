import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Heading,
  Stat,
  Button,
  Wrap,
  WrapItem,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiServer } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { auth } from '../../firebase'
import react, { useEffect, useState } from 'react'
import { useGetStudentByIdQuery } from '../../redux/services/studentService'
import moment from 'moment'

interface StatsCardProps {
  title: string
  stat: string
  icon: ReactNode
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
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
            {stat}
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

  const formatData = moment(student?.data?.subscription_expiry).format('l')

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  return (
    <Flex
      alignItems="flex-start"
      width="75rem"
      direction="column"
      mx={'auto'}
      h="50vh"
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <Heading> Your Account: </Heading>
      <Wrap
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
            stat={formatData}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Minutes on call'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
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
            stat={'1,000'}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Minutes on call'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
