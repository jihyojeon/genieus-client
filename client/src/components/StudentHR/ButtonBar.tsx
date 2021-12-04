import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { Box, Flex, Text, Checkbox, Button } from '@chakra-ui/react'
import TutorFound from '../StudentHR/TutorFound'
import {
  useAddHRRequestMutation,
  useGetHrRequestByValueQuery,
  useGetHRRequestByIdQuery,
} from '../../redux/services/helpRequestService'

const ButtonBar = ({
  getHRData,
  loadingBtn,
  setloadingBtn,
  settutorComplete,
  userId,
  setUserId,
  value,
  selectValue,
  codeValue,
  tags,
}: any) => {
  const [hrId, sethrId] = useState()
  const [buttonClicked, setbuttonClicked] = useState(false)
  const [addHRRequest, addHRRequestResult] = useAddHRRequestMutation()
  //@ts-ignore
  // const getHrById = useGetHRRequestByIdQuery(hrId)

  const [SelectFav, setSelectFav] = useState(false)

  const getHrByValue = useGetHrRequestByValueQuery(
    //@ts-ignore
    {
      student_id: userId,

      // tutor_id: getHrById.data?.tutor.id,
      status: 'assigned',
    }
    // { pollingInterval: 3000 }
  )

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })

    //@ts-ignore
    // getHrByValue.data.map((item) => {
    //   //@ts-ignore
    //   sethrId(item.id)
    // })
  }, [])
  console.log(getHrByValue.data)

  return (
    <Flex
      px="10"
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

      {!loadingBtn === true ? (
        <Button
          onClick={() => {
            setbuttonClicked(true)
            addHRRequest({
              student_id: userId,
              description: value,
              language: selectValue,
              code: codeValue,
              favourites_only: SelectFav,
              tags: tags,
            })
            console.log(addHRRequestResult)
            console.log(getHrByValue.data)
          }}
          ml={105}
          letterSpacing={2}
          colorScheme="indigo"
          variant="outline"
          padding={8}
          fontFamily="montserrat"
        >
          Submit
        </Button>
      ) : (
        <Flex justifyContent="center" alignItems="center" direction="column">
          <Button
            isLoading
            loadingText="Finding Tutor"
            ml={105}
            letterSpacing={2}
            colorScheme="indigo"
            variant="outline"
            padding={8}
          ></Button>
          <Button
            onClick={() => {
              setloadingBtn(false)
              settutorComplete(false)
              clearTimeout()
            }}
            letterSpacing={1}
            mr={50}
            _hover={{ bg: 'none', opacity: 0.6 }}
            variant="ghost"
            fontFamily="montserrat"
          >
            Cancel
          </Button>
        </Flex>
      )}

      <Box>
        <Text fontFamily="montserrat" letterSpacing={0.5}>
          You can continue to update your request after submitting
        </Text>
      </Box>
      {getHrByValue?.data?.length && buttonClicked == true ? (
        <TutorFound data={getHrByValue.data} />
      ) : null}
    </Flex>
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
