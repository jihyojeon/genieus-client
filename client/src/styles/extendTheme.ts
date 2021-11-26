import { extendTheme } from "@chakra-ui/react"
import {ButtonStyle as Button} from './styleComponents/ButtonStyle'

// 2. Extend the theme to include custom colors, fonts, etc
export const myTheme = extendTheme({
  colors: {

  },
  fonts: {
    chivo: "chivo",
    nunito: "nunito",
  },

  components: {
    Button
  
  },
});
