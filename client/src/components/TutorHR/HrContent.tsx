import React, { useState } from 'react'
import Split from 'react-split'
import ButtonBar from './ButtonBar'
import Editor from '@monaco-editor/react'
import '../../styles/example.css'

import {
  Grid,
  Box,
  GridItem,
  Heading,
  Flex,
  Text,
  // Select,
  HStack,
  Button,
  useColorModeValue,
  Tag,
  TagLabel,
  Textarea,
} from '@chakra-ui/react'

const HrContent = ({ setStudentReady, hrData }: any) => {
  const imageObj = {
    js: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    python: 'http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png',
    cplus:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
  }

  const [value, setValue] = useState('')
  const [codeValue, setcodeValue] = useState('')
  const [loadingBtn, setloadingBtn] = useState(false)
  const [selectValue, setSelectValue] = useState('')

  let tags = value.match(/#[a-z]+/gi)

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
