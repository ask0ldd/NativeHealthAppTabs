import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BookedAppointmentContext } from '../context/BookedAppointmentContext'

type IProps = {}

const SuccessfullBooking = (props: IProps) => {

    let appointment = {
        practitioner : "Dr Oliver Sykes",
        specialty : "HEART SURGEON",
        date : "Monday, September 6, 2019",
        timeslot : "10h00 - 11h00",
        message : "For the past two weeks, I have been experiencing persistent headaches, primarily located in the frontal region of my head. The intensity of the headaches varies throughout the day, but they have been interfering with my daily activities and causing discomfort.",
    }

    const {bookedAppointment} = useContext(BookedAppointmentContext)

    if(bookedAppointment.date != null) appointment = {...bookedAppointment}

    console.log(bookedAppointment)

    return (
        <ScrollView>
            <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
                <Image style={{position:'absolute', top:110, left:-120,}} source={require('../../assets/bgpattern.png')}/>
                <Image style={{position:'absolute', top:600, left:-600,}} source={require('../../assets/bgpattern.png')}/>
                <LinearGradient style={styles.header} colors={['#FFFFFF00','#FFFFFF85','#FFFFFF85','#FFFFFF00']} start={{x:0, y:0}} end={{x:1, y:0}} locations={[0,0.25,0.75,1]}>
                    <Image source={require('../../assets/success.png')}/>
                    <Text style={{ fontSize:16, fontFamily:'Montserrat_700Bold', color:'#415556', opacity:0.9}}>The Selected Slot has been booked !</Text>
                </LinearGradient>

                <View style={{flexDirection:'column', paddingHorizontal:16, rowGap:20, marginTop:20}}>
                    <View style={{flexDirection:'column', rowGap:10}}>
                        <Text style={{color:'#374B4C',  fontSize:14, fontFamily:'Montserrat_600SemiBold', opacity:0.9}}>Practitioner :</Text>
                        <View style={{flexDirection:'row', columnGap:20}}>
                            <View style={{flexDirection:'column', rowGap:6, width:'100%', flex:1, justifyContent:'center', alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
                                <Text style={{color:'#374B4C', fontSize:16, fontFamily:'Montserrat_700Bold',}}>{appointment.practitioner}</Text>
                                <Text style={{color:'#89A4AB', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_600SemiBold',}}>{appointment.specialty}</Text>
                            </View>
                            <View style={{borderRadius:6, shadowColor:'#23BEE3', borderWidth:3, borderColor:'#FFFFFFFF', elevation:6, overflow:'hidden'}}><Image source={require('../../assets/avatars/oliver72_avatar.png')}/></View>
                        </View>
                    </View>

                    <View style={{flexDirection:'column', rowGap:10}}>
                        <Text style={{color:'#374B4C',  fontSize:14, fontFamily:'Montserrat_600SemiBold', opacity:0.9}}>Date :</Text>
                        <View style={{width:'100%', height:40, flex:1, justifyContent:'center', alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
                            <Text style={{fontSize:12, fontFamily:'Montserrat_600SemiBold', color:'#374B4C'}}>{appointment.date}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column', rowGap:10}}>
                        <Text style={{color:'#374B4C',  fontSize:14, fontFamily:'Montserrat_600SemiBold', opacity:0.9}}>Time Slot :</Text>
                        <View style={{width:'100%', height:40, flex:1, justifyContent:'center', alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
                            <Text style={{fontSize:12, fontFamily:'Montserrat_600SemiBold', color:'#374B4C'}}>{appointment.timeslot}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column', rowGap:10, flex:1}}>
                        <Text style={{color:'#374B4C',  fontSize:14, fontFamily:'Montserrat_600SemiBold', opacity:0.9}}>Message :</Text>
                        <View style={{width:'100%', flex:1, justifyContent:'center', alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
                            <Text style={{fontSize:12, paddingHorizontal:12, paddingVertical:16, lineHeight:18, fontFamily:'Montserrat_400Regular', color:'#374B4C'}}>{appointment.message}</Text>
                        </View>
                    </View>

                    <Pressable style={{overflow:'visible', marginTop:10, }}>
                        <LinearGradient style={{ alignSelf:'center', width:'60%', borderRadius:6, height:40, justifyContent:'center', alignItems:'center', shadowColor:'#FF0000FF', elevation:8}} colors={['#D88499','#D8394D']}>
                            <Text style={{color:'#FFFFFFFF', fontSize:14, fontFamily:'Montserrat_700Bold',}}>Cancel this Appointment</Text>
                        </LinearGradient>
                    </Pressable>
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
        borderColor:'#fff',
    }
})