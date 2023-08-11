import { Image, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';

import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router';
import { useState } from 'react';

export default function AppointmentScreen() {

  return (
    <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
      <Image style={{position:'absolute', top:90, left:-120,}} source={require('../../assets/bgpattern.png')}/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },

});
