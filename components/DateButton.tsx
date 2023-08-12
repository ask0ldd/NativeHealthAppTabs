import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {}

const DateButton = (props: Props) => {
  return (
    <Pressable style={styles.activeDateButton}>
        <LinearGradient style={{width:'100%', height:'100%', justifyContent:'center', borderRadius:6, alignItems:'center', borderWidth:1, borderColor:'#3599B0'}} colors={['#68D2EA', '#5BB3C9']} start={{x:1, y:0}} end={{x:1, y:1}}>
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
        shadowColor:'#39C5E6ff',
        // shadowColor:'#000000ff',
        elevation:8,
        overflow:'hidden',
    }
})