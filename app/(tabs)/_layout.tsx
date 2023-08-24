import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, View, useColorScheme } from 'react-native';

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

const tabsLink = {
  'calendar' : require('../../assets/tabicons/calendar.png'),
  'settings' : require('../../assets/tabicons/settings.png'),
  'profile' : require('../../assets/tabicons/profile.png'),
  'search' : require('../../assets/tabicons/search.png'),
  'emergency' : require('../../assets/tabicons/emergencybase.png'),
}


function TabBarCustomIcon(props : {name : 'settings' | 'profile' | 'search' | 'emergency' | 'calendar' , color : string}){
  return(
    <View style={/*props.name==="emergency" ? {marginTop:-30, width:90, height:90} : */{marginTop:3, width:24, height:24, opacity:0.9}}>
      <Image source={tabsLink[props.name]} />
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
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarCustomIcon name="search" color={color} />,
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
      <Tabs.Screen name="two" options={{ title: 'Appointments', tabBarIcon: ({ color }) => <TabBarCustomIcon name="calendar" color={color} />, }} />
      <Tabs.Screen name="three" options={{ title: 'Emergency', tabBarIcon: ({ color }) => <TabBarCustomIcon name="emergency" color={color} />, }} />
      <Tabs.Screen name="four" options={{ title: 'Settings', tabBarIcon: ({ color }) => <TabBarCustomIcon name="settings" color={color} />, }} />
      <Tabs.Screen name="five" options={{ title: 'Profile', tabBarIcon: ({ color }) => <TabBarCustomIcon name="profile" color={color} />, }} />
    </Tabs>
  );
}
