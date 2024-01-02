import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import OpenAppointment from '../../components/OpenAppointment';
import ClosedAppointment from '../../components/ClosedAppointment';
import React from 'react';

export default function TabTwoScreen() {

  // const [activeAppointment, setActiveAppointment] = useState<number>(0)

  const [appointmentsList, setAppointmentsList] = useState<Array<IAppointment>>(appointmentsListInit)

  return (
    <ScrollView>
      <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
        <Image style={{position:'absolute', top:90, left:-120,}} source={require('../../assets/bgpattern.png')}/>
        <View style={styles.appointmentsContainer}>
          <View style={{flexDirection:'column', rowGap:10}}>
              <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Next Appointments :</Text>
          </View>

          {
            appointmentsList.map((appointment, index) => 
                appointment.open ? 
                <OpenAppointment key={'app'+index} picture={appointment.picture} practician={appointment.practician} timeslot={appointment.timeslot} city={appointment.city}
                state={appointment.state} date={appointment.date} address={appointment.address}/> 
                :
                <ClosedAppointment key={'app'+index} practician={appointment.practician} date={appointment.date} setAppointmentsList={setAppointmentsList}
                appointmentId={index} />)
          }

          {/*
          <OpenAppointment practician={appointmentsList[0].practician} timeslot={appointmentsList[0].timeslot} city={appointmentsList[0].city}
          state={appointmentsList[0].state} date={appointmentsList[0].date} address={appointmentsList[0].address}/>

          <ClosedAppointment practician={appointmentsList[1].practician} date={appointmentsList[1].date} setActiveAppointment={setActiveAppointment}
          appointmentId={1} />
          */}

        </View>        
      </LinearGradient>

    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    minHeight:700,
  },
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
  appointmentsContainer : {
    flexDirection:'column', paddingHorizontal:16, rowGap:20, marginTop:20, paddingBottom:20
  },
});

const appointmentsListInit : Array<IAppointment> = [
  {
    picture : "oliver",
    practician : "Oliver Sykes",
    date : "Thu, May 2 2023",
    timeslot : "15h00 - 16h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : true,
  },
  {
    picture : "connie",
    practician : "Connie Walter",
    date : "Thu, May 3 2023",
    timeslot : "13h00 - 14h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
  {
    picture : "olga",
    practician : "Olga Abramovic",
    date : "Tue, May 10 2023",
    timeslot : "11h00 - 12h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
  {
    picture : "connie",
    practician : "Connie Walter",
    date : "Thu, May 12 2023",
    timeslot : "13h00 - 14h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
  {
    picture : "henry",
    practician : "Henry Gaynes",
    date : "Wed, May 22 2023",
    timeslot : "11h00 - 12h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
]

export interface IAppointment {
  picture : string,
  practician : string,
  date : string,
  timeslot : string,
  address : string,
  city : string,
  state : string,
  open : boolean,
}
