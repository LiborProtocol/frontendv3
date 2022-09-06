import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import layerStyles from './styles/LayerStyles'
import NumberInputField from './components/NumberInputField'
import textStyles from './styles/TextStyles'
 
const theme = {
  textStyles,
  layerStyles,
  components: {
    Button,
    NumberInputField,
  },
}

export default extendTheme(theme)