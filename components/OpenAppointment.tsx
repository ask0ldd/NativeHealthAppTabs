import { Image, Pressable, Text, View, StyleSheet } from 'react-native'

function OpenAppointment(){

    return(
        <View style={styles.openAppointmentContainer}>
            <View style={{flexDirection:'column', rowGap:10}}>
                <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Next Appointments :</Text>
                <Pressable style={{flexDirection:'row', marginTop:10, rowGap:6, padding:18, width:'100%', flex:1, alignItems:'center', borderRadius:6, shadowColor:'#23BEE3', elevation:6, backgroundColor:'#FFFFFFCC'}}>
                    <View style={{borderRadius:6, shadowColor:'#23BEE3', borderWidth:3, borderColor:'#FFFFFFFF', elevation:6, overflow:'hidden'}}>
                    <Image source={require('../../assets/avatars/oliver72_avatar.png')}/>
                    </View>
                    <View style={{flexDirection:'column', rowGap:5, marginLeft:16}}>
                        <Text style={{color:'#374B4C', fontSize:16, fontFamily:'Montserrat_700Bold',}}>Dr Oliver Sykes</Text>
                        <Text style={{color:'#374B4C', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_500Medium',}}>Wed, 22 May 2023 × 15h00 - 16h00</Text>
                        <View style={{flexDirection:'row', columnGap:20, marginTop:2}}>
                        <View>
                            <Text style={{color:'#89A4AB', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_500Medium',}}>9500 Euclid Avenue,</Text>
                            <Text style={{color:'#89A4AB', opacity:0.9,  fontSize:12, fontFamily:'Montserrat_500Medium',}}>Cleveland, OH</Text>
                        </View>
                        <Image style={{alignSelf:'center'}} source={require('../../assets/icons/localisation_icon.png')}/>
                        </View>
                    </View>
                    <Image style={{marginLeft:'auto'}} source={require('../../assets/icons/arrow.png')}/>
                </Pressable>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    openAppointmentContainer : {
      flexDirection:'column', paddingHorizontal:16, rowGap:20, marginTop:20, paddingBottom:20
    },
});

export default OpenAppointment