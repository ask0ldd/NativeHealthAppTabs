import { Image, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

import { Text, View } from '../../components/Themed';
import Card from '../../components/Card';
import { LinearGradient } from 'expo-linear-gradient'
import Speciality from '../../components/Speciality';
import { Link } from 'expo-router';
import SpecialistCard from '../../components/SpecialistCard';
import { useState } from 'react';
import React from 'react';

export default function TabOneScreen() {

  const [searchInputValue, setSearchInputValue]= useState<string>("Search for a Professional")
  const [activeSpeciality, setActiveSpeciality] = useState<"General" | "Dental" | "Cardio" | "Vaccine" | "Eyes" | "Dermato">("General")

  return (
    <ScrollView>
      <LinearGradient colors={['#B9EFF3','#EDF5F7']} style={styles.container}>
        <Image style={{position:'absolute', top:90, left:-120,}} source={require('../../assets/bgpattern.png')}/>
        <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
            <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Your Practitioners</Text>
            <Text style={{color:'#29AAC9', fontSize:14, opacity:0.9, textDecorationStyle:'solid', textDecorationLine:'underline', fontFamily:'Montserrat_600SemiBold'}}>See More</Text>
        </View>
        <View style={styles.practitionersContainer}>
            <ScrollView horizontal={true} contentContainerStyle={{columnGap: 16, paddingHorizontal:16, paddingBottom:20, backgroundColor:'#00000000'}}>
              <Card text={'aaa'} firstname="Connie" avatarUri={require('../../assets/avatars/connie_avatar.png')}/>
              <Card text={'bbb'} firstname="Olga" avatarUri={require('../../assets/avatars/olga_avatar.png')}/>
              <Card text={'ccc'} firstname="Usman" avatarUri={require('../../assets/avatars/usman_avatar.png')}/>
              <Card text={'ddd'} firstname="Henry" avatarUri={require('../../assets/avatars/henry_avatar.png')}/>
              <Card text={'eee'} firstname="Masud" avatarUri={require('../../assets/avatars/masud_avatar.png')}/>
              <Card text={'ddd'} firstname="Olga" avatarUri={require('../../assets/avatars/olga_avatar.png')}/>
            </ScrollView>
        </View>
        <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
            <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Specialists around You</Text>
        </View>
        <View style={styles.specialistsContainer}>
            <ScrollView horizontal={true} contentContainerStyle={{columnGap: 16, paddingHorizontal:16, paddingBottom:20}}>
              <Speciality active={activeSpeciality == "General"} speciality="General" specialityIconUri={activeSpeciality != "General" ? require('../../assets/icons/general.png') : require('../../assets/icons/generaldk.png')} setSpeciality={() => setActiveSpeciality("General")}/>
              <Speciality active={activeSpeciality == "Dental"} speciality="Dental" specialityIconUri={activeSpeciality != "Dental" ? require('../../assets/icons/tooth.png') : require('../../assets/icons/toothdk.png')} setSpeciality={() => setActiveSpeciality("Dental")}/>
              <Speciality active={activeSpeciality == "Cardio"} speciality="Cardio" specialityIconUri={activeSpeciality != "Cardio" ? require('../../assets/icons/cardiac.png') : require('../../assets/icons/cardiacdk.png')} setSpeciality={() => setActiveSpeciality("Cardio")}/>
              <Speciality active={activeSpeciality == "Vaccine"} speciality="Vaccine" specialityIconUri={activeSpeciality != "Vaccine" ? require('../../assets/icons/seringe.png') : require('../../assets/icons/seringedk.png')} setSpeciality={() => setActiveSpeciality("Vaccine")}/>
              <Speciality active={activeSpeciality == "Eyes"} speciality="Eyes" specialityIconUri={activeSpeciality != "Eyes" ? require('../../assets/icons/glasses.png') : require('../../assets/icons/glassesdk.png')} setSpeciality={() => setActiveSpeciality("Eyes")}/>
              <Speciality active={activeSpeciality == "Dermato"} speciality="Dermato" specialityIconUri={activeSpeciality != "Dermato" ? require('../../assets/icons/tooth.png') : require('../../assets/icons/toothdk.png')} setSpeciality={() => setActiveSpeciality("Dermato")}/>
            </ScrollView>
        </View>
        <View style={styles.searchbarContainer}>
          <View style={styles.searchBar}>
            <TextInput style={{width:'100%', fontSize:14, color:'#93AEB5', fontFamily:'Montserrat_500Medium'}} value={searchInputValue} onChangeText={text => setSearchInputValue(text)} onFocus={() => {if(searchInputValue == "Search for a Professional") setSearchInputValue("")}} onBlur={() => {if(searchInputValue == "") setSearchInputValue("Search for a Professional")}}/>
          </View>
          <Link href="/modal" asChild>
            <Pressable style={styles.searchOptions}>
              <Image source={require('../../assets/icons/settings.png')}/>
            </Pressable>
          </Link>
        </View>
        <View style={{flexDirection:'row', marginTop:35, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16, backgroundColor:'#00000000'}}>
            <Text style={{color:'#415556', fontSize:20, fontFamily:'Montserrat_700Bold'}}>Recommended For You</Text>
            <Text style={{color:'#29AAC9', fontSize:14, opacity:0.9, textDecorationStyle:'solid', textDecorationLine:'underline', fontFamily:'Montserrat_600SemiBold'}}>See More</Text>
        </View>
        <View style={styles.visitCardContainer}>
                <ScrollView horizontal={true} contentContainerStyle={{columnGap: 24, paddingLeft:16, paddingRight:16}}>
                  <SpecialistCard/>
                  <SpecialistCard/>
                </ScrollView>
        </View>

        <View style={styles.mapborder}></View>
        <MapView style={styles.map} 
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>
            <Marker
              key={1}
              coordinate={{latitude:37.78825+0.005, longitude: -122.4324+0.005}}
              title={"Olga Abramovic"}
              description={"marker.description"}
            >
              <View style={styles.marker}><Image style={{width:44, height:44}} source={require('../../assets/avatars/olga72_avatar.png')}/></View>
            </Marker>
            <Marker
              key={2}
              coordinate={{latitude:37.78825-0.005, longitude: -122.4324-0.005}}>
              <View style={styles.marker}><Image style={{width:44, height:44}} source={require('../../assets/avatars/henry72_avatar.png')}/></View>
              <Callout style={{display:'flex', flexDirection: 'column', width:160, alignItems: 'center', justifyContent:'center', paddingBottom:3}}>
                  <Text style={{fontSize:14, fontWeight:'bold'}}>Henry Gaynes</Text>
                  <Text style={{fontSize:12}}>Next Free Slot : 02-18-2022</Text>
              </Callout>
            </Marker>
            <Marker
              key={3}
              title={"Oliver Sykes"}
              coordinate={{latitude:37.78825-0.0025, longitude: -122.4324+0.006}}>
              <View style={styles.marker}><Image style={{width:44, height:44}} source={require('../../assets/avatars/oliver72_avatar.png')}/></View>
              <Callout style={{display:'flex', flexDirection: 'column', width:160, alignItems: 'center', justifyContent:'center', paddingBottom:3}}>
                  <Text style={{fontSize:14, fontWeight:'bold'}}>Oliver Sykes</Text>
                  <Text style={{fontSize:12}}>Next Free Slot : 02-18-2022</Text>
              </Callout>
            </Marker>
            <Marker key={4} coordinate={{latitude:37.78825, longitude: -122.4324}}>
              <Image style={{width:26, height:34}} source={require('../../assets/icons/location.png')} />
            </Marker>
        </MapView>

      </LinearGradient>
    </ScrollView>
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
    height:260,
    marginTop:23,
    backgroundColor:'#00000000',
  },
  searchbarContainer:{
    height:42,
    backgroundColor:'#00000000',
    paddingHorizontal:16,
    marginTop:10,
    flexDirection:'row',
    columnGap:16,
  },
  searchBar:{
    height:42,
    width:'auto',
    flex:1,
    backgroundColor:'#FFFFFFDD',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#A5E3EC',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:14,
  },
  searchOptions:{
    height:42,
    width:42,
    backgroundColor:'#FFFFFFBB',
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#39C5E6ff',
    elevation:10,
  },
  mapborder: {
    width:'100%',
    height:1,
    backgroundColor:'#6BD3EB'
  },
  map : {
    height: 400,
    width:'100%',
    borderColor:'#6BD3EB',
    borderTopWidth:2,
  },
  marker : {
    width:48,
    height:48,
    borderRadius:6,
    borderWidth:2,
    borderColor:'#6BD3EB',
    overflow:'hidden',
    elevation:8,
    shadowColor:'#000000',
    shadowOpacity:1
  },
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
