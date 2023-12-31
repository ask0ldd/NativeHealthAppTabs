import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../../components/Themed';

export default function TabThreeScreen() {
  return (
    <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
      <View style={styles.avatar}>
        <Image source={require('../../assets/avatars/oliver92_avatar.png')}/>
      </View>
      <View style={styles.doctorCallingContainer}>
        <Text style={styles.title}>Dr Oliver Sykes</Text>
        <View style={styles.separatorLine}/>
        <Text style={styles.calling}>Calling...</Text>
      </View>
      <View style={{...styles.iconsRow, marginTop : 64}}>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
      </View>
      <View style={{...styles.iconsRow, marginTop : 16}}>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
          <Image style={{width:64,}} source={require('../../assets/avatars/oliver72_avatar.png')}/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar : {
    borderRadius:6, 
    shadowColor:'#23BEE3', 
    borderWidth:4, 
    borderColor:'#FFFFFFFF', 
    elevation:6, 
    overflow:'hidden',
    marginTop:-48,
  },
  doctorCallingContainer: {
    flexDirection:'column', 
    padding:18, 
    width:'90%', 
    alignItems:'center', 
    borderRadius:6, 
    shadowColor:'#23BEE3', 
    elevation:6, 
    backgroundColor:'#FFFFFFCC',
    marginTop:36,
    rowGap:10,
  },
  title: {
    /*marginTop : 28,*/
    fontSize: 24,
    fontWeight: 'bold',
    color:'#415556',
    fontFamily:'Montserrat_700Bold',
  },
  separatorLine : {
    width: '80%',
    height: 1,
    backgroundColor: '#C0E8EC',
  },
  calling: {
    fontSize : 18,
    color:'#415556',
    fontFamily:'Montserrat_500Medium',
    marginTop: 2,
  },
  iconsRow: {
    flexDirection: 'row',
    columnGap: 24,
    backgroundColor: 'transparent',
  },
  iconContainer:{
    width: 64,
    height: 64,
  },

});
