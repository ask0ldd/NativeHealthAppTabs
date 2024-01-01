import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../../components/Themed';
import React, { useEffect, useState } from 'react';
import { transform } from '@babel/core';

export default function TabThreeScreen() {

  const [nDots, setnDots] = useState<string>('.')
  const [nCircles, setnCircles] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setnDots((prevDots) => (prevDots.length >= 3 ? '.' : prevDots + '.'))
      setnCircles((prevCircles) => (prevCircles >= 5 ? 0 : prevCircles + 1))
    }, 500)

    return () => clearInterval(interval)
    },
  [])

  return (
    <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>

      {nCircles>4 && <View style={{
        position:'absolute',
        top: '50%',
        left:'50%',
        transform: [{ translateX: -250 }, { translateY: -250 }],
        width: 500,
        height:500,
        borderRadius:500,
        borderWidth:2,
        borderColor:'#8BDCEF50',
        backgroundColor:'transparent',
      }}/>} 
      {nCircles>3 && <View style={{
        position:'absolute',
        top: '50%',
        left:'50%',
        transform: [{ translateX: -200 }, { translateY: -200 }],
        width: 400,
        height:400,
        borderRadius:400,
        borderWidth:2,
        borderColor:'#8BDCEF77',
        backgroundColor:'transparent',
      }}/>}      
      {nCircles>2 && <View style={{
        position:'absolute',
        top: '50%',
        left:'50%',
        transform: [{ translateX: -150 }, { translateY: -150 }],
        width: 300,
        height:300,
        borderRadius:300,
        borderWidth:2,
        borderColor:'#8BDCEF77',
        backgroundColor:'transparent',
      }}/>}
      {nCircles>1 && <View style={{
        position:'absolute',
        top: '50%',
        left:'50%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
        width: 200,
        height:200,
        borderRadius:200,
        borderWidth:2,
        borderColor:'#8BDCEFaa',
        backgroundColor:'transparent',
      }}/>}
      {nCircles>0 && <View style={{
        position:'absolute',
        top: '50%',
        left:'50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        width: 100,
        height:100,
        borderRadius:100,
        borderWidth:2,
        borderColor:'#8BDCEFcc',
        backgroundColor:'transparent',
      }}/>}

      <View style={styles.avatar}>
        <Image source={require('../../assets/avatars/oliver92_avatar.png')}/>
      </View>
      <View style={styles.doctorCallingContainer}>
        <Text style={styles.title}>Dr Oliver Sykes</Text>
        <View style={styles.separatorLine}/>
        <Text style={styles.calling}>Calling{nDots}</Text>
      </View>
      <View style={{...styles.iconsRow, marginTop : 64}}>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
      </View>
      <View style={{...styles.iconsRow, marginTop : 16}}>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar : {
    borderRadius:6, 
    shadowColor:'#23BEE3', 
    borderWidth:4, 
    borderColor:'#FFFFFFFF', 
    elevation:6, 
    overflow:'hidden',
    marginTop:-48,
  },
  doctorCallingContainer: {
    flexDirection:'column', 
    padding:18, 
    width:'90%', 
    alignItems:'center', 
    borderRadius:6, 
    shadowColor:'#23BEE3', 
    elevation:6, 
    backgroundColor:'#FFFFFFCC',
    marginTop:36,
    rowGap:10,
  },
  title: {
    /*marginTop : 28,*/
    fontSize: 24,
    fontWeight: 'bold',
    color:'#415556',
    fontFamily:'Montserrat_700Bold',
    letterSpacing:0.25,
  },
  separatorLine : {
    width: '80%',
    height: 1,
    backgroundColor: '#C0E8EC',
  },
  calling: {
    fontSize : 18,
    color:'#415556',
    fontFamily:'Montserrat_500Medium',
    marginTop: 2,
  },
  iconsRow: {
    flexDirection: 'row',
    columnGap: 24,
    backgroundColor: 'transparent',
  },
  iconContainer:{
    width: 64,
    height: 64,
  },
});
