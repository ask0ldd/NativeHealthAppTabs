import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, View, useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold,} from '@expo-google-fonts/montserrat';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
/*function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}*/

const tabsLink : { [key: string]: any } = {
  'calendar' : require('../../assets/tabicons/calendarw.png'),
  'settings' : require('../../assets/tabicons/settingsw.png'),
  'profile' : require('../../assets/tabicons/profilew.png'),
  'search' : require('../../assets/tabicons/searchw.png'),
  'emergency' : require('../../assets/tabicons/emergency.png'),
  'calendarFocused' : require('../../assets/tabicons/calendarw.png'),
  'settingsFocused' : require('../../assets/tabicons/settingsw.png'),
  'profileFocused' : require('../../assets/tabicons/profilew.png'),
  'searchFocused' : require('../../assets/tabicons/searchw.png'),
  'emergencyFocused' : require('../../assets/tabicons/emergency.png'),
}


function TabBarCustomIcon(props : {name : 'settings' | 'profile' | 'search' | 'emergency' | 'calendar' , color : string, focused : boolean}){
  return(
    <View style={props.name==="emergency" ? {marginTop:-30, width:90, height:90} : 
      { marginTop:1, width:24, height:24, opacity:0.9 }
    }>
      <Image source={props.focused ? tabsLink[props.name+'Focused'] : tabsLink[props.name]} />
    </View>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        /*tabBarActiveTintColor: 'black',*/
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#48B1D5FF',
          /*paddingBottom: 5,
          paddingTop: 4,*/
          borderTopColor: '#60cfe6',
          borderTopWidth: 2,
        },
        tabBarActiveBackgroundColor : '#7ad2f0aa',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color }) => <TabBarCustomIcon name="search" color={color} focused={focused} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen name="two" options={{ title: 'Appointments', tabBarIcon: ({ focused, color }) => <TabBarCustomIcon name="calendar" color={color} focused={focused} />, }} />
      <Tabs.Screen name="three" options={{ title: 'Emergency', tabBarIcon: ({ focused, color }) => <TabBarCustomIcon name="emergency" color={color} focused={focused} />, }} />
      <Tabs.Screen name="four" options={{ title: 'Settings', tabBarIcon: ({ focused, color }) => <TabBarCustomIcon name="settings" color={color} focused={focused} />, }} />
      <Tabs.Screen name="five" options={{ title: 'Profile', tabBarIcon: ({ focused, color }) => <TabBarCustomIcon name="profile" color={color} focused={focused} />, }} />
    </Tabs>
  );
}

/*

#68D2EA
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#68D2EAFF',
  },
});

