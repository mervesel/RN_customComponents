import React from "react";
import { SafeAreaView, StyleSheet, View,Text, TouchableOpacity} from 'react-native';
import Card from "./components/Card";

const App=()=>{
  return(
    <SafeAreaView style= {styles.container} >
      <Card title="Eddard Stark" text="Winter is coming"/>
      <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım.Evet tarafından."/>
      <Card title="Serbest" text="İlhami abi sen söyle başka bir ilde miyim?"/>
    </SafeAreaView>

  );
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
  },
})

export default App;