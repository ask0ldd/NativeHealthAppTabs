import { Image, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';

import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router';
import { useState } from 'react';
import Ratings from '../../components/Ratings';

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
            <Image style={{position: 'absolute', left: '35%', top:0 }} source={require('../../assets/heartbgpattern.png')} />
            <View style={{position:'absolute', borderColor:'#10A5C7', borderWidth:1, borderStyle:'dashed', top:'50%', width:'100%', opacity:0.3}}/>
            <Image style={{opacity: 0.93, position: 'absolute', alignSelf: 'flex-end', right:16, bottom:0}} source={require('../../assets/avatars/oliver_avatar.png')}/>
            <Text style={{color: '#374B4C', fontSize: 16, marginTop: 16}}>Dr Oliver SYKES</Text>
            <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 12, marginTop: 6}}>HEAR SURGEON</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 8, marginTop: 9, backgroundColor:'#00000000'}}>
                <Ratings rating={5}/>
                <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 12}}>(22 Reviews)</Text>
            </View>
            <Image style={{marginTop:32}} source={require('../../assets/mayo_blason.png')}/>
            <View style={{flexDirection:'row', backgroundColor:'#00000000'}}>
                <Image source={require('../../assets/icons/localisation_icon.png')}/>
            </View>
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
    paddingLeft:18,
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
