import { Image, ScrollView, StyleSheet, Pressable, TextInput, Dimensions} from 'react-native';

import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient'
// import { Link } from 'expo-router';
import React, { useContext, useMemo, useRef, useState } from 'react';
import Ratings from '../../components/Ratings';
import DateButton from '../../components/DateButton';
import TimeSlotButton from '../../components/TimeSlotButton';
import { Href, useRouter } from 'expo-router';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Document from '../../components/Document';

import { BookedAppointmentContext } from '../context/BookedAppointmentContext';

const Timeslots : Array<string> = ["09h00 AM", "10h00 AM", "11h00 AM", "13h00 PM", "14h00 PM", "15h00 PM", "16h00 PM", "17h00 PM", "18h00 PM"]
const MonthsList : Array<string> = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const FullMonthsList : Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function AppointmentScreen() { // should pass practician infos

  const router = useRouter()

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

  const scrollViewDate = useRef<ScrollView|null>(null)
  const scrollViewTimeSlot = useRef<ScrollView|null>(null)

  const currentDate = useMemo <Date>(() => new Date(), [])
  const currentMonth = useMemo <string>(() => currentDate.toLocaleString('en-US', { month: 'short' }).toLowerCase(), [currentDate])
  const currentYear = useMemo <number>(() => currentDate.getFullYear(), [])
  
  const [ activeDate, _setActiveDate ] = useState<IActiveDate>({day : currentDate.getDay(), month : currentDate.toLocaleString('en-US', { month: 'short' }).toLowerCase()}) // curent date
  const activeDateRef = useRef(activeDate)
  function setActiveDate(activeDate : IActiveDate){
    _setActiveDate(activeDate)
    activeDateRef.current = activeDate
  }
  
  const [ activeTimeSlot, _setActiveTimeSlot ] = useState<string>(Timeslots[3])
  const activeTimeSlotRef = useRef(activeTimeSlot)
  function setActiveTimeSlot(slot : string){
    _setActiveTimeSlot(slot)
    activeTimeSlotRef.current = slot
  }

  
  const [ bookingMessage, _setBookingMessage ] = useState<string>()
  const bookingMessageRef = useRef("")
  function setBookingMessage(text : string){
    _setBookingMessage(text)
    bookingMessageRef.current = text
  }

  const { bookedAppointment, setBookedAppointment} = useContext(BookedAppointmentContext)
  
  function updateContextnPushModal(){
    if(!fieldsValidation) return
    console.log(activeDateRef.current.month)
    const monthIndex = MonthsList.findIndex(el => el == activeDateRef.current.month)
    console.log(monthIndex)
    setBookedAppointment({
        practitioner : "Dr Oliver Sykes",
        specialty : "HEART SURGEON",
        date : `Monday, ${FullMonthsList[monthIndex]} ${activeDateRef.current.day}, ${currentYear}`,
        timeslot : activeTimeSlotRef.current,
        message : bookingMessageRef.current,
    })
    router.push('/modals/successfullbooking') // push with parameters
  }

  function fieldsValidation(){
    return Timeslots.includes(activeTimeSlotRef.current) && !isNaN(activeDateRef.current.day) && MonthsList.includes(activeDateRef.current.month.toLowerCase())
    // return true
  }

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
        <Image style={{position:'absolute', top:110, left:-120,}} source={require('../../assets/bgpattern.png')}/>
        <View style={styles.buttonsnCardContainer}>
          <View style={styles.buttonsContainer}>
              <Pressable style={styles.buttons} onPress={router.back}>
                <Image style={{width:42, height:42}} source={require('../../assets/buttons/back.png')}/>
              </Pressable>
              <View style={[styles.blueButtons, {marginTop:'auto'}]}>
                <LinearGradient style={{width:42, height:42, justifyContent:'center', alignItems:'center'}} colors={['#ffffff44', 'transparent']} start={{x:1, y:0}} end={{x:0.2, y:0.8}}>
                  <Image style={{marginLeft:-1,}} source={require('../../assets/icons/phone.png')}/>
                </LinearGradient>
              </View>
              <Pressable style={styles.blueButtons}>
                <LinearGradient style={{width:42, height:42, justifyContent:'center', alignItems:'center'}} colors={['#ffffff44', 'transparent']} start={{x:1, y:0}} end={{x:0.2, y:0.8}}>
                  <Image style={{marginTop:2}} source={require('../../assets/icons/chat.png')}/>
                </LinearGradient>
              </Pressable>
          </View>
          <LinearGradient colors={['#FCFEFE', '#E2F5F9']} style={styles.card}>
              <Image style={{position: 'absolute', left: '35%', top:0 }} source={require('../../assets/heartbgpattern.png')} />
              <View style={{position:'absolute', borderColor:'#10A5C7', borderTopWidth:0, borderBottomWidth:1, borderStyle:'dashed', top:'50%', width:'100%', opacity:0.3}}/>
              <Image style={{opacity: 0.93, position: 'absolute', alignSelf: 'flex-end', right:16, bottom:0}} source={require('../../assets/avatars/oliver_avatar.png')}/>
              <Text style={{color: '#374B4C', fontSize: 16, marginTop: 14, marginLeft:18, fontFamily:'Montserrat_700Bold'}}>Dr Oliver SYKES</Text>
              <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 12, marginTop: 8, marginLeft:18, fontFamily:'Montserrat_600SemiBold'}}>HEAR SURGEON</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 8, marginTop: 14, backgroundColor:'#00000000', marginLeft:18}}>
                  <Ratings rating={5}/>
                  <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 10, fontFamily:'Montserrat_500Medium'}}>(22 Reviews)</Text>
              </View>
              <Image style={{marginTop:33, marginLeft:18}} source={require('../../assets/mayo_blason.png')}/>
              <View style={{flexDirection:'row', backgroundColor:'#00000000', marginTop:14, marginLeft:18, alignItems:'center'}}>
                  <Image source={require('../../assets/icons/localisation_icon.png')}/>
                  <View style={{flexDirection:'column', marginLeft:16, backgroundColor:'#00000000'}}>
                      <Text style={{fontSize:10, color:'#89A4AB', fontFamily:'Montserrat_500Medium'}}>9500 Euclid Avenue,</Text>
                      <Text style={{fontSize:10, color:'#89A4AB', fontFamily:'Montserrat_500Medium'}}>Cleveland, OH</Text>
                  </View>
              </View>
          </LinearGradient>
        </View>
        <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
            <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Make an Appointment</Text>
        </View>

        <View style={{height:92, marginTop:20, overflow:'visible', backgroundColor:'#00000000'}}>
          <ScrollView ref={scrollViewDate} horizontal={true} contentContainerStyle={{height:92, overflow:'visible', columnGap:16, paddingHorizontal:16, }}>
              {Array.from({ length: 31 }, (_, index) => (<DateButton key={'dbkey'+index} screenWidth={screenWidth} scrollView={scrollViewDate} activeDate={activeDate} setActiveDate={setActiveDate} month={currentMonth} day={index+1} /*active={index+1 === activeDate.day && currentMonth === activeDate.month ? true : false}*//>))}
          </ScrollView>
        </View>

        <View style={{height:56, marginTop:5, overflow:'visible', backgroundColor:'#00000000'}}>
          <ScrollView ref={scrollViewTimeSlot} horizontal={true} contentContainerStyle={{height:56, overflow:'visible', columnGap:16, paddingHorizontal:16, }}>
              {Timeslots.map((slot, index) => (<TimeSlotButton activeTimeSlot={activeTimeSlot} timeSlotsList={Timeslots} scrollView={scrollViewTimeSlot} setActiveTimeSlot={setActiveTimeSlot} key={'tskey'+index} slot={slot}/>))}
          </ScrollView>
        </View>

        <TextInput style={styles.bookingMessageInput} multiline={true} numberOfLines={8} onChangeText={(text) => setBookingMessage(text)} value={bookingMessage} maxLength={600}/>

        <Pressable style={styles.bookingButton} onPress={updateContextnPushModal}>
              <LinearGradient style={styles.bookingButtonGradient} colors={['#6BD3EB', '#0FACD0']}>
                <Text style={{fontSize: 12, color: '#fff', fontFamily:'Montserrat_700Bold', marginTop:-1}}>Book this Appointment</Text>
              </LinearGradient>
        </Pressable>

        <View style={{flexDirection:'row', marginTop:35, marginBottom:10, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
            <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Your Documents</Text>
            <Text style={{color:'#29AAC9', fontSize:14, opacity:0.9, textDecorationStyle:'solid', textDecorationLine:'underline', fontFamily:'Montserrat_600SemiBold'}}>See More</Text>
        </View>

        <Document documentName='COVID-19 Prescription' date='15-08-2023' iconFileName='flask'/>
        <Document documentName='COVID-19 Prescription' date='15-08-2023' iconFileName='flask'/>
        <Document documentName='COVID-19 Prescription' date='15-08-2023' iconFileName='flask'/>

      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingBottom:40
  },
  buttonsnCardContainer: {
    flexDirection:'row',
    height:250,
    width:'100%',
    columnGap:16,
    paddingHorizontal:16,
    backgroundColor:'#00000000',
    paddingTop:20,
    paddingBottom:30,
    overflow:'visible',
  },
  card:{
    flex:1,
    height:200,
    width:'100%',
    borderRadius:20,
    overflow:'hidden',
    shadowColor:'#23BEE3',
    elevation:12,
    shadowOpacity:1,
  },
  buttonsContainer:{
    height:200,
    width:42,
    flexDirection:'column',
    rowGap:16,
    backgroundColor:'#00000000',
  },
  buttons:{
    height:42,
    width:42,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFFFF',
    borderRadius:8,
    shadowColor:'#23BEE3',
    elevation:4,
    shadowOpacity:1,
    overflow:'hidden',
  },
  blueButtons:{
    height:42,
    width:42,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    elevation:10,
    shadowOpacity:1,
    backgroundColor:'rgba(35, 190, 227, 0.6)',
    borderWidth:1,
    borderColor:'#fff',
    shadowColor:'#39C5E6ff',
    overflow:'hidden',
  },
  bookingMessageInput:{
    width:'80%', 
    alignSelf:'center',
    borderWidth:1,
    borderColor:'#A5E3ECFF',
    backgroundColor:'#FAFDFEFF',
    borderRadius:10,
    marginTop:10,
    paddingHorizontal:12,
    paddingVertical:8,
    textAlignVertical: 'top',
  },
  bookingButton : {
    borderRadius: 6,
    justifyContent:'center',
    alignItems:'center',
    marginTop:25,
    shadowColor:'#23BEE3',
    elevation:10,
    width:200,
    alignSelf:'center',
    backgroundColor:'#00000000'
  },
  bookingButtonGradient : {
    height:36, 
    paddingHorizontal:16,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
  },
  docRow:{
    height:36,
    flexDirection:'row',
    justifyContent:'space-between',
    columnGap:12,
    paddingHorizontal:18,
    backgroundColor:'#00000000',
    marginTop:18,
  },
  docRowIconContainer:{
    height:36,
    width:36,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    shadowColor:'#23BEE3',
    elevation:4,
  },
  docRowIcon:{
    height:36,
    width:36,
    justifyContent:'center',
    alignItems:'center',
  },
  docRowDatasContainer:{
    height:36,
    flex:1,
    justifyContent:'space-between',
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:6,
    shadowColor:'#23BEE3',
    elevation:4,
  }
})

export interface IActiveDate{
  day:number
  month:string
}

/*
  <Link href="/modals/successfullbooking" asChild></Link>
*/