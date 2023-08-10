import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:16}}>
          <Text style={{color:'#415556', fontSize:20}}>Your Practitioners</Text>
          <Text style={{color:'#29AAC9', fontSize:14, opacity:0.9}}>See More</Text>
      </View>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
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
