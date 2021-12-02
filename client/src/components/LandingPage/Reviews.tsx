import { ReactNode } from 'react'
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('gray.200', 'gray.600')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('gray.800', 'gray.200'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} size={'xl'} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box py={'10vh'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading color="gray.500">Our students Speak</Heading>
          <Text color="gray.500">
            We have been working with clients around the world
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Brilliant!</TestimonialHeading>
              <TestimonialText>
                Vic's advice to "Switch it off and back on again" really helped
                with my Windows problems
              </TestimonialText>
            </TestimonialContent>

            <TestimonialAvatar
              src={
                'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B'
              }
              name={'Bill Gates'}
              title={'Former CEO'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Solved problem within minutes
              </TestimonialHeading>
              <TestimonialText>
                Our monastry's webpage was really suffering until Jess
                recommended we adopt Next.js. It solved everything and sped up
                chanting.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dalai_Lama_in_2012_02.jpg/1280px-Dalai_Lama_in_2012_02.jpg'
              }
              name={'Tenzin Gyatso'}
              title={'Dalai Lama'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Tobias fixd it!</TestimonialHeading>
              <TestimonialText>
                My country was on the verge of collapse - then I turned to
                GenieUs and they provided all our tech answers
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://obamawhitehouse.archives.gov/sites/whitehouse.gov/files/images/twitter_cards_potus.jpg'
              }
              name={'Barak Obama'}
              title={'Former US President'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
