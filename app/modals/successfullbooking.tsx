import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {}

const SuccessfullBooking = (props: Props) => {
  return (
    <ScrollView>
        <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
            <LinearGradient style={styles.header} colors={['#FFFFFF00','#FFFFFF85','#FFFFFF85','#FFFFFF00']} start={{x:0, y:0}} end={{x:1, y:0}} locations={[0,0.25,0.75,1]}>
                <Image source={require('../../assets/success.png')}/>
                <Text style={{ fontSize:16, fontFamily:'Montserrat_700Bold', color:'#415556', opacity:0.9}}>Your Appointment is Booked !</Text>
            </LinearGradient>

            <View style={{flexDirection:'column', paddingHorizontal:16, rowGap:20, marginTop:30}}>
                <View style={{flexDirection:'column', rowGap:10}}>
                    <Text style={{ fontSize:12, fontFamily:'Montserrat_700Bold', opacity:0.9}}>Practitioner :</Text>
                    <View style={{flexDirection:'row', columnGap:20}}>
                        <View style={{flexDirection:'column', width:'100%', flex:1, justifyContent:'center', alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:4, backgroundColor:'#FFFFFFCC'}}>
                            <Text>Dr Oliver Sykes</Text>
                            <Text>HEART SURGEON</Text>
                        </View>
                        <Image style={{borderRadius:6, shadowColor:'#23BEE3', borderWidth:2, borderColor:'#FFFFFFFF'}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
                    </View>
                </View>
            </View>
        
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
        paddingTop:12,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBlockColor:'#fff',
    }
})