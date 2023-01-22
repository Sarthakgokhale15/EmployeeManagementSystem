
import { View, Text, SafeAreaView ,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native'
import {React,useState,useEffect} from 'react'
import { style } from '@mui/system';
import axios from 'axios';







const Home = (props) => {
  async function deleteEmployee(){
    axios.delete(`http://localhost:3000/employees/${props.id}`,{
     "_id":props.id,
    })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(props.id);
       console.log(error);
     });
   }
   async function updateEmployee(){

    
    axios.patch(`http://localhost:3000/employees/${props.id}`,{
      "firstName":fname,
      "lastName":lname,
      "email":email,
      "Empid":empid,
      "contactNumber":"112234455667788"


    })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(`http://localhost:3000/employees/${id}`);
       console.log(error);
     });
   }

   

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>Id-{props.empid} {props.name} {props.lastName}</Text>        
      </View>
      <TouchableOpacity onPress={deleteEmployee} ><Image style={styles.circular} source={require('../assets/delete.png')}/></TouchableOpacity>
      <TouchableOpacity onPress={updateEmployee} ><Image style={styles.circular} source={require('../assets/pencil.png')}/></TouchableOpacity>
     

  



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
      flexWrap: 'wrap'
    },
    square: {
      display:'flex',
      alignItems:'center',
      alignContent:'center',
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
      width: 15,
      height: 15,
      // borderColor: '#55BCF6',
      // borderWidth: 1,
      // borderRadius: 3,
    },
    itemText2: {
      maxWidth: '80%',
      fontSize:10,
    },
   
  });
  

export default Home

