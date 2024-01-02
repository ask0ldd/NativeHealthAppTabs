import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

type Props = {
    text : string,
    avatarUri : ImageSourcePropType
    firstname : string
}

// const connie = require('../assets/avatars/connie_avatar.png')

const Card = (props: Props) => {

  return (
    <View style={styles.cardContainer}>
      <LinearGradient colors={['#D4F1F8', '#9ACDCF']} style={styles.avatarContainer}>
        <Image style={[styles.avatar, {zIndex:3}]} source={props.avatarUri}/>
        {/*<Image style={styles.avatar} blurRadius={1} source={props.avatarUri}/>*/}
      </LinearGradient>
      <Text style={{textAlign:'center', fontSize:12, color:'#374B4C', fontFamily:'Montserrat_600SemiBold'}}>{props.firstname}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer :{
      flexDirection:'column',
      rowGap:4,
      width:66,
      height:100,
    },
    avatarContainer : {height:66,width:66, backgroundColor:'#fff', padding:20, borderRadius:12,
     overflow:'hidden',
     borderWidth:2,
     borderColor:'#fff',
     /*elevation:10,
     shadowColor: '#ff3333',
     shadowOffset: {width: 4, height: 4},
     shadowOpacity: 0.8,
     shadowRadius: 8,*/
    },
    avatar : {position:'absolute',height:66,width:66, top:0, left:0,
    },
})