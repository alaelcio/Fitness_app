



import { Home } from './src/screens/Home';
import { Page } from './src/screens/Page';

import {useFonts,Inter_800ExtraBold,Inter_900Black,Inter_300Light} from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';

import fonts from './src/assets/fonts';
import { Datails } from './src/screens/Datails';
import { Routes } from './src/routes';
export default function App() {

  const [fontsLoaded] = useFonts({
    
    Inter_800ExtraBold,
    Inter_900Black,
    Inter_300Light
    
  })

   if(! fontsLoaded ){
    return null;
   }
   
      
  return (
  <Routes/>
  );
}


