import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './comonents/FlatCards'
import ElevatedCards from './comonents/ElevatedCards'
import FancyCard from './comonents/FancyCard'
import ActionCard from './comonents/ActionCard'
import ContactList from './comonents/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App
