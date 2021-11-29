import React from 'react'
import { Box, Flex, Text, Checkbox, Button } from '@chakra-ui/react'

const ButtonBar = ({
  getHRData,
  loadingBtn,
  setloadingBtn,
  settutorComplete,
}: any) => {
  return (
    <Flex
      px="10"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-around"
    >
      <Flex>
        <Checkbox size="lg" colorScheme="indigo" pr={5}></Checkbox>

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
            getHRData()
            setTimeout(() => {
              settutorComplete(true)
              setloadingBtn(false)

              window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: 'smooth',
              })
            }, 3000)
            setloadingBtn(true)
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
    </Flex>
  )
}

export default ButtonBar
