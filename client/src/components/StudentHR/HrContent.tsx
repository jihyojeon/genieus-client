import FocusLock from 'react-focus-lock'
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
  UnorderedList,
  ListItem,
  Heading,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  useDisclosure,
  IconButton,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Input,
  Select,
  Text,
  HStack,
  FormControl,
  FormLabel,
  useColorModeValue,
  Tag,
  TagLabel,
  Stack,
  ButtonGroup,
  Button,
  Textarea,
} from '@chakra-ui/react'
import { connectToSocket } from '../../redux/services/socket'

const HrContent = ({ settutorComplete }: any) => {
  const languageKey = Object.keys(ProgrammingLanguages)

  const [value, setValue] = useState('')
  const [codeValue, setcodeValue] = useState('')
  const [loadingBtn, setloadingBtn] = useState(false)
  const [selectValue, setSelectValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [filteredLanguages, setfilteredLanguages] = useState(languageKey)
  const [userId, setUserId] = useState()
  let tags = value.match(/#[a-z]+/gi)

  const filterLanguages = (e: any) => {
    setSearchValue(e.target.value)
    setfilteredLanguages(
      languageKey.filter((language: string) => {
        console.log(searchValue, filteredLanguages)

        return searchValue
          ? language.toLowerCase().includes(searchValue.toLowerCase())
          : languageKey
      })
    )
  }

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

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

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
                {tags !== null ? (
                  tags.map((tag) => {
                    return (
                      <HStack spacing={2}>
                        <Tag variant="outline" size="lg" colorScheme="indigo">
                          <TagLabel>{tag}</TagLabel>
                        </Tag>
                      </HStack>
                    )
                  })
                ) : (
                  <Text> Tags displayed here...</Text>
                )}
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
                  <Tag mr={5} variant="outline" size="lg" colorScheme="indigo">
                    <TagLabel>{selectValue}</TagLabel>
                  </Tag>
                  <Popover>
                    <PopoverTrigger>
                      <Button>Search</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />

                        <PopoverCloseButton />
                        <PopoverBody>
                          <FormControl>
                            <Input
                              value={searchValue}
                              type="text"
                              onChange={(e) => filterLanguages(e)}
                              placeholder="Choose langauge..."
                            ></Input>
                          </FormControl>
                        </PopoverBody>
                        <PopoverFooter>
                          {filteredLanguages.slice(0, 5).map((lang) => {
                            return (
                              <ListItem
                                onClick={() => setSelectValue(lang)}
                                listStyleType={'none'}
                              >
                                {lang}
                              </ListItem>
                            )
                          })}
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>

                  {/* <Select
                    onChange={(e) => setSelectValue(e.target.value)}
                    value={selectValue}
                    colorScheme="indigo"
                    borderColor="indigo.300"
                    maxW={'200px'}
                    variant="outline"
                    placeholder="Select language"
                    isRequired
                  >
                    <option>c</option>

                    <option>coffeescript</option>
                    <option>cpp</option>
                    <option>csharp</option>
                    <option>csp</option>
                    <option>css</option>
                    <option>dart</option>
                    <option>dockerfile</option>

                    <option>elixir</option>
                    <option>flow9</option>

                    <option>go</option>
                    <option>graphql</option>
                    <option>handlebars</option>
                    <option>hcl</option>
                    <option>html</option>
                    <option>ini</option>
                    <option>java</option>
                    <option>javascript</option>
                    <option>json</option>
                    <option>julia</option>
                    <option>kotlin</option>
                    <option>less</option>
                    <option>markdown</option>
                    <option>mysql</option>
                    <option>pascal</option>
                    <option>perl</option>
                    <option>pgsql</option>
                    <option>php</option>
                    <option>plaintext</option>
                    <option>powerquery</option>
                    <option>powershell</option>
                    <option>pug</option>
                    <option>python</option>
                    <option>r</option>
                    <option>razor</option>
                    <option>redis</option>
                    <option>redshift</option>
                    <option>restructuredtext</option>
                    <option>ruby</option>
                    <option>rust</option>
                    <option>sb</option>
                    <option>scala</option>
                    <option>scheme</option>
                    <option>scss</option>
                    <option>shell</option>
                    <option>sol</option>
                    <option>sparql</option>
                    <option>sql</option>
                    <option>swift</option>
                    <option>typescript</option>
                    <option>xml</option>
                  </Select> */}
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
                  language={selectValue}
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
