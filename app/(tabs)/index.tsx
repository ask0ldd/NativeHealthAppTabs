import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Card from '../../components/Card';
import { LinearGradient } from 'expo-linear-gradient'
import Speciality from '../../components/Speciality';

export default function TabOneScreen() {
  return (
    <LinearGradient colors={['#B9EFF3','#EDF5F7']}style={styles.container}>
      <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
          <Text style={{color:'#415556', fontSize:20}}>Your Practitioners</Text>
          <Text style={{color:'#29AAC9', fontSize:14, opacity:0.9, textDecorationStyle:'solid', textDecorationLine:'underline'}}>See More</Text>
      </View>
      <View style={styles.practitionersContainer}>
          <ScrollView horizontal={true} contentContainerStyle={{columnGap: 16, paddingLeft:16, paddingRight:16, paddingBottom:20, backgroundColor:'#00000000'}}>
            <Card text={'aaa'} firstname="Connie" avatarUri={require('../../assets/avatars/connie_avatar.png')}/>
            <Card text={'bbb'} firstname="Olga" avatarUri={require('../../assets/avatars/olga_avatar.png')}/>
            <Card text={'ccc'} firstname="Usman" avatarUri={require('../../assets/avatars/usman_avatar.png')}/>
            <Card text={'ddd'} firstname="Henry" avatarUri={require('../../assets/avatars/henry_avatar.png')}/>
            <Card text={'eee'} firstname="Masud" avatarUri={require('../../assets/avatars/masud_avatar.png')}/>
            <Card text={'ddd'} firstname="Olga" avatarUri={require('../../assets/avatars/olga_avatar.png')}/>
          </ScrollView>
      </View>
      <View style={{flexDirection:'row', marginTop:30, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
          <Text style={{color:'#415556', fontSize:20}}>Specialists around You</Text>
      </View>
      <View style={styles.specialistsContainer}>
          <ScrollView horizontal={true} contentContainerStyle={{columnGap: 16, paddingHorizontal:16, paddingBottom:20}}>
            <Speciality speciality="General" specialityIconUri={require('../../assets/icons/general.png')}/>
            <Speciality speciality="Dental" specialityIconUri={require('../../assets/icons/tooth.png')}/>
            <Speciality speciality="Cardio" specialityIconUri={require('../../assets/icons/cardiac.png')}/>
            <Speciality speciality="Vaccine" specialityIconUri={require('../../assets/icons/seringe.png')}/>
            <Speciality speciality="Eyes" specialityIconUri={require('../../assets/icons/glasses.png')}/>
            <Speciality speciality="Dermato" specialityIconUri={require('../../assets/icons/tooth.png')}/>
          </ScrollView>
      </View>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  practitionersContainer:{
    height:100,
    marginTop:20,
    backgroundColor:'#00000000',
  },
  specialistsContainer:{
    height:98,
    marginTop:20,
    backgroundColor:'#00000000',
  },
  visitCardContainer:{
    height:220,
    marginTop:14,
    backgroundColor:'#00000000',
  }
  /*title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },*/

});
