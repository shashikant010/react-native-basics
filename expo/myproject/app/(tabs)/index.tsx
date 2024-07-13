import { Image, StyleSheet, Platform, Text, ScrollView, TouchableOpacity, Pressable,TextInput} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import {  io } from 'socket.io-client';
import { useSocket } from '../context/SocketContext';

export default function HomeScreen() {
  const [name,setName]=useState("")
  const [square,setSquare]=useState<string[]>([])
  const [isXturn,setIsXturn]=useState(false)
  const [message,setMessage]=useState("Let's Play")
  const [isSomeOneWon,setIsSomeOneWon]=useState(false)
console.log(name)

const {socket} = useSocket() 

console.log(socket)
useEffect(()=>{
},[socket])
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]


const checkWinner=(square:string[])=>{
winningCombos.map((item)=>{
  if(square[item[0]]===square[item[1]] && square[item[1]]===square[item[2]] && square[item[0]] && square[item[1]] && square[item[2]]){
    console.log("someone won")
    setIsSomeOneWon(true)
    setMessage(`${square[item[0]]} has won`)
   }
})

}

console.log("the name outside is",name)



  const handlePress =(index:number)=>{
    if(socket?.connected){
      socket.emit("played",index)
    }
    console.log("clicked")
    if(isXturn){
      square[index]="X"
      setIsXturn(false)
    }
    else{
      square[index]="O"
      setIsXturn(true)
    }
    checkWinner(square)
   }

   const resetGame =()=>{
    setSquare([]);
    setIsSomeOneWon(false)
    setMessage("Play now")
   }

   const submitName=()=>{
      socket?.emit("find",{name})
   }

   let oppname,value;


   useEffect(()=>{
    if(socket?.connected){
      socket?.on("find",(e)=>{
        console.log("the name inside socket is",name)
        let allPlayersArray=e.allPlayers;
        console.log(allPlayersArray)
        console.log(name)
        const foundObj =allPlayersArray.find(obj=>obj.p1.p1name==`${name}`||obj.p2.p2name == `${name}`)
        console.log(foundObj)
        foundObj?.p1.p1name===`${name}` ? oppname=foundObj.p2.p2name :oppname=foundObj.p1.p1name;
        foundObj?.p1.p1value===`${name}` ? oppname=foundObj.p2.p2value :oppname=foundObj.p1.p2vlaue;
    })}

    if(socket?.connected){


      socket.on("server-played",(index:any)=>{
        console.log("the name inside on is",name)
      if(isXturn){
        square[index]="X"
        setIsXturn(false)
      }
      else{
        square[index]="O"
        setIsXturn(true)
      }
      checkWinner(square)
    })}
   },[socket])
   
   

  return (
  <ScrollView >
    <Text style={styles.heading}>Zero kata</Text>
    <Text style={styles.message}>{message} VS {oppname}</Text>
    <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => setName(text)}
        value={name}
        placeholder='Enter your name'
        style={{padding: 3,width:300,alignSelf:"center",borderWidth:2,height:40,margin:15}}
      />
      <Pressable style={{backgroundColor:"lightblue",height:40,width:100,alignSelf:"center",display:"flex",justifyContent:"center",alignItems:"center",borderWidth:2,borderRadius:8}} onPress={submitName}><Text>Submit Name</Text></Pressable>
    <View style={styles.container}>
    <Pressable style={styles.boxes} onPress={()=>handlePress(0)} disabled={square[0] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[0]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(1)} disabled={square[1] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[1]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(2)} disabled={square[2] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[2]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(3)} disabled={square[3] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[3]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(4)} disabled={square[4] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[4]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(5)} disabled={square[5] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[5]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(6)} disabled={square[6] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[6]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(7)} disabled={square[7] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[7]}</Text></Pressable>
    <Pressable style={styles.boxes} onPress={()=>handlePress(8)} disabled={square[8] || isSomeOneWon?true:false}><Text style={styles.boxtext}>{square[8]}</Text></Pressable>
    </View>

    <Pressable style={styles.resetButton} onPress={resetGame}><Text style={styles.resetButtonTxt}>Reset</Text></Pressable>
    
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:3,
    flexDirection:"row",
    flexWrap:"wrap",
    padding:10,
    gap:2,
    justifyContent:"center",
      alignItems:"center"

  },
    heading:{
      fontSize:30,
      textAlign:"center",
      fontWeight:"700",
      color:"green",
      padding:18
    },
    message:{
      fontSize:30,
      textAlign:"center",
      fontWeight:"700",
      color:"purple",
      // padding:30
    },
    boxes:{
      height:90,
      width:"30%",
      backgroundColor:"pink",
      borderWidth:2,
      borderColor:"black",
      // flex:4,
      justifyContent:"center",
      alignItems:"center"

    },
    boxtext:{
      fontSize:28,
      fontWeight:"500",
    },
    resetButton:{
      backgroundColor:"lightblue",
      height:40,
      width:80,
      alignSelf:"center",
      textAlign:"center",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderWidth:2,
      borderRadius:8
      
    },
    resetButtonTxt:{
      fontSize:18,
      fontWeight:"600"

    }
});
