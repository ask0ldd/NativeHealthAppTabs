import { Image, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';

import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router';
import { useState } from 'react';

export default function AppointmentScreen() {

  return (
    <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
      <Image style={{position:'absolute', top:90, left:-120,}} source={require('../../assets/bgpattern.png')}/>
      <View style={styles.buttonsnCardContainer}>
        <View style={styles.buttonsContainer}></View>
        <LinearGradient colors={['#FCFEFE', '#E2F5F9']} style={styles.card}>

        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  buttonsnCardContainer: {
    flexDirection:'row',
    height:200,
    width:'100%',
    columnGap:18,
    paddingHorizontal:16,
    backgroundColor:'#00000000',
    paddingTop:20,
  },
  card:{
    flex:1,
    height:200,
    width:'100%',
    borderRadius:20,
    overflow:'hidden',
    shadowColor:'#23BEE3',
    elevation:12,
    shadowOpacity:1,
  },
  buttonsContainer:{
    height:200,
    width:42,
    flexDirection:'column',
    rowGap:18,
    backgroundColor:'#00000000',
  },

});
