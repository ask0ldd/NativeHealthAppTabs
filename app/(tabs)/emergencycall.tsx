import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image source={require('../../assets/avatars/oliver72_avatar.png')}/>
      </View>
      <Text style={styles.title}>Dr Oliver SYKES</Text>
      <Text style={styles.calling}>Calling...</Text>
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
    </View>
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
    borderWidth:3, 
    borderColor:'#FFFFFFFF', 
    elevation:6, 
    overflow:'hidden',
    marginTop:-48,
  },
  title: {
    marginTop : 28,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#415556',
    fontFamily:'Montserrat_700Bold',
  },
  calling: {
    fontSize : 20,
    marginTop: 12,
    color:'#415556',
    fontFamily:'Montserrat_500Medium',
  },
  iconsRow: {
    flexDirection: 'row',
    columnGap: 24,
  },
  iconContainer:{
    width: 64,
    height: 64,
  },

});
