import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    rating : number
}

const Ratings = (props: Props) => {
  return (
    <View style={{flexDirection:'row', columnGap:3}}>
        {
            // JSX for loop eq
            Array.from({ length: props.rating }, (_, index) => (
                <Image key={'rating'+index} source={require('../assets/icons/star.png')} />
            ))
        }
    </View>
  )
}

export default Ratings

const styles = StyleSheet.create({

})