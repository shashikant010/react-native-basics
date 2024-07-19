import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import MenuButton from '../components/MenuButton'
import ContactsMenu from '../components/ContactsMenu'

export default function Home() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={{height:"100%",width:"100%",margin:"20px"}}>
        <Header/>
        <Searchbar/>
        <MenuButton/>
        <ContactsMenu/>


    </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1c1c1c",
        width:"100%",
        padding:20,
    }
})