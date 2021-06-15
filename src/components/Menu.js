import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export default props => {
  return(
      <ScrollView>
          <View style={styles.header}>
              <Text style={styles.title}>Nav Title</Text>
          </View>
          <DrawerItems {...props} />
      </ScrollView>
  )
    
}

const styles = StyleSheet.create({
  header: {
      borderBottomWidth: 1,
      borderColor: '#DDD'
  },
  title: {
      color: '#000',
      fontSize: 30,
      paddingTop: 70,
      padding: 10
  },
  avatar: {
      width: 60,
      height: 60,
      borderWidth: 2,
      borderRadius: 30,
      margin: 10,
      borderColor: '#222',
      justifyContent: 'center',
      alignItems:'center'
  },
  userInfo: {
      marginLeft: 10,
  },
  name: {
      fontSize: 20,
      marginBottom: 5,
  },
  email: {
      fontSize: 15,
      marginBottom: 10,
  },
  logoutIcon: {
      marginLeft: 10,
      marginBottom: 10
  }
})