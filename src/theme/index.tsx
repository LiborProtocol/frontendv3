import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import layerStyles from './styles/LayerStyles'
import NumberInputField from './components/NumberInputField'
import textStyles from './styles/TextStyles'
 
const theme = {
  
  styles: { 
    global: { 
        html: { 
            fontSize: "14px"
        }
     }
  },
  textStyles,
  layerStyles,
  components: {
    Button,
    NumberInputField,
  },
}

export default extendTheme(theme)