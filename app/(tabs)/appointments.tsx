import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import OpenAppointment from '../../components/OpenAppointment';
import ClosedAppointment from '../../components/ClosedAppointment';

export default function TabTwoScreen() {

  const [activeAppointment, setActiveAppointment] = useState<number>(0)

  const [appointmentsList, setAppointmentsList] = useState<Array<IAppointment>>(appointmentsListInit)

  return (
    <ScrollView>
      <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
        <View style={styles.appointmentsContainer}>
          <View style={{flexDirection:'column', rowGap:10}}>
              <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Next Appointments :</Text>
          </View>

          <OpenAppointment practician={appointmentsList[0].practician} timeslot={appointmentsList[0].timeslot} city={appointmentsList[0].city}
          state={appointmentsList[0].state} date={appointmentsList[0].date} address={appointmentsList[0].address}/>

          <ClosedAppointment practician={appointmentsList[1].practician} date={appointmentsList[1].date} setActiveAppointment={setActiveAppointment}
          appointmentId={1} />

          {/*<Pressable onPress={() => { setActiveAppointment(1) }} style={[styles.closedAppointmentContainer, {height : activeAppointment === 1 ? 100 : 50}]}>
            <Text style={styles.closedAppointmentName}>Dr Connie Walter</Text>
            <Text style={styles.closedAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </Pressable>

          <Pressable onPress={() => { setActiveAppointment(2) }} style={[styles.closedAppointmentContainer, {height : activeAppointment === 2 ? 100 : 50}]}>
            <Text style={styles.closedAppointmentName}>Dr Olga Abramovic</Text>
            <Text style={styles.closedAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </Pressable>

          <Pressable onPress={() => { setActiveAppointment(3) }} style={[styles.closedAppointmentContainer, {height : activeAppointment === 3 ? 100 : 50}]}>
            <Text style={styles.closedAppointmentName}>Dr Connie Walter</Text>
            <Text style={styles.closedAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </Pressable>

          <Pressable onPress={() => { setActiveAppointment(4) }} style={[styles.closedAppointmentContainer, {height : activeAppointment === 4 ? 100 : 50}]}>
            <Text style={styles.closedAppointmentName}>Dr Andy Gaynes</Text>
            <Text style={styles.closedAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </Pressable>*/}

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
    practician : "Oliver Sykes",
    date : "Wed, May 22 2023",
    timeslot : "15h00 - 16h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : true,
  },
  {
    practician : "Connie Walter",
    date : "Thu, May 12 2023",
    timeslot : "13h00 - 14h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
  {
    practician : "Olga Abramovic",
    date : "Tue, May 10 2023",
    timeslot : "11h00 - 12h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
  {
    practician : "Connie Walter",
    date : "Thu, May 3 2023",
    timeslot : "13h00 - 14h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
  {
    practician : "Andy Gaynes",
    date : "Thu, May 2 2023",
    timeslot : "11h00 - 12h00",
    address : "9500 Euclid Avenue",
    city : "Cleveland",
    state : "OH",
    open : false,
  },
]

interface IAppointment {
  practician : string,
  date : string,
  timeslot : string,
  address : string,
  city : string,
  state : string,
  open : boolean,
}
