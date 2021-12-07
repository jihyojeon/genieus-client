import React, { useState } from 'react'
import Split from 'react-split'
import ButtonBar from './ButtonBar'
import Editor from '@monaco-editor/react'
import '../../styles/example.css'
import { ProgrammingLanguages } from '../../assets/devicon/ProgrammingLanguages'

import {
  Grid,
  Box,
  GridItem,
  Heading,
  Flex,
  Text,
  // Select,
  HStack,
  Image,
  useColorModeValue,
  Tag,
  TagLabel,
  Textarea,
} from '@chakra-ui/react'

const HrContent = ({ setStudentReady, hrData }: any) => {
  const [value, setValue] = useState('')
  const [codeValue, setcodeValue] = useState('')
  const [loadingBtn, setloadingBtn] = useState(false)
  const [selectValue, setSelectValue] = useState('')
  const textColor = useColorModeValue('gray.900', 'gray.100')

  return (
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
              <Flex direction="row" justify="space-between" alignItems="center">
                <Heading
                  as="h5"
                  fontSize={30}
                  fontFamily="montserrat"
                  fontWeight={300}
                >
                  <Text color={textColor}>Description</Text>
                </Heading>

                {hrData && (
                  <Flex spacing={2} justify="flex-end" flexWrap={'wrap'}>
                    {hrData.tags.map((tag: string[]) => {
                      return (
                        <Tag
                          ml="0.25rem"
                          variant="outline"
                          size="lg"
                          colorScheme="indigo"
                        >
                          <TagLabel>{tag}</TagLabel>
                        </Tag>
                      )
                    })}
                  </Flex>
                )}
              </Flex>

              <Box pt={5}>
                <Textarea
                  border="1px solid"
                  borderColor="indigo.300"
                  isRequired
                  value={hrData.description}
                  height={'50vh'}
                  placeholder="No description given...😢"
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
                  defaultValue="// No code given...😢"
                  value={hrData.code}
                  theme={useColorModeValue('vs-light', 'vs-dark')}
                />
              </Box>
            </GridItem>
          </div>
        </Split>
      </Grid>

      {/* Bottom Nar */}
      <ButtonBar
        hrData={hrData}
        setStudentReady={setStudentReady}
        setloadingBtn={setloadingBtn}
      />
    </Box>
  )
}

export default HrContent
