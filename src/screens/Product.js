import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default props => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation}/>
      <View style={styles.center}>
          <Text style={styles.TextG}>Produto</Text>
          <TouchableOpacity style={styles.btnVoltar} 
            onPress={()=> props.navigation.navigate('Home')}>
              <Text style={styles.textBtn}>Voltar para home</Text>
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
      backgroundColor: '#5aa978',
      alignItems:'center',
      justifyContent:'center'
  },
  TextG: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center'
  },
  btnVoltar: {
    backgroundColor: 'grey',
    padding: 10
  },
  textBtn: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    
  },

})