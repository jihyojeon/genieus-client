import React, { useState } from 'react'
import Split from 'react-split'
import ButtonBar from './ButtonBar'
import Editor from '@monaco-editor/react'
import '../../styles/example.css'

import {
  Grid,
  Box,
  Image,
  GridItem,
  Heading,
  Flex,
  Select,
  HStack,
  useColorModeValue,
  Tag,
  TagLabel,
  Textarea,
} from '@chakra-ui/react'

const HrContent = ({ settutorComplete }: any) => {
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

  let handleInputChange = (e: any): void => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  function handleEditorChange(value: any, event: any): void {
    setcodeValue(value)
  }

  // Form output
  const getHRData = () => {
    console.log(`${codeValue}, ${value}, ${selectValue}`)
  }

  return (
    <Box>
      <Grid p={10} templateColumns="repeat(2, 1fr)" gap={10}>
        {/* Description Box */}

        <Split
          className="split"
          sizes={[50, 50]}
          expandToMin={false}
          gutterAlign="center"
          snapOffset={30}
          cursor="col-resize"
        >
          <div className="split-one">
            <GridItem id="one">
              <Flex direction="row" justify="space-between" alignItems="center">
                <Heading
                  fontSize={30}
                  fontFamily="montserrat"
                  fontWeight={300}
                  as="h5"
                >
                  Description
                </Heading>
                <HStack spacing={5}>
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel>#redux</TagLabel>
                  </Tag>
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel>#react</TagLabel>
                  </Tag>
                  <Tag variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel>#javascript</TagLabel>
                  </Tag>
                </HStack>
              </Flex>

              <Box pt={5}>
                <Textarea
                  border="1px solid"
                  borderColor="indigo.300"
                  onChange={handleInputChange}
                  isRequired
                  value={value}
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
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                >
                  {selectValue && (
                    <Image
                      mr={5}
                      height="30px"
                      width="30px"
                      borderRadius="5"
                      // @ts-ignore
                      src={
                        selectValue === 'javascript'
                          ? imageObj.js
                          : selectValue === 'python'
                          ? imageObj.python
                          : selectValue === 'cplus'
                          ? imageObj.cplus
                          : null
                      }
                    />
                  )}
                  <Select
                    onChange={(e) => setSelectValue(e.target.value)}
                    value={selectValue}
                    colorScheme="indigo"
                    borderColor="indigo.300"
                    maxW={'200px'}
                    variant="outline"
                    placeholder="Select language"
                    isRequired
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="cplus">C++</option>
                  </Select>
                </Flex>
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
                  defaultValue="// Provide sample code to help outline your problem..."
                  value={codeValue}
                  onChange={handleEditorChange}
                  theme={useColorModeValue('vs-light', 'vs-dark')}
                />
              </Box>
            </GridItem>
          </div>
        </Split>
      </Grid>

      {/* Bottom Nar */}
      <ButtonBar
        settutorComplete={settutorComplete}
        loadingBtn={loadingBtn}
        setloadingBtn={setloadingBtn}
        getHRData={getHRData}
      />
    </Box>
  )
}

export default HrContent
