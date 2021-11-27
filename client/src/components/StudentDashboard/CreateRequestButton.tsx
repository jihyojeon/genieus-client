import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'

const buttonColorPurple = '#A78BFA'

const clickHandler = () => {
    // TODO: IMPLEMENT
    console.log('Create request clicked - not yet implemented')
}

const CreateRequestButton = () => {
  return (
      // TODO: flipping annoying button isn't aligning vertical center!
        <Flex justify={'flex-start'} align={'center'}>
            <Button
                // TODO: format here or in ButtonStyle.ts?
                bg={buttonColorPurple}
                borderRadius={'2.5rem'}
                boxShadow="dark-lg"
                fontSize="3xl"
                fontWeight={600}
                height={'5rem'}
                onClick={clickHandler}
                width={'20rem'}
            >
                Create Request
            </Button>
        </Flex>
    )
}

export default CreateRequestButton
