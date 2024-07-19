import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"

export default function Header() {
  return (
    <View style={styles.container}>
        <Entypo name="notification" size={30} color="#efefef"/>
      <Text style={styles.heading}>Meet & Chat</Text>
        <Entypo name="new-message" size={30} color="#efefef"/>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
flexDirection:"row",
width:"100%",
justifyContent:"space-between"
},
heading:{
    color:"#efefef",
    fontSize:20,
    fontWeight:"700"
}
})