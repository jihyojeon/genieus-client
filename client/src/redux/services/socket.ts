import { io } from 'socket.io-client'
import { Socket } from 'socket.io-client'

interface ExtendedSocket extends Socket {
  userID?: string
}

const URL: string = process.env.REACT_APP_BASE_URL || 'http://localhost:8000'

// setup socket but don't connect until user login
const socket: ExtendedSocket = io(URL, { autoConnect: false })

// ! remove this after development
// catch all listener for development purposes
socket.onAny((event, ...args) => {
  console.log(event, args)
})

export default socket
