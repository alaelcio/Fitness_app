import React from 'react';
import { View,Image,Text, ImageBackground, TouchableOpacity } from 'react-native';
 import FitImg from '../../assets/fitne.png';
import { styles } from './styles';
import {LinearGradient} from 'expo-linear-gradient'

import {useNavigation} from '@react-navigation/native'


export function Home() {

  const navigation = useNavigation();

  return (


      <View style={styles.container}>

       
      <ImageBackground
      source={FitImg }
      style={{ backgroundColor:'#0E7D77', width:300, height:570, marginTop:120} }
      >
        <Text style={styles.title}>Push {'\n'}YourSelf{'\n'} Harder</Text>

        <TouchableOpacity style={styles.bnt} onPress={()=> navigation.navigate('datails')}>
            <Text style={styles.subtitle}>
            Get Started
            </Text>
        </TouchableOpacity>
      </ImageBackground>
      
      </View>
  );
}