import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Tag,
  TagLabel,
  Text,
  Textarea,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { FaStar } from 'react-icons/fa'
import Split from 'react-split'
import Editor from '@monaco-editor/react'
import TopBar from '../components/TopBar/TopBar'
import { ProgrammingLanguages } from '../assets/devicon/ProgrammingLanguages'

const PreviousHelpRequest = () => {
  const location = useLocation()
  const hrData = location.state
  const iconcolor = [
    useColorModeValue('gray.400', 'gray.300'),
    useColorModeValue('red.400', 'red.300'),
    useColorModeValue('orange.400', 'orange.300'),
    useColorModeValue('yellow.400', 'yellow.300'),
    useColorModeValue('cyan.400', 'cyan.300'),
  ]
  const gradient = useColorModeValue(
    'linear(to-r, blue.400, teal.500)',
    'linear(to-l, blue.300, teal.100)'
  )
  const feedbackBg = useColorModeValue('gray.100', 'gray.700')
  const textColor = useColorModeValue('gray.900', 'gray.100')

  const iconsize = 10

  function displayRating(helprequest: any) {
    if (helprequest.status === 'pending' || helprequest.status === 'assigned') {
      return
    } else {
      if (helprequest.rating) {
        let stars = []
        for (let i = 0; i < 5; i++) {
          if (i < helprequest.rating) {
            stars.push(1)
          } else {
            stars.push(0)
          }
        }
        return stars.map((star) =>
          star ? (
            <Icon
              as={FaStar}
              w={iconsize}
              h={iconsize}
              color={iconcolor[helprequest.rating - 1]}
            />
          ) : (
            <Icon
              as={FaStar}
              w={iconsize}
              h={iconsize}
              color={iconcolor[helprequest.rating - 1]}
              opacity={0.2}
            />
          )
        )
      }
    }
    return
  }

  return (
    <Box>
      {/* @ts-ignore */}
      {/* <TopBar hrData={location.state} /> */}
      <TopBar />
      <Box>
        <Grid p={10} templateColumns="repeat(2, 1fr)" gap={10}>
          {/* Description Box */}
          <Split
            className="split"
            cursor="col-resize"
            expandToMin={false}
            sizes={[50, 50]}
            gutterAlign="center"
            snapOffset={30}
          >
            <div className="split-one">
              <GridItem id="one">
                <Flex
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Heading
                    as="h5"
                    fontSize={30}
                    fontFamily="montserrat"
                    fontWeight={300}
                  >
                    <Text color={textColor}>Description</Text>
                  </Heading>
                  {hrData && hrData == null ? (
                    hrData.tags.map((tag: string[]) => {
                      return (
                        <HStack spacing={5}>
                          <Tag variant="outline" size="lg" colorScheme="indigo">
                            <TagLabel>{tag}</TagLabel>
                          </Tag>
                        </HStack>
                      )
                    })
                  ) : (
                    <Text color={textColor}>Tags Here</Text>
                  )}
                </Flex>
                <Box pt={5}>
                  <Textarea
                    border="1px solid"
                    borderColor="indigo.300"
                    isRequired
                    value={hrData.description}
                    height={'50vh'}
                    placeholder="<!-- Please describe you issue in detail....  -->"
                  />
                </Box>
              </GridItem>
            </div>
            {/* End of Description Area */}
            <div className="split-two">
              <GridItem id="two">
                <Flex
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Heading
                    fontSize={30}
                    fontFamily="montserrat"
                    fontWeight={300}
                    as="h5"
                  >
                    <Text color={textColor}>Code Sample</Text>
                  </Heading>
                  <HStack spacing={5}>
                    <Tag variant="outline" size="lg" colorScheme="indigo">
                      <Image
                        mr={2}
                        height="1rem"
                        width="1rem"
                        borderRadius="5"
                        // @ts-ignore
                        src={ProgrammingLanguages[hrData.language]}
                      />
                      <TagLabel>{hrData.language}</TagLabel>
                    </Tag>
                  </HStack>
                </Flex>
                <Box
                  mt={4}
                  border="1px solid"
                  borderColor="indigo.300"
                  borderRadius="5"
                  minH={'50vh'}
                  overflow="hidden"
                >
                  <Editor
                    height="50vh"
                    defaultLanguage="javascript"
                    defaultValue="// Please describe your problem..."
                    value={hrData.code}
                    theme={useColorModeValue('vs-light', 'vs-dark')}
                  />
                </Box>
              </GridItem>
            </div>
          </Split>
        </Grid>
        {hrData.tutor && (
          <Flex justify="center" align="center" flexDirection="column">
            <Text
              fontSize="3xl"
              bgGradient={
                hrData.rating && hrData.rating === 5 ? gradient : 'none'
              }
              bgClip={hrData.rating && hrData.rating === 5 ? 'text' : 'none'}
              fontWeight="bold"
            >
              {hrData.tutor.name}
            </Text>
            <Flex m={3}>{displayRating(hrData)}</Flex>
            {/* <Flex m={3}>
              {displayRating({ status: 'closed-complete', rating: 1 })}
            </Flex>
            <Flex m={3}>
              {displayRating({ status: 'closed-complete', rating: 2 })}
            </Flex>
            <Flex m={3}>
              {displayRating({ status: 'closed-complete', rating: 3 })}
            </Flex>
            <Flex m={3}>
              {displayRating({ status: 'closed-complete', rating: 4 })}
            </Flex>
            <Flex m={3}>
              {displayRating({ status: 'closed-complete', rating: 5 })}
            </Flex> */}
            <Text
              fontSize="lg"
              bgColor={feedbackBg}
              width="50rem"
              height="10rem"
              p={10}
              borderRadius={20}
            >
              {hrData.feedback_comments}
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export default PreviousHelpRequest
