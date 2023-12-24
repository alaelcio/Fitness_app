import { extendTheme } from "native-base";

export const Theme = extendTheme({
    colors:{
        gray:{
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
        },
        green:{
            50:'#074C'
        },
        yield:{
            500:'#F7DD43',
            600:'#BBA317',
        },
        red:{
            500:'#DB4437',
        },
       white:'#FFFFFF'
    },
    fontSizes:{
        xs:'12',
        sm:'14',
        md:'16',
        lg:'20',
        xl:'24',
    },
    size:{
        14:56,
    }
})