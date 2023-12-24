import { StyleSheet } from 'react-native';

import fonts from '../../assets/fonts';
import { Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';

export const styles = StyleSheet.create({
  section: {
    marginLeft:56,
    fontSize:24,
    fontFamily:'Inter_800ExtraBold',
    marginTop:-40,
    color:'#653'
  },
  card:{
    width:330,
    height:420,
    backgroundColor:'#0E7D77',
    marginTop:40,
    marginHorizontal:20,
    borderRadius:50, 
    marginRight:50
    
  },

  img:{
   flex:1,
   alignItems:'center',
   borderRadius:50,
   
  },
  title:{
   marginTop:-230,
   marginHorizontal:56,

   
  },
  sub:{
    fontSize:25,
    color:'#fff',
    fontFamily: "Inter_900Black"
   
  },

  col:{
    fontSize:20,
    color:'#F8C06D',
    margin:78,
    fontFamily:'Inter_800ExtraBold',
    marginTop:5,
  },
  icon:{
    flexDirection:'row',
    

  },
  iconCar:{
   marginTop:-105,
   marginHorizontal:45
  },
  profile:{
    marginTop:25,
    marginHorizontal:56,
    
    flexDirection:'row'
  },

  user:{
    width:40,
    height:40,
    borderRadius:40,
    marginLeft:2
    
  },
});