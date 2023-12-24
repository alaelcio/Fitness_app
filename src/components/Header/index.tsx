import React from 'react';
import { View,Text,Image } from 'react-native';

import NeoImg from '../../assets/image.png'

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <View>
        <Text >Gooo Rorning</Text>
        <Text style={styles.title}>Rose Marlo</Text>
        </View>

            <Image 
            source={NeoImg}
            style={styles.img}
            />
   
      

      
    </View>
  );
}