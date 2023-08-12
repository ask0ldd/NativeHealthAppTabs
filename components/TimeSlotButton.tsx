import { Dimensions, Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
    slot : string
    setActiveTimeSlot : (timeslot : string) => void
    scrollView : React.MutableRefObject<ScrollView | null>
    activeTimeSlot : string
    timeSlotsList : Array<string>
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const TimeSlotButton = ({slot, scrollView, activeTimeSlot, setActiveTimeSlot, timeSlotsList}: Props) => {

    const active = slot == activeTimeSlot

    useEffect(() => {scrollView.current?.scrollTo({x: (timeSlotsList.indexOf(activeTimeSlot)-1)*(16+((screenWidth - 4*16)/3))})}, [activeTimeSlot])

    return (
        <Pressable style={active ? styles.activeTimeSlotButton : styles.inactiveTimeSlotButton} onPress={() => {
            setActiveTimeSlot(slot)
            // scrollView.current?.scrollTo({x: (timeSlotsList.indexOf(slot)-1)*(16+((screenWidth - 4*16)/3))})
        }}>
            <LinearGradient style={active ? styles.activeTimeSlotButtonGradient : styles.inactiveTimeSlotButtonGradient} colors={active ? ['#68D2EA', '#5BB3C9'] : ['#FFFFFFFF', '#FFFFFFAA']} start={{x:1, y:0}} end={{x:1, y:1}}>
                <Text style={{backgroundColor:'#00000000', fontSize:12}}>{slot}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export default TimeSlotButton

const styles = StyleSheet.create({
    activeTimeSlotButton:{
        height:38,
        width: (screenWidth - 4*16)/3,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#fff',
        shadowColor:'#268EA8ff',
        elevation:8,
        overflow:'hidden',
        backgroundColor:'#00000000',
    },
    inactiveTimeSlotButton:{
        height:38,
        width:(screenWidth - 4*16)/3,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#CAE3EA',
        shadowColor:'#268EA8ff',
        elevation:8,
        overflow:'hidden',
        backgroundColor:'#00000000',
    },
    activeTimeSlotButtonGradient:{
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:1, 
        borderColor:'#3599B0',
        backgroundColor:'#00000000',
    },
    inactiveTimeSlotButtonGradient:{
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:1, 
        borderColor:'#FFFFFFFF',
        backgroundColor:'#00000000',
    },
})