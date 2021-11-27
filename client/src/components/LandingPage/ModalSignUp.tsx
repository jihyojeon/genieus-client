import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
} from '@chakra-ui/react'

//@ts-ignore
const ModalSignUp = ({isOpen, onClose}) => {


    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Hey</ModalBody>

                <ModalFooter>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="secondary">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalSignUp
