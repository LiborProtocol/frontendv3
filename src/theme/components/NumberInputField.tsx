import type { ComponentStyleConfig } from '@chakra-ui/theme'

const NumberInputField: ComponentStyleConfig = {

    variants: {

        greyInput: {
            borderColor: 'grey',
            borderWidth: '2px',
            fontWeight: "300",
            fontFamily: 'Merienda One',
            w: '70%',
            borderRadius: "30",
            color: 'white',
            placeholder: 'Enter your desired amount',
            _placeholder: { opacity: 1, color: 'white', textAlign: 'center' },
            textAlign: 'center',
            top: '30',
            bg: 'gray.600',
        },

    },
}

export default NumberInputField