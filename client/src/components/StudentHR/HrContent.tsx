import React, { useState, useEffect } from 'react'
import Split from 'react-split'
import ButtonBar from './ButtonBar'
import Editor from '@monaco-editor/react'
import '../../styles/example.css'
import { auth } from '../../firebase'
import { ProgrammingLanguages } from '../../assets/devicon/ProgrammingLanguages'

import {
  Grid,
  Box,
  Image,
  GridItem,
  ListItem,
  ListIcon,
  Heading,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Input,
  Text,
  HStack,
  FormControl,
  useColorModeValue,
  Tag,
  TagLabel,
  Button,
  Textarea,
} from '@chakra-ui/react'
import { connectToSocket } from '../../redux/services/socket'

const HrContent = ({ settutorComplete }: any) => {
  const languageKeys = Object.keys(ProgrammingLanguages)

  const [value, setValue] = useState('')
  const [codeValue, setCodeValue] = useState('')
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [selectValue, setSelectValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [filteredLanguages, setFilteredLanguages] = useState(languageKeys)
  const [userId, setUserId] = useState()
  let tags = value.match(/#[a-z]+/gi)

  const filterLanguages = (e: any) => {
    setSearchValue(e.target.value)
    setFilteredLanguages(
      languageKeys.filter((language: string) => {
        return searchValue
          ? language.toLowerCase().includes(searchValue.toLowerCase())
          : languageKeys
      })
    )
  }

  let handleInputChange = (e: any): void => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  function handleEditorChange(value: any, event: any): void {
    setCodeValue(value)
  }

  // Form output
  const getHRData = () => {
    console.log(`${codeValue}, ${value}, ${selectValue}`)
  }

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  return (
    <Box>
      <Grid p={10} templateColumns="repeat(2, 1fr)" gap={5}>
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
              <Flex
                direction="row"
                justify="space-between"
                alignItems="center"
                height="5rem"
              >
                <Heading
                  fontSize={30}
                  fontFamily="montserrat"
                  fontWeight={300}
                  as="h5"
                >
                  Description
                </Heading>
                <Flex spacing={2} justify="flex-end" flexWrap={'wrap'}>
                  {tags !== null ? (
                    tags.map((tag) => {
                      return (
                        <Tag
                          variant="outline"
                          size="lg"
                          colorScheme="indigo"
                          ml="0.25rem"
                          mt="0.25rem"
                          flexWrap="wrap"
                        >
                          <TagLabel>{tag}</TagLabel>
                        </Tag>
                      )
                    })
                  ) : (
                    <Text> Tags displayed here...</Text>
                  )}
                </Flex>
              </Flex>

              <Box pt={5}>
                <Textarea
                  border="1px solid"
                  borderColor="indigo.300"
                  onChange={handleInputChange}
                  isRequired
                  value={value}
                  height={'50vh'}
                  placeholder="<!-- Please describe you issue in detail, using #tags to populate the hashtag bar....  -->"
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
                height="5rem"
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
                      src={ProgrammingLanguages[selectValue]}
                    />
                  )}
                  {selectValue && (
                    <Tag
                      mr={5}
                      variant="outline"
                      size="lg"
                      colorScheme="indigo"
                    >
                      <TagLabel>{selectValue}</TagLabel>
                    </Tag>
                  )}
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        opacity="0.6"
                        variant="outline"
                        colorScheme="indigo"
                      >
                        Choose Language
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />

                        <PopoverBody>
                          <FormControl>
                            <Input
                              value={searchValue}
                              type="text"
                              onChange={(e) => filterLanguages(e)}
                              placeholder="Choose language..."
                            ></Input>
                          </FormControl>
                        </PopoverBody>
                        <PopoverFooter>
                          {filteredLanguages.slice(0, 5).map((lang) => {
                            return (
                              <ListItem
                                onClick={() => {
                                  setSelectValue(lang)
                                }}
                                listStyleType={'none'}
                              >
                                <Flex alignItems="center" direction="row">
                                  {/*@ts-ignore*/}
                                  <Image
                                    mr={5}
                                    height="1rem"
                                    width="1rem"
                                    borderRadius="5"
                                    // @ts-ignore
                                    src={ProgrammingLanguages[lang]}
                                  />
                                  <Text
                                    _hover={{
                                      cursor: 'pointer',
                                      opacity: '0.7',
                                      color: 'indigo.300',
                                    }}
                                  >
                                    {lang.charAt(0).toUpperCase() +
                                      lang.substr(1).toLowerCase()}
                                  </Text>
                                </Flex>
                              </ListItem>
                            )
                          })}
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
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
                  language={selectValue.toLowerCase()}
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
        tags={tags}
        value={value}
        userId={userId}
        selectValue={selectValue}
        settutorComplete={settutorComplete}
        getHRData={getHRData}
        codeValue={codeValue}
        setUserId={setUserId}
      />
    </Box>
  )
}

export default HrContent
