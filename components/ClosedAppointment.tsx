import { Image, Pressable, Text, View, StyleSheet } from 'react-native'

function ClosedAppointment({appointmentId, setActiveAppointment} : IProps){

    return(
        <Pressable onPress={() => { setActiveAppointment(appointmentId) }} style={styles.closedAppointmentContainer}>
            <Text style={styles.closedAppointmentName}>Dr Connie Walter</Text>
            <Text style={styles.closedAppointmentName}>02-27-2023</Text>
            <Image source={require('../../assets/icons/arrow.png')}/>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    closedAppointmentContainer : {
        flexDirection:'row', 
        paddingHorizontal:15, 
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
      closedAppointmentName : {
        color:'#374B4C',  
        fontSize:14, 
        fontFamily:'Montserrat_600SemiBold', 
        opacity:0.9
      },
});

interface IProps{
    appointmentId: number
    setActiveAppointment : (activeAppointment : number) => void
}

export default ClosedAppointment