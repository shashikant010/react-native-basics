import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView >
      <View style={styles.container}>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      <Text style={styles.container}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
  // flex: 1,
  color:"red",
  justifyContent:"center",
  alignItems:"center",
  }
});

export default App;
