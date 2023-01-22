import { View, Text,StyleSheet } from 'react-native'
import {React,useEffect,useState} from 'react'
import EmpCard from './EmpCard'


const ViewEmployee = ({navigation,route}) => {
const {Empid,_id,firstName,lastName,email,contactNumber } = route.params;
console.log(Empid)



  return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>
      <View style={styles.square}></View>
      <View><Text>{Empid} {firstName} {lastName} </Text></View>
      <View><Text>{email} {contactNumber} </Text></View>
    </View>
  </View>
  )
}



const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    
    
  });
  
  export default ViewEmployee