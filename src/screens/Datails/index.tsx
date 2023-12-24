import React from 'react';
import { View, Image,Text, TouchableOpacity } from 'react-native';
import FineImg from '../../assets/image9.png';
import { styles } from './styles';
import {Feather} from '@expo/vector-icons';

export function Datails() {
  return (
    <View style={styles.container}>
        <View >
        <Image
        source={FineImg}
       style={styles.img}
        />
        </View>

        <View style={styles.cardbottom}>
          
          <View style={styles.card}>
           <Feather
           name='play-circle'size={35} color="#F8C06D"
           style={{marginTop:-15}}
           />
          </View>
        </View>
       <View style={styles.top}>
         <Text style={styles.time}>time 20 min</Text>
       </View>
       <Text style={styles.ropes}>battle ropes {'\n'} exercise</Text>

        <Text style={styles.box}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Ad reprehenderit tenetur provident dolorum, nesciunt corporis qui recusandae eos 
          
        </Text>
       <TouchableOpacity style={styles.bnt}>
        <Text style={styles.bntTitle}>Let’s Workout</Text>
       </TouchableOpacity>
    </View>
  );
}