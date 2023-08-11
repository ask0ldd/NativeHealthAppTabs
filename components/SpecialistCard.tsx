import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Ratings from './Ratings'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {}

// <View style={{height:200, borderRadius:20, elevation:0, shadowColor:'#5CA9BCFF', backgroundColor:'red'}}>

const SpecialistCard = (props: Props) => {
  return (
    <LinearGradient colors={['#FCFEFE', '#E2F5F9']} style={styles.card}>
        <Image style={{position: 'absolute', left: '35%', top:0 }} source={require('../assets/heartbgpattern.png')} />
        <View style={{position:'absolute', borderColor:'#10A5C7', borderWidth:1, borderStyle:'dashed', top:'50%', right:0, width:'80%', opacity:0.3}}/>
        <Image style={{opacity: 0.93, alignSelf: 'flex-end', marginLeft: 10}} source={require('../assets/avatars/oliver_avatar.png')}/>
        <View style={styles.infosContainer}>
          <Text style={{color: '#374B4C', fontSize: 16, marginTop: 24}}>Dr Oliver SYKES</Text>
          <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 12, marginTop: 6}}>HEAR SURGEON</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 8, marginTop: 6}}>
            <Ratings rating={5}/>
            <Text style={{color: 'rgba(137, 164, 171, 0.9)', fontSize: 12,}}>(22 Reviews)</Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 8, marginTop: 20}}>
            <View style={styles.colSlot}>
              <Text style={{fontSize: 10, color: 'rgba(137, 164, 171, 0.9)'}}>Free Slot</Text><Text style={{fontSize: 12, color: '#374B4C', marginTop: 8}}>02-18-2022</Text>
            </View>
            <View style={styles.colDistance}>
              <Text style={{fontSize: 10, color: 'rgba(137, 164, 171, 0.9)'}}>Distance</Text><Text style={{fontSize: 12, color: '#374B4C', marginTop: 8}}>2 Miles</Text>
            </View>
          </View>
          <Pressable style={styles.appointmentButton}>
            <LinearGradient style={styles.appointmentButtonGradient} colors={['#6BD3EB', '#0FACD0']}>
              <Text style={{fontSize: 12, color: '#fff'}}>Apppointment</Text>
            </LinearGradient>
          </Pressable>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    card : {
        width:312,
        height:200,
        borderRadius:20,
        flexDirection:'row',
        overflow:'hidden',
        shadowColor:'#23BEE3',
        // backgroundColor:'#ffffffaa',
        elevation:12,
        backgroundColor:'red',
        shadowOpacity:1,
    },
    infosContainer : {
      height:'100%',
      flexDirection : 'column',
      marginLeft : 8,
    },
    colSlot:{
      flexDirection : 'column',
    },
    colDistance:{
      flexDirection : 'column',
    },
    appointmentButton : {
      borderRadius: 6,
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      shadowColor:'#23BEE3',
      elevation:20,
    },
    appointmentButtonGradient : {
      height:36, 
      width:144,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:6,
    }
})

export default SpecialistCard