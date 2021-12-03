//@ts-ignore
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react'

//@ts-ignore
// const ModalDecline = ({ isShowing }) => {
const ModalDecline = ({ isOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <Text>Hello World</Text>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )

}

export default ModalDecline
