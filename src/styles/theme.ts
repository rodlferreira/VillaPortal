import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts:{
        heading: 'Archivo',
        body: 'Averia Libre'
    },
    styles:{
        global: {
            body: {
                bg: 'gray.50'
            }
        }
    }
})