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
  Heading,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Portal,
  Input,
  Text,
  FormControl,
  useColorModeValue,
  Tag,
  TagLabel,
  Button,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { BsFillCaretDownFill } from 'react-icons/bs'

const HrContent = () => {
  const languageKeys = Object.keys(ProgrammingLanguages)
  const textColor = useColorModeValue('gray.900', 'gray.100')
  const [value, setValue] = useState('')
  const [codeValue, setCodeValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [filteredLanguages, setFilteredLanguages] = useState(languageKeys)
  const [userId, setUserId] = useState()
  const { onOpen, onClose, isOpen } = useDisclosure()
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
                  <Text color={textColor}>Description</Text>
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
                    <Text color={textColor}> Tags displayed here...</Text>
                  )}
                </Flex>
              </Flex>

              <Box pt={5}>
                <Textarea
                  border="1px solid"
                  borderColor="indigo.300"
                  onChange={handleInputChange}
                  fontSize={'1rem'}
                  isRequired
                  value={value}
                  height={'50vh'}
                  placeholder="Describe your issue and use #tags to create tags."
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
                  paddingRight={'1rem'}
                >
                  <Text color={textColor}>Code Sample</Text>
                </Heading>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                >
                  {selectValue && (
                    <Tag
                      mr={5}
                      variant="outline"
                      size="lg"
                      colorScheme="indigo"
                    >
                      <Image
                        mr={2}
                        height="1rem"
                        width="1rem"
                        borderRadius="5"
                        // @ts-ignore
                        src={ProgrammingLanguages[selectValue]}
                      />
                      <TagLabel>{selectValue}</TagLabel>
                    </Tag>
                  )}
                  <Popover isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
                    <PopoverTrigger>
                      <Button
                        opacity="0.6"
                        variant="outline"
                        colorScheme="indigo"
                      >
                        Choose Language
                        {
                          <BsFillCaretDownFill
                            size={'1em'}
                            style={{ marginLeft: '5px' }}
                          />
                        }
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
                                  onClose()
                                  setSearchValue('')
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
        codeValue={codeValue}
        setUserId={setUserId}
      />
    </Box>
  )
}

export default HrContent
