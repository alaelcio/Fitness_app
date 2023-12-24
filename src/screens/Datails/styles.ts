import { StyleSheet } from 'react-native';
import { Inter_900Black, Inter_300Light } from '@expo-google-fonts/inter';

export const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:400,
    backgroundColor:'#0E7D77'
  },
  img:{
    width:350,
    height:360,
    marginTop:40,
  },
  cardbottom:{
    width:420,
    height:280,
    marginTop:-70,
    borderRadius:50,
    backgroundColor:'#FEF9F1'
  },
  time:{
    fontFamily:'Inter_300Light',
    fontSize:20,
    textAlign:'center',
    marginTop:5,
    textTransform:'uppercase',
  },
 
  card:{

   flex:1,
   alignItems:'center',
   marginTop:30
  },
  card1:{
    fontSize:20,
  },
  top:{
  marginTop:-220,
  width:240,
  height:40,
  backgroundColor:'#F8C06D',
  marginHorizontal:78,
  flexDirection:'column',
   borderRadius:10,
  },
  ropes:{
    fontSize:25,
    fontFamily:'Inter_900Black',
    marginLeft:56,
    marginTop:20,
    textTransform:'uppercase',
    lineHeight:30,
  },
  box:{
    marginLeft:35,
    marginHorizontal:32,
    marginTop:10,
  },
  bnt:{
    
    width:258,
    height:40,
    backgroundColor:'#F8C06D',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:74,
    borderRadius:50,

  },
  bntTitle:{
    fontSize:15,
    fontFamily:'Inter_900Black'
  },
    

  
 
});