import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                    <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                    <Text>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                    <Text>Green</Text>
            </View>
            
            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:28,
        fontWeight:"bold",
        color:"black"
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding:10
    },
    card:{
        height:100,
        width:100,
        borderRadius:8,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:10
    },
    cardOne:{
        backgroundColor:"red",
    },
    cardTwo:{
        backgroundColor:"blue",
    },
    cardThree:{
        backgroundColor:"green",
         }
})