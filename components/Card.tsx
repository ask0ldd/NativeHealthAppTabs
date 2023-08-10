import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

type Props = {
    text : string,
    avatarUri : ImageSourcePropType
    firstname : string
}

// const connie = require('../assets/avatars/connie_avatar.png')

const Card = (props: Props) => {

  return (
    <View style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Image style={[styles.avatar, {zIndex:3}]} source={props.avatarUri}/>
        {/*<Image style={styles.avatar} blurRadius={1} source={props.avatarUri}/>*/}
      </View>
      <Text style={{textAlign:'center', fontSize:12, color:'#374B4C'}}>{props.firstname}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer :{
      flexDirection:'column',
      rowGap:4,
      width:66,
      height:100,
    },
    avatarContainer : {height:66,width:66, backgroundColor:'#fff', padding:20, borderRadius:12, fontFamily: 'Montserrat_500Medium',
     border: '2px solid #fff',
     backgroundImage: `linear-gradient(0deg, rgba(55, 216, 255, 0.30) 0%, rgba(55, 216, 255, 0.30) 100%), 
     linear-gradient(180deg, rgba(138, 221, 239, 0.50) 0%, rgba(0, 127, 134, 0.50) 100%)`,
     overflow:'hidden',
    },
    avatar : {position:'absolute',height:66,width:66, top:0, left:0,
    },
})