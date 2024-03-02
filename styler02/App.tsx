import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './comonents/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <FlatCards/>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App
