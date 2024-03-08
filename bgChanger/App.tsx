
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';



function App(): React.JSX.Element {

  const[bgcolor,setbgcolor]=useState("lightblue")

  const setbackground=()=>{
    let color="#"
    for (let i = 0; i < 6; i++) {
      color+=Math.round(Math.random()*9)
      
      
    }
    setbgcolor(color)
  }

  return (
    <>
    <StatusBar backgroundColor={bgcolor}/>
    <View style={[styles.container,{backgroundColor:bgcolor}]}>
        <TouchableOpacity onPress={setbackground} >
            <View style={styles.actionbtn}>
                  <Text style={styles.actionbtntxt}>Press Me</Text>
            </View>
        </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:1000
  },
  actionbtn:{
    borderRadius:12,
    backgroundColor:"black",
    paddingHorizontal:40,
    paddingVertical:10
  },
  actionbtntxt:{
    fontSize:24,
    color:"white",
    textTransform:"uppercase"
  }
});

export default App;
