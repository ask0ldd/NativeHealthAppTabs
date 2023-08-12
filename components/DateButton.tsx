import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CapitalizeFirstLetter } from '../services/string'

type Props = {
    active : boolean
    month : 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec'
    day : number
}

const DateButton = ({day, month, active}: Props) => {
  return (
    <Pressable style={active ? styles.activeDateButton : styles.inactiveDateButton}>
        <LinearGradient style={active ? styles.activeDateButtonGradient : styles.inactiveDateButtonGradient} colors={active ? ['#68D2EA', '#5BB3C9'] : ['#FFFFFFFF', '#FFFFFFAA']} start={{x:1, y:0}} end={{x:1, y:1}}>
            <Text style={{backgroundColor:'#00000000'}}>{CapitalizeFirstLetter(month)}</Text>
            <View style={[{backgroundColor:'#00000000', width:'40%', height:1, borderTopWidth:0, borderBottomWidth:1, marginTop:7, marginBottom:5}, active ? {borderColor:'#FFFFFFAA'} : {borderColor:'#CAE3EAAA'}]}></View>
            <Text style={{backgroundColor:'#00000000'}}>{day}</Text>
        </LinearGradient>
    </Pressable>
  )
}

export default DateButton

const styles = StyleSheet.create({
    activeDateButton:{
        height:72,
        width:54,
        borderRadius:6,
        //backgroundColor:'rgba(35, 190, 227, 1)',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#fff',
        shadowColor:'#268EA8ff',
        // shadowColor:'#000000ff',
        elevation:8,
        overflow:'hidden',
        backgroundColor:'#00000000',
    },
    activeDateButtonGradient:{
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:1, 
        borderColor:'#3599B0',
        backgroundColor:'#00000000',
    },
    inactiveDateButton:{
        height:72,
        width:54,
        borderRadius:6,
        //backgroundColor:'rgba(35, 190, 227, 1)',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#CAE3EA',
        shadowColor:'#268EA8ff',
        // shadowColor:'#000000ff',
        elevation:8,
        overflow:'hidden',
        backgroundColor:'#00000000',
    },
    inactiveDateButtonGradient:{
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:1, 
        borderColor:'#FFFFFFFF',
        backgroundColor:'#00000000',
    },
})