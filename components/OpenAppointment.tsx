import React from 'react';
import { Image, Pressable, Text, View, StyleSheet, ImageSourcePropType } from 'react-native'

function OpenAppointment({picture, date, timeslot, practician, address, city, state} : IProps){

    // !!! usememo
    const pics : Record<string, ImageSourcePropType> = {
        oliver : require('../assets/avatars/oliver72_avatar.png'),
        connie : require('../assets/avatars/connie72_avatar.png'),
        henry : require('../assets/avatars/henry72_avatar.png'),
        olga : require('../assets/avatars/olga72_avatar.png'),
    }

    return(
        <Pressable style={{flexDirection:'row', rowGap:6, padding:18, width:'100%', flex:1, alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
            <View style={{borderRadius:6, shadowColor:'#23BEE3', borderWidth:3, borderColor:'#FFFFFFFF', elevation:6, overflow:'hidden'}}>
            <Image source={pics[picture]}/>
            </View>
            <View style={{flexDirection:'column', rowGap:5, marginLeft:16}}>
                <Text style={{color:'#374B4C', fontSize:16, fontFamily:'Montserrat_700Bold',}}>Dr {practician}</Text>
                <Text style={{color:'#374B4C', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_500Medium',}}>{date} × {timeslot}</Text>
                <View style={{flexDirection:'row', columnGap:20, marginTop:2}}>
                <View>
                    <Text style={{color:'#89A4AB', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_500Medium',}}>{address},</Text>
                    <Text style={{color:'#89A4AB', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_500Medium',}}>{city}, {state}</Text>
                </View>
                <Image style={{alignSelf:'center'}} source={require('../assets/icons/localisation_icon.png')}/>
                </View>
            </View>
            <Image style={{marginLeft:'auto'}} source={require('../assets/icons/arrow.png')}/>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    openAppointmentContainer : {
      flexDirection:'column', paddingHorizontal:16, rowGap:20, marginTop:20, paddingBottom:20
    },
});

interface IProps{
    picture : string
    date : string
    timeslot : string
    practician : string
    address : string
    city : string
    state : string
}

export default OpenAppointment