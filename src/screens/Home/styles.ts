import { StyleSheet } from 'react-native';
import { Inter_800ExtraBold, Inter_900Black, Inter_300Light } from '@expo-google-fonts/inter';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#0E7D77',
      
  },
 title:{
    fontSize:30,
    color:'#FFF',
    textAlign:'center',
    fontFamily:'Inter_900Black',
    marginTop:-84,
    lineHeight:40
    

 },

 card:{
    width:650,
    height:350,
    backgroundColor:'#fff',
    flex:1,
   
   
 },
 bnt:{
    width: 327,
    height: 48,
    borderRadius:80,
    backgroundColor:'#F8C06D',
    marginTop:410,
    margin:20,
 },
 subtitle:{
    fontSize:20,
    color:"#000",
    textAlign:'center',
    marginTop:12,
    fontFamily:'Inter_800ExtraBold'
    
 }
  
});