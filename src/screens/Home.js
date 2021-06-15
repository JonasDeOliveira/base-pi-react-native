import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
export default props => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation}/>
      <View style={styles.center}>
          <Text style={styles.TextG}>Home</Text>
          <TouchableOpacity style={styles.btnComprar}
            onPress={()=> props.navigation.navigate('Produto')}>
            <Text style={styles.textBtn}>Comprar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
      flex:1,
      alignItems:'center',
      backgroundColor: '#31697b',
      justifyContent:'center'
  },
  TextG: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center'
  },
  btnComprar: {
    backgroundColor: 'green',
    padding: 10
  },
  textBtn: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    
  },
})