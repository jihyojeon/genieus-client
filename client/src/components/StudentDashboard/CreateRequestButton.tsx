import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

const buttonColorPurple = '#A78BFA'

const clickHandler = () => {
  // TODO: IMPLEMENT ACTION ON CREATE REQUEST CLICK
  console.log('Create request clicked - not yet implemented')
}

const CreateRequestButton = () => {
  return (
    <Flex justify={'flex-start'} align={'center'} height={"100%"}>
      <Button
        // TODO: MOVE FORMATTING TO BUTTONSTYLE.TS?
        bg={buttonColorPurple}
        borderRadius={'2.5rem'}
        // TODO: CREATE LIGHTER, STRONGER, SHADOW UNDER BUTTON
        boxShadow="dark-lg"
        fontSize="3xl"
        fontWeight={700}
        minHeight={"2rem"}
        height={'70%'}
        onClick={clickHandler}
        marginTop={'5%'}
        marginBottom={'5%'}
        width={'20rem'}
      >
        Create Request
      </Button>
    </Flex>
  )
}

export default CreateRequestButton