import React from 'react'
import { Button } from '@chakra-ui/button'
import { FaVideo } from 'react-icons/fa'

type ActionZoomProps = {
  zoom_url: string
}

const ActionZoom = ({ zoom_url }: ActionZoomProps) => {
  const zoomButtonHandler = () => {
    navigator.clipboard.writeText(zoom_url)
    window.open(zoom_url)
  }
  return (
    <Button w="15ch" mt={'1rem'} onClick={zoomButtonHandler}>
      <FaVideo />
      &nbsp;&nbsp; Open Zoom
    </Button>
  )
}

export default ActionZoom
