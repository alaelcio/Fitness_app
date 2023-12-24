import React from 'react';
import { View, Text, Image } from 'react-native';
import NeoImg from '../../assets/neon.png'
import useImg from '../../assets/image1.png';
import userImg from '../../assets/image.png';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export function Page() {
  return (

    <View >
      <Header />
      <View>
        <Text style={styles.section}>Section your Training</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={NeoImg}
          style={styles.img}
        />


      </View>
      <View style={styles.title}>
        <Text style={styles.sub}>Push {'\n'}YourSelf{'\n'} Harder</Text>

      </View>

      <View style={styles.icon}>


        <Text style={styles.col}>250 KCol</Text>

      </View>

      <View style={styles.iconCar}>
        <Feather
          name='folder-plus' size={25} color="#F8C06D"

        />
      </View>

      <View style={styles.profile}>
        <Image
          source={userImg}
          style={styles.user}
        />

        <Image
          source={useImg}
          style={styles.user}
        />

        <Image
          source={userImg}
          style={styles.user}
        />
      </View>
     
    </View>
  );
}