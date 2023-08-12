import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CapitalizeFirstLetter } from '../services/string'
import { IActiveDate } from '../app/appointment'

type Props = {
    // active : boolean
    month : string // 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec'
    day : number
    activeDate : IActiveDate
    setActiveDate : (activeDate : IActiveDate) => void
    scrollView : React.MutableRefObject<ScrollView | null>
    screenWidth : number
}

const DateButton = ({day, month, screenWidth, scrollView, activeDate, setActiveDate} : Props) => {

    useEffect(() => {scrollView.current?.scrollTo({x: (activeDate.day)*(16+52)-screenWidth/2-26})}, [activeDate])

    const active = JSON.stringify(activeDate) === JSON.stringify({day:day, month:month})

    return (
        <Pressable style={active ? styles.activeDateButton : styles.inactiveDateButton} onPress={() => {
            setActiveDate({day: day, month:month})
            // scrollView.current?.scrollTo({x: (day)*(16+52)-screenWidth/2-26})
        }}>
            <LinearGradient style={active ? styles.activeDateButtonGradient : styles.inactiveDateButtonGradient} colors={active ? ['#68D2EA', '#5BB3C9'] : ['#FFFFFFFF', '#FFFFFFAA']} start={{x:1, y:0}} end={{x:1, y:1}}>
                <Text style={{backgroundColor:'#00000000', fontSize:10, marginTop:2}}>{CapitalizeFirstLetter(month)}</Text>
                <View style={[{backgroundColor:'#00000000', width:'40%', height:1, borderTopWidth:0, borderBottomWidth:1, marginTop:7, marginBottom:5}, active ? {borderColor:'#FFFFFFAA'} : {borderColor:'#CAE3EAAA'}]}></View>
                <Text style={{backgroundColor:'#00000000',  fontSize:16}}>{day}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export default DateButton

const styles = StyleSheet.create({
    activeDateButton:{
        height:72,
        width:52,
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
        width:52,
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