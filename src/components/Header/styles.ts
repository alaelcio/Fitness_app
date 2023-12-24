import { StyleSheet } from 'react-native';
import { Inter_900Black } from '@expo-google-fonts/inter';

export const styles = StyleSheet.create({
  container: {
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:20,
  marginTop:50,
    
  },
  img:{
    width:80,
    height:80,
    borderRadius:40,
    
  },
  title:{
    fontSize:24,
    fontFamily:'Inter_900Black'

    

  }
});