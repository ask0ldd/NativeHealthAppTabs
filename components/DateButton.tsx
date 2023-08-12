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
    <Pressable style={styles.activeDateButton}>
        <LinearGradient style={styles.activeDateButtonGradient} colors={['#68D2EA', '#5BB3C9']} start={{x:1, y:0}} end={{x:1, y:1}}>
            <Text>{CapitalizeFirstLetter(month)}</Text>
            <View style={{width:'80%', height:1, borderWidth:1, borderColor:'#FFFFFFAA', marginTop:7, marginBottom:5}}></View>
            <Text>{day}</Text>
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
    },
    activeDateButtonGradient:{
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        borderRadius:6, 
        alignItems:'center', 
        borderWidth:1, 
        borderColor:'#3599B0',
    },
})