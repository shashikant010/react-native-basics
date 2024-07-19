import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontisto from "react-native-vector-icons/Fontisto"

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color={"#858585"}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})