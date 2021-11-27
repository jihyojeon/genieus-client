// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBeaIIXiQ5dkp6BpaU4ctOVvyDfbjNDRtk',
    authDomain: 'genieus-auth.firebaseapp.com',
    projectId: 'genieus-auth',
    storageBucket: 'genieus-auth.appspot.com',
    messagingSenderId: '1009757711665',
    appId: '1:1009757711665:web:0af967cbd3bb4dddb85410',
    measurementId: 'G-SF6PPN7X71',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
