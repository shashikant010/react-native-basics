import { StyleSheet, Text, View,Image,TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import sky from '../images/sky.jpg'

export default function ActionCard() {
    function openWebsite(website:string){
        Linking.openURL(website)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card,styles.cardElevated]}>
      <Image source={sky} style={[styles.cardImage]} />
      <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>sky</Text>
      <Text style={styles.cardLabel}>Shashi kant yadav</Text>
      <Text style={styles.cardDescription}>Hello i am a shoftware developer.i am currently doing App development. i Can also do software development.           Thank You</Text>
      <TouchableOpacity style={styles.socialMedia}>
        <Text style={styles.insta} onPress={()=>openWebsite("https://www.instagram.com/sky_warrior01/")}>Insta</Text>
        <Text style={styles.github} onPress={()=>openWebsite("https://www.github.com/shashikant010")}>Github</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:28,
        fontWeight:"bold",
        color:"black",
        marginHorizontal:10
    },
    card:{backgroundColor:"black",height:450,margin:8,borderRadius:8},
    cardElevated:{elevation:5},
    cardImage:{height:250,width:394,borderTopLeftRadius:8,borderTopRightRadius:8},
    cardBody:{},
    cardTitle:{color:"white",fontSize:20,fontWeight:"bold",margin:8,textAlign:"center"},
    cardLabel:{color:"white",fontSize:18,marginHorizontal:10},
    cardDescription:{color:"white",fontSize:14,margin:10},
    cardFooter:{color:"white",fontSize:12,marginHorizontal:10,textAlign:"right"},
    socialMedia:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:15},
    insta:{color:"black",fontSize:14,marginHorizontal:20,backgroundColor:"white",paddingHorizontal:20,paddingVertical:5,borderRadius:2},
    github:{color:"black",fontSize:14,marginHorizontal:20,backgroundColor:"white",paddingHorizontal:20,paddingVertical:5,borderRadius:2}

})