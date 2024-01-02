import { Image, Pressable, Text, View, StyleSheet } from 'react-native'
import { IAppointment } from '../app/(tabs)/appointments';
import React from 'react';

function ClosedAppointment({appointmentId, practician, date, setAppointmentsList} : IProps){

    function switchThisAppointmentToOpen(appointmentid : number){
        setAppointmentsList(prevAppointmentList => {
            // close all appointments
            const newAppointmentList = prevAppointmentList.map(appointment => ({...appointment, open : false}))
            newAppointmentList[appointmentid].open = true
            return newAppointmentList
        })
    }

    return(
        <Pressable onPress={() => switchThisAppointmentToOpen(appointmentId)} style={[styles.closedAppointmentContainer, {height:50}]}>
            <Text style={styles.closedAppointmentName}>{practician}</Text>
            <Text style={styles.closedAppointmentName}>{date}</Text>
            <Image source={require('../assets/icons/arrow.png')}/>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    closedAppointmentContainer : {
        flexDirection:'row', 
        paddingHorizontal:15, 
        rowGap:6, 
        width:'100%', 
        flex:1, 
        justifyContent:'space-between', 
        alignItems:'center', 
        borderRadius:6, 
        shadowColor:'#23BEE3', 
        elevation:6, 
        backgroundColor:'#FFFFFFCC',
      },
      closedAppointmentName : {
        color:'#374B4C',  
        fontSize:14, 
        fontFamily:'Montserrat_600SemiBold', 
        opacity:0.9
      },
});

interface IProps{
    appointmentId: number
    practician : string
    date : string
    setAppointmentsList : React.Dispatch<React.SetStateAction<IAppointment[]>>
}

export default ClosedAppointment