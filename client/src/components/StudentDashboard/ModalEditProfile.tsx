import React, { useState } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Image,
  Text,
  FormControl,
  InputGroup,
  FormLabel,
  Input,
  Box,
  InputRightElement,
  HStack,
  Checkbox,
  FormHelperText,
  Center,
} from '@chakra-ui/react'

const ModalEditProfile = ({}) => {
  // const ModalEditProfile = ({ isOpen, onClose }) => {
  //   const [updateName, setUpdateName] = useState('')
  //   const [updateEmail, setUpdateEmail] = useState('')
  //   const [updateBio, setUpdateBio] = useState('')
  //   const [updatePhoto, setUpdatePhoto] = useState('')

  return (
    <Text>Hello World</Text>
    // <Modal></Modal>
    // <Modal isOpen={isOpen} onClose={onClose}>
    //   <ModalOverlay />
    //   <ModalContent fontFamily="chivo">
    //     <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">
    //       Edit profile
    //     </ModalHeader>

    //     <ModalBody>
    //       <Flex flexDirection="row">
    //         <Image
    //           src="https://bit.ly/dan-abramov"
    //           boxSize="10rem"
    //           borderRadius="5rem"
    //         />

    //         <Box ml="20px">
    //           <Flex flexDirection="column">
    //             <FormLabel>Update name</FormLabel>
    //             <Input
    //               onChange={(e) => setUpdateName(e.target.value)}
    //               type="string"
    //             />

    //             <FormLabel>Update email</FormLabel>
    //             <Input
    //               onChange={(e) => setUpdateEmail(e.target.value)}
    //               type="email"
    //             />
    //           </Flex>
    //         </Box>
    //       </Flex>
    //       <FormLabel>Update bio</FormLabel>
    //       <InputGroup>
    //         <Input
    //           onChange={(e) => setUpdateBio(e.target.value)}
    //           type="email"
    //         />
    //       </InputGroup>
    //     </ModalBody>

    //     <ModalFooter>
    //       <Flex flexDirection="row" justify="space-between" align="left">
    //         <Button>Submit</Button>
    //         <Button>Cancel</Button>
    //         <ModalCloseButton />
    //       </Flex>
    //     </ModalFooter>
    //   </ModalContent>
    // </Modal>
  )
}

export default ModalEditProfile
