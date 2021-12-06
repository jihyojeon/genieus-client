import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { FaStar } from 'react-icons/fa'
import Split from 'react-split'
import Editor from '@monaco-editor/react'
import { useGetTutorByIdQuery } from '../redux/services/tutorService'
import TopBar from '../components/TopBar/TopBar'

const PreviousHelpRequest = () => {
  const location = useLocation()
  const hrData = location.state
  const tutor = useGetTutorByIdQuery(hrData.tutor_id, {
    skip: !hrData.tutor_id,
  }).data

  function displayRating(helprequest: any) {
    console.log(hrData)
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
            <FaStar size="2rem" fillOpacity="100%" />
          ) : (
            <FaStar size="2rem" fillOpacity="15%" />
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
                    Description
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
                    <Text>Tags Here</Text>
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
                    Code Sample
                  </Heading>
                  <HStack spacing={5}>
                    <Tag variant="outline" size="lg" colorScheme="indigo">
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
        <Flex justify="center" align="center" flexDirection="column">
          <Text fontSize="3xl">{hrData.tutor.name}</Text>
          <Flex m={3}>{displayRating(hrData)}</Flex>
          <Text fontSize="lg">{hrData.feedback_comments}</Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default PreviousHelpRequest
