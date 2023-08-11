import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Ratings from './Ratings'

type Props = {}

const SpecialistCard = (props: Props) => {
  return (
    <View style={styles.card}>
        <Image style={{opacity:0.93, alignSelf:'flex-end', marginLeft:10}} source={require('../assets/avatars/oliver_avatar.png')}/>
        <View style={styles.infosContainer}>
          <Text style={{color:'#374B4C', fontSize: 16, marginTop:24}}>Dr Oliver SYKES</Text>
          <Text style={{color:'rgba(137, 164, 171, 0.9)', fontSize: 12, marginTop:6}}>HEAR SURGEON</Text>
          <View style={{flexDirection:'row', alignItems:'center', columnGap:8, marginTop:6}}>
            <Ratings rating={5}/>
            <Text style={{color:'rgba(137, 164, 171, 0.9)', fontSize: 12,}}>(22 Reviews)</Text>
          </View>
          <View style={{flexDirection:'row', columnGap:8, marginTop:20}}>
            <View style={styles.colSlot}>
              <Text style={{fontSize:10, color:'rgba(137, 164, 171, 0.9)'}}>Free Slot</Text><Text style={{fontSize:12, color:'#374B4C', marginTop:8}}>02-18-2022</Text>
            </View>
            <View style={styles.colDistance}>
              <Text style={{fontSize:10, color:'rgba(137, 164, 171, 0.9)'}}>Distance</Text><Text style={{fontSize:12, color:'#374B4C', marginTop:8}}>2 Miles</Text>
            </View>
          </View>
          <Pressable style={styles.appointmentButton}>
              <Text style={{fontSize:12, color:'#fff', marginTop:8}}>Apppointment</Text>
          </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        width:312,
        // can only stack linear-gradients, so needs to convert plain colors into constant linear gradients
        backgroundImage : 'linear-gradient(180deg, rgba(125,215,237,0) 33%, rgba(125,215,237,0.2) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)',
        height:200,
        borderRadius:20,
        boxShadow:'0 8px 16px rgba(35, 190, 227, 0.45), 0 2px 4px rgba(92, 169, 188, 0.15)',
        flexDirection:'row',
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
      backgroundImage: 'linear-gradient(180deg, rgba(46, 174, 204, 0.00) 52.60%, #00A6CD 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 61.46%), linear-gradient(180deg, rgba(35, 190, 227, 0.80) 0%, rgba(35, 190, 227, 0.80) 100%)',
      boxShadow: '0px 8px 16px 0px rgba(57, 197, 230, 0.60)',
      justifyContent:'center',
      alignItems:'center',
      paddingBottom: 12,
      paddingTop: 4,
      marginTop:10,
    }
})

export default SpecialistCard