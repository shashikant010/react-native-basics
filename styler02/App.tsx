import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './comonents/FlatCards'
import ElevatedCards from './comonents/ElevatedCards'
import FancyCard from './comonents/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App
