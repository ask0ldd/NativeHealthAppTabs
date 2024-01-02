import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

type Props = {
    speciality : string
    specialityIconUri : ImageSourcePropType
    setSpeciality : () => void
    active ?: boolean
}

const Speciality = (props: Props) => {
  return (
    <Pressable style={styles.specialityContainer} onPress={() => props.setSpeciality()}>
        <View style={props.active !== false ? styles.specialityActiveButton : styles.specialityButton}>
            <LinearGradient style={{width:64, height:64, justifyContent:'center', alignItems:'center'}} colors={props.active !== false ? ['#2EA7C3FF', '#417C8AFF'] : ['#ffffff44', 'transparent']} start={{x:1, y:0}} end={{x:0.2, y:0.8}}>
                <Image style={styles.icon} source={props.specialityIconUri}/>
            </LinearGradient>
        </View>
        <Text style={{textAlign:'center', fontSize:12, color:'#374B4C', fontFamily:'Montserrat_600SemiBold'}}>
            {props.speciality}
        </Text>
    </Pressable>
  )
}

export default Speciality

const styles = StyleSheet.create({
    specialityContainer:{
        width:64,
        flexDirection:'column',
        rowGap:4,
    },
    specialityButton:{
        height:64,
        width:64,
        borderRadius:10,
        backgroundColor:'rgba(35, 190, 227, 0.6)',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#fff',
        shadowColor:'#39C5E6ff',
        elevation:10,
        overflow:'hidden',
        // transform: [{rotateZ: '30deg'}],
    },
    specialityActiveButton:{
        height:64,
        width:64,
        borderRadius:10,
        backgroundColor:'#F7FDFE',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        // borderColor:'#546666',
        borderColor:'#FFFFFFFF',
        shadowColor:'#39C5E6ff',
        elevation:10,
        overflow:'hidden',
        // transform: [{rotateZ: '30deg'}],
    },
    icon : {height:64, width:64, zIndex:3},
})