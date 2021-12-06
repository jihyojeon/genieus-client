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
import TopBar from '../components/TutorHR/TopBar'
import { useLocation } from 'react-router'
import Split from 'react-split'
import Editor from '@monaco-editor/react'
import { useGetTutorByIdQuery } from '../redux/services/tutorService'

const PreviousHelpRequest = () => {
  const location = useLocation()
  const hrData = location.state
  const tutor = useGetTutorByIdQuery(hrData.tutor_id, {
    skip: !hrData.tutor_id,
  }).data

  return (
    <Box>
      {/* @ts-ignore */}
      <TopBar hrData={location.state} />
      {/* <HrContent hrData={location.state} setStudentReady={setStudentReady} /> */}
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
      </Box>
    </Box>
  )
}

export default PreviousHelpRequest
