import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { extendTheme } from '@chakra-ui/react'

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button: ComponentStyleConfig = {

    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
    },

    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'purple.500',
            color: 'purple.500',
        },
        gd: {
            bg: 'red.600',
            color: 'white',
        },
    },
}



const button = extendTheme({
    components: {
        Button,
    },
})

export default button