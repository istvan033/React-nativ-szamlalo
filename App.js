import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';





export default function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount (count+1)
  }
  function reset(){
    setCount (0)
    
  }
  function decerment(){
    if( count>0)
    {
      setCount (count-1)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Számláló
      </Text>
      <Text style={styles.count}>
        {count}
      </Text>

      <Button title="+1" onPress={increment}/>
      <Button title="reset" onPress={reset}/>
      <Button title="-1" onPress={decerment}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#546',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
  },
  count:{
    color: 'green',
    fontSize: 75,
  },

});