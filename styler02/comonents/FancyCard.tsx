import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import hawa from '../images/hawa.jpg'

export default function FancyCard() {
  return (
   <View>
      <Text style={styles.heading}>Trending places</Text>
      <View style={[styles.card,styles.cardElevated]}>
      <Image source={hawa} style={[styles.cardImage]} />
      <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>Hawa Mahal</Text>
      <Text style={styles.cardLabel}>pink city</Text>
      <Text style={styles.cardDescription}>Hawa Mahal is a famous place in jaipur rajasthan haryana . it is also known as pink city . it is a good place for the tourist to visit</Text>
      <Text style={styles.cardFooter}>12 min away</Text>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{fontSize:28,fontWeight:"bold",marginHorizontal:10,color:"black"},
    card:{backgroundColor:"black",height:380,margin:8,borderRadius:8},
    cardElevated:{},
    cardImage:{height:180,width:394,borderTopLeftRadius:8,borderTopRightRadius:8},
    cardBody:{},
    cardTitle:{color:"white",fontSize:20,fontWeight:"bold",margin:8,textAlign:"center"},
    cardLabel:{color:"white",fontSize:18,marginHorizontal:10},
    cardDescription:{color:"white",fontSize:14,margin:10},
    cardFooter:{color:"white",fontSize:12,marginHorizontal:10,textAlign:"right"}
})
