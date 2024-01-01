import { Image, Pressable, Text, View, StyleSheet } from 'react-native'

function OpenAppointment({date, timeslot, practician, address, city, state} : IProps){

    return(
        <Pressable style={{flexDirection:'row', rowGap:6, padding:18, width:'100%', flex:1, alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
            <View style={{borderRadius:6, shadowColor:'#23BEE3', borderWidth:3, borderColor:'#FFFFFFFF', elevation:6, overflow:'hidden'}}>
            <Image source={require('../assets/avatars/oliver72_avatar.png')}/>
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
    date : string
    timeslot : string
    practician : string
    address : string
    city : string
    state : string
}

export default OpenAppointment