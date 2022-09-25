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
      fontFamily: 'Montserrat',
      fontSize: '3xl',
      fontWeight: 'light',
    },
    redButton: {
      w: '40%',
      pos: 'relative',
      bottom: '20px',
      color: 'black',
      bg: 'red.700',
      h: '50px',
      borderWidth: '1px',
      borderRadius: '2xl',
      borderColor: 'blackAlpha.500',
      p: '4',
      boxShadow: 'dark-lg',
      fontFamily: 'Montserrat',
      fontSize: '3xl',
      fontWeight: 'light',
    },
  },

}

export default Button