import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
        <View style={{flexDirection:'column', paddingHorizontal:16, rowGap:20, marginTop:20, paddingBottom:20}}>
          <View style={{flexDirection:'column', rowGap:10}}>
              <Text style={{color:'#374B4C',  fontSize:14, fontFamily:'Montserrat_600SemiBold', opacity:0.9}}>Next Appointments :</Text>
              <View style={{flexDirection:'row', rowGap:6, padding:18, width:'100%', flex:1, justifyContent:'space-between', alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
                  <View style={{borderRadius:6, shadowColor:'#23BEE3', borderWidth:3, borderColor:'#FFFFFFFF', elevation:6, overflow:'hidden'}}>
                    <Image source={require('../../assets/avatars/oliver72_avatar.png')}/>
                  </View>
                  <View style={{flexDirection:'column', rowGap:5}}>
                      <Text style={{color:'#374B4C', fontSize:16, fontFamily:'Montserrat_700Bold',}}>Dr Oliver Sykes</Text>
                      <Text style={{color:'#89A4AB', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_600SemiBold',}}>15h00 - 16h00 : Wed, 22 May 2023</Text>
                      <Text style={{color:'#89A4AB', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_600SemiBold',}}>9500 Euclid Avenue,</Text>
                  </View>
                  <Image source={require('../../assets/icons/arrow.png')}/>
              </View>
          </View>
          <View style={styles.smallAppointmentContainer}>
            <Text style={styles.smallAppointmentName}>Dr Connie Walter</Text>
            <Text style={styles.smallAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </View>
          <View style={styles.smallAppointmentContainer}>
            <Text style={styles.smallAppointmentName}>Dr Olga Abramovic</Text>
            <Text style={styles.smallAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </View>
          <View style={styles.smallAppointmentContainer}>
            <Text style={styles.smallAppointmentName}>Dr Connie Walter</Text>
            <Text style={styles.smallAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </View>
          <View style={styles.smallAppointmentContainer}>
            <Text style={styles.smallAppointmentName}>Dr Andy Gaynes</Text>
            <Text style={styles.smallAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
          </View>
        </View>        
      </LinearGradient>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  smallAppointmentContainer : {
    flexDirection:'row', 
    paddingHorizontal:15, 
    height:50, 
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
  smallAppointmentName : {
    color:'#374B4C',  
    fontSize:14, 
    fontFamily:'Montserrat_600SemiBold', 
    opacity:0.9
  }
});
