import { LinearGradient } from "expo-linear-gradient"
import { Image, ScrollView, StyleSheet, Pressable, TextInput, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';

function Document(){

    return(
        <View style={styles.docRow}>
        <LinearGradient colors={['#FFFFFFFF', '#FFFFFFAA']} style={styles.docRowIconContainer}><Image style={styles.docRowIcon} source={require('../../assets/icons/flask.png')}/></LinearGradient>
        <LinearGradient colors={['#FFFFFFFF', '#FFFFFFAA']} style={styles.docRowDatasContainer}>
          <Text style={{fontSize:12, fontFamily:'Montserrat_500Medium',}}>15-08-2023</Text>
          <Text style={{fontSize:12, fontFamily:'Montserrat_500Medium',}}>COVID-19 Prescription</Text>
          <Image source={require('../../assets/icons/arrow.png')}/>
        </LinearGradient>
      </View> 
    )
}

export default Document

const styles = StyleSheet.create({
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