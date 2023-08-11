import { Image, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';

import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router';
import { useState } from 'react';

export default function AppointmentScreen() {

  return (
    <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
      <Image style={{position:'absolute', top:110, left:-120,}} source={require('../../assets/bgpattern.png')}/>
      <View style={styles.buttonsnCardContainer}>
        <View style={styles.buttonsContainer}>
            <Pressable style={styles.buttons}></Pressable>
            <Pressable style={[styles.buttons, {marginTop:'auto'}]}></Pressable>
            <Pressable style={styles.buttons}></Pressable>
        </View>
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
    height:250,
    width:'100%',
    columnGap:16,
    paddingHorizontal:16,
    backgroundColor:'#00000000',
    paddingTop:20,
    paddingBottom:30,
    overflow:'visible',
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
    rowGap:16,
    backgroundColor:'#00000000',
  },
  buttons:{
    height:42,
    width:42,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFFFF',
    borderRadius:10,
    shadowColor:'#23BEE3',
    elevation:4,
    shadowOpacity:1,
  },

});
