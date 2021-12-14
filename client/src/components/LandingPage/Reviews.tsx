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
      <Container maxW={'7xl'} py={3} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our clients Speak</Heading>
          <Text color="gray.500">
            We work with coding students and professionals around the world
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
                I was having some issues with a difficult bug whilst using
                Redux. My problem was solved in a quick call. Great Service!
              </TestimonialText>
            </TestimonialContent>

            <TestimonialAvatar
              src={'https://randomuser.me/api/portraits/men/36.jpg'}
              name={'James Dean'}
              title={'Full-Stack Engineer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Fantastic!</TestimonialHeading>
              <TestimonialText>
                Fantastic one on one chat. Was struggling to understand GraphQl
                but after a chat with my tutor, it was much easier to
                comprehend!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://randomuser.me/api/portraits/men/46.jpg'}
              name={'Aaron Mathews'}
              title={'Front-End Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Tobias fixed it!</TestimonialHeading>
              <TestimonialText>
                Needed some help for a client project that I am working on.
                Tobias was able to fix a difficult bug in no time! Thank you!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://randomuser.me/api/portraits/women/2.jpg'}
              name={'Elizabeth'}
              title={'DevOps Engineer'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
