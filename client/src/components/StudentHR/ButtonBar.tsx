import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import {
  Box,
  Flex,
  Text,
  Checkbox,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import TutorFound from '../StudentHR/TutorFound'
import {
  useAddHRRequestMutation,
  useGetHRRequestByIdQuery,
  useDeleteHRRequestMutation,
} from '../../redux/services/helpRequestService'

const ButtonBar = ({
  userId,
  setUserId,
  value,
  selectValue,
  codeValue,
  tags,
}: any) => {
  const [addHRRequest, addHRRequestResult] = useAddHRRequestMutation()
  const [deleteRequest, deleteRequestResult] = useDeleteHRRequestMutation()
  const [loadingBtn, setloadingBtn] = useState(false)
  const [SelectFav, setSelectFav] = useState(false)
  //@ts-ignore
  const hrById = useGetHRRequestByIdQuery(addHRRequestResult?.data?.id, {
    pollingInterval: 3000,
  })
  console.log(hrById)

  useEffect(() => {
    if (hrById.data?.interested_tutors.length !== 0) {
      setloadingBtn(false)
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }

    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [hrById.data?.interested_tutors])

  return (
    <Grid w={'100vw'} templateRows={'1fr, 1fr'}>
      <GridItem>
        <Flex
          px="10"
          w={'100vw'}
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-around"
        >
          <Flex>
            <Checkbox
              onChange={() => setSelectFav(true)}
              size="lg"
              colorScheme="indigo"
              pr={5}
            ></Checkbox>

            <Text fontFamily="montserrat" letterSpacing={1} lineHeight={7}>
              Click here to wait for your favourites <br />{' '}
              <Text
                letterSpacing={1}
                fontFamily="montserrat"
                fontSize={15}
                opacity={0.5}
              >
                Expect a longer wait time...{' '}
              </Text>
            </Text>
          </Flex>

          <Flex
            direction="column"
            align="center"
            justify={'center'}
            marginLeft="8rem"
          >
            {!loadingBtn === true ? (
              <Button
                onClick={() => {
                  setloadingBtn(true)
                  addHRRequest({
                    student_id: userId,
                    description: value,
                    language: selectValue,
                    code: codeValue,
                    favourites_only: SelectFav,
                    tags: tags,
                  })
                }}
                // ml={105}
                // mr={105}
                letterSpacing={2}
                colorScheme="indigo"
                variant="outline"
                padding={8}
                fontFamily="montserrat"
              >
                Submit
              </Button>
            ) : (
              <Flex
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Button
                  isLoading
                  loadingText="Finding Tutor"
                  // ml={105}
                  letterSpacing={2}
                  colorScheme="indigo"
                  variant="outline"
                  padding={8}
                ></Button>
                <Button
                  onClick={() => {
                    //@ts-ignore
                    deleteRequest(hrById?.data?.id)
                    setloadingBtn(false)
                  }}
                  letterSpacing={1}
                  // mr={50}
                  _hover={{ bg: 'none', opacity: 0.6 }}
                  variant="ghost"
                  fontFamily="montserrat"
                >
                  Cancel
                </Button>
              </Flex>
            )}

            <Flex justifyContent="center">
              {hrById.data &&
              hrById.data.interested_tutors.length !== 0 &&
              hrById.data.declined_tutors.length === 0 ? (
                //@ts-ignore
                <TutorFound
                  hrById={hrById}
                  tutors={hrById.data.interested_tutors}
                />
              ) : (
                <Text mt={5} fontFamily="montserrat" fontSize="15px">
                  Available tutors will be displayed below...
                </Text>
              )}
            </Flex>
          </Flex>
          <Box>
            <Text fontFamily="montserrat" letterSpacing={0.5}>
              You can continue to update your request after submitting
            </Text>
          </Box>
        </Flex>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  )
}

export default ButtonBar

// getHRData()
// setTimeout(() => {
//   settutorComplete(true)
//   setloadingBtn(false)

//   window.scrollTo({
//     left: 0,
//     top: document.body.scrollHeight,
//     behavior: 'smooth',
//   })
// }, 3000)
// setloadingBtn(true)
