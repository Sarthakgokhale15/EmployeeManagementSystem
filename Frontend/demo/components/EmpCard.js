import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Button,Image} from 'react-native';
import axios from 'axios';

const EmpCard = ({Empid,firstName,lastName,_id,email,contactNumber}) => {
    const navigation=useNavigation();

    async function deleteEmployee(){
        axios.delete(`http://localhost:3000/employees/${_id}`)
         .then(function (response) {
           console.log(response);
         })
         .catch(function (error) {
           console.log(props.id);
           console.log(error);
         });
       }
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text>{Empid} {firstName} {lastName} </Text>
      </View>
      <TouchableOpacity onPress={deleteEmployee} ><Image style={styles.circular} source={require('../assets/delete.png')}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EditEmployee',{_id,Empid,firstName,lastName,email,contactNumber})} ><Image style={styles.circular} source={require('../assets/pencil.png')}/></TouchableOpacity>
                    
      <TouchableOpacity onPress={() =>navigation.navigate('ViewEmployee',{_id,Empid,firstName,lastName,email,contactNumber})} ><Image style={styles.circular} source={require('../assets/eye.png')}/></TouchableOpacity>
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
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    // borderColor: '#55BCF6',
    // borderWidth: 2,
    // borderRadius: 0,
  },
});

export default EmpCard;