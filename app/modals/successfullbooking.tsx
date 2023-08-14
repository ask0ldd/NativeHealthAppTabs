import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {}

const SuccessfullBooking = (props: Props) => {
  return (
    <ScrollView>
        <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
            <LinearGradient style={styles.header} colors={['#FFFFFF00','#FFFFFF95','#FFFFFF95','#FFFFFF00']} start={{x:0, y:0}} end={{x:1, y:0}} locations={[0,0.2,0.8,1]}>
                <Image source={require('../../assets/success.png')}/>
                <Text style={{ fontSize:16, fontFamily:'Montserrat_700Bold', color:'#415556', opacity:0.9}}>Your Appointment is Booked !</Text>
            </LinearGradient>
        </LinearGradient>
    </ScrollView>
  )
}

export default SuccessfullBooking

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        paddingBottom:40  
    },
    header:{
        height:162, 
        marginTop:30, 
        flexDirection:'column', 
        alignItems:'center',
        paddingTop:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBlockColor:'#fff',
    }
})