import { LinearGradient } from "expo-linear-gradient"
import { Image, StyleSheet, ImageSourcePropType} from 'react-native';
import { Text, View } from '../components/Themed';
import React from "react";

function Document({iconFileName, documentName, date} : IProps){

    const icons : { [key: string]: ImageSourcePropType } = {
        flask : require(`../assets/icons/flask.png`)
    }

    return(
        <View style={styles.docRow}>
        <LinearGradient colors={['#FFFFFFFF', '#FFFFFFAA']} style={styles.docRowIconContainer}><Image style={styles.docRowIcon} source={icons[iconFileName]}/></LinearGradient>
        <LinearGradient colors={['#FFFFFFFF', '#FFFFFFAA']} style={styles.docRowDatasContainer}>
          <Text style={{fontSize:12, fontFamily:'Montserrat_500Medium',}}>{date}</Text>
          <Text style={{fontSize:12, fontFamily:'Montserrat_500Medium',}}>{documentName}</Text>
          <Image source={require('../assets/icons/arrow.png')}/>
        </LinearGradient>
      </View> 
    )
}

export default Document

interface IProps{
    iconFileName : string
    documentName : string
    date : string
}

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