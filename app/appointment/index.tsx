import { Image, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';

import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router';
import { useState } from 'react';
import Ratings from '../../components/Ratings';
import DateButton from '../../components/DateButton';

export default function AppointmentScreen() {

  return (
    <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
      <Image style={{position:'absolute', top:110, left:-120,}} source={require('../../assets/bgpattern.png')}/>
      <View style={styles.buttonsnCardContainer}>
        <View style={styles.buttonsContainer}>
            <Pressable style={styles.buttons}></Pressable>
            <Pressable style={[styles.blueButtons, {marginTop:'auto'}]}></Pressable>
            <Pressable style={styles.blueButtons}></Pressable>
        </View>
        <LinearGradient colors={['#FCFEFE', '#E2F5F9']} style={styles.card}>
            <Image style={{position: 'absolute', left: '35%', top:0 }} source={require('../../assets/heartbgpattern.png')} />
            <View style={{position:'absolute', borderColor:'#10A5C7', borderWidth:1, borderStyle:'dashed', top:'50%', width:'100%', opacity:0.3}}/>
            <Image style={{opacity: 0.93, position: 'absolute', alignSelf: 'flex-end', right:16, bottom:0}} source={require('../../assets/avatars/oliver_avatar.png')}/>
            <Text style={{color: '#374B4C', fontSize: 16, marginTop: 16, marginLeft:18}}>Dr Oliver SYKES</Text>
            <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 12, marginTop: 4, marginLeft:18}}>HEAR SURGEON</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 8, marginTop: 14, backgroundColor:'#00000000', marginLeft:18}}>
                <Ratings rating={5}/>
                <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 12}}>(22 Reviews)</Text>
            </View>
            <Image style={{marginTop:31, marginLeft:18}} source={require('../../assets/mayo_blason.png')}/>
            <View style={{flexDirection:'row', backgroundColor:'#00000000', marginTop:14, marginLeft:18, alignItems:'center'}}>
                <Image source={require('../../assets/icons/localisation_icon.png')}/>
                <View style={{flexDirection:'column', marginLeft:16, backgroundColor:'#00000000'}}>
                    <Text style={{fontSize:10, color:'#89A4AB'}}>9500 Euclid Avenue,</Text>
                    <Text style={{fontSize:10, color:'#89A4AB'}}>Cleveland, OH</Text>
                </View>
            </View>
        </LinearGradient>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
          <Text style={{color:'#415556', fontSize:20}}>Make an Appointment</Text>
      </View>
      <View style={{height:92, marginTop:20, paddingHorizontal:16, overflow:'visible', backgroundColor:'#00000000'}}>
        <ScrollView horizontal={true} contentContainerStyle={{height:92, overflow:'visible', columnGap:16, paddingRight:16,}}>
            <DateButton month="apr" day={9} active={true}/>
            <DateButton month="apr" day={10} active={true}/>
            <DateButton month="apr" day={11} active={true}/>
            <DateButton month="apr" day={12} active={true}/>
            <DateButton month="apr" day={13} active={true}/>
            <DateButton month="apr" day={14} active={true}/>
            <DateButton month="apr" day={15} active={true}/>
            <DateButton month="apr" day={16} active={true}/>
        </ScrollView>
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
    //paddingLeft:18,
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
  blueButtons:{
    height:42,
    width:42,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    elevation:10,
    shadowOpacity:1,
    backgroundColor:'rgba(35, 190, 227, 0.6)',
    borderWidth:1,
    borderColor:'#fff',
    shadowColor:'#39C5E6ff',
  },
  /*activeDateButton:{
    height:72,
    width:54,
    borderRadius:6,
    backgroundColor:'rgba(35, 190, 227, 0.6)',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#fff',
    shadowColor:'#39C5E6ff',
    elevation:10,
}*/

});
