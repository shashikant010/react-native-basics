import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const people=[{name:"rahul",sirname:"sharma",mobile:9218232123,email:"rahul@gmail.com"},{name:"sky",sirname:"yadav",mobile:9318232123,email:"sky@gmail.com"},{name:"rohit",sirname:"jadeja",mobile:9218232323,email:"rohit@gmail.com"},{name:"virat",sirname:"kohli",mobile:9218232543,email:"virat@gmail.com"}]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView>
        {people.map((people)=>{return(
            <View style={styles.container} key={people.name}>
            <View  style={styles.peopleCard}>
                <Text style={styles.peopleName}>{people.name+" "+people.sirname}</Text>
                <Text style={styles.peopleMobile}>{people.mobile}</Text>
                <Text style={styles.peopleEmail}>{people.email}</Text>
            </View>
            </View>
        )})}
      </ScrollView>
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
    container:{marginLeft:15,marginTop:10,marginRight:15},
    peopleCard:{display:"flex",backgroundColor:"lightblue",borderRadius:10},
    peopleName:{color:"black",marginLeft:10,},
    peopleMobile:{color:"black",marginLeft:10},
    peopleEmail:{color:"black",marginLeft:10,marginBottom:5},
})