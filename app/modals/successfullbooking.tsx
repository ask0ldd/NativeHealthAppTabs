import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {}

const SuccessfullBooking = (props: Props) => {
  return (
    <ScrollView>
        <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
            <Text>successfullbooking</Text>
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
})