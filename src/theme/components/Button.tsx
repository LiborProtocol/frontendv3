import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Button: ComponentStyleConfig = {

  variants: {

    greenButton: {
      w: '40%',
      pos: 'relative',
      bottom: '20px',
      color: 'black',
      bg: 'green.600',
      h: '50px',
      borderWidth: '1px',
      borderRadius: '2xl',
      borderColor: 'blackAlpha.500',
      p: '4',
      boxShadow: 'dark-lg',
      fontFamily: 'Merienda One',
      fontSize: '3xl',
      fontWeight: '100',
    },
    redButton: {
      w: '40%',
      pos: 'relative',
      bottom: '20px',
      color: 'black',
      bg: 'red.600',
      h: '50px',
      borderWidth: '1px',
      borderRadius: '2xl',
      borderColor: 'blackAlpha.500',
      p: '4',
      boxShadow: 'dark-lg',
      fontFamily: 'Merienda One',
      fontSize: '3xl',
      fontWeight: '100',
    },
  },

}

export default Button