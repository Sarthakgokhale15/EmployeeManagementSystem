import { View, Text ,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import {React,useEffect,useState} from 'react'
import EmpCard from './EmpCard'
import axios from 'axios'

import { Email } from '@mui/icons-material'

const EditEmployee = ({navigation,route}) => {
    const {Empid,_id,firstName,lastName,email,contactNumber } = route.params;
    const [email1, onChangeEmail] = useState(email);
    const [Empid1, onChangeEMPid] = useState(Empid);
  
    const [firstname1, onChangeTextFname] = useState(firstName);
  
    const [lastname1, onChangeTextLname] = useState(lastName);
    const [contactNumber1, onChangeTextContact] = useState(contactNumber);




async function updateEmployee(){
    axios.patch(`http://localhost:3000/employees/${_id}`,{
      "firstName":firstname1,
      "lastName":lastname1,
      "email":email1,
      "Empid":Empid1,
      "contactNumber":contactNumber1


    })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {

       console.log(error);
     });
   }



  return (
    <View>
  <TextInput
    style={styles.input}
    placeholder="First Name"
    onChangeText={newText => onChangeTextFname(newText)}
    defaultValue={firstname1}
    clearButtonMode="always"
   

/>
<TextInput
    style={styles.input}
    placeholder="last Name"
    onChangeText={newText => onChangeTextLname(newText)}
    defaultValue={lastname1}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="Empid"
    onChangeText={newText => {onChangeEMPid(newText)}}
    defaultValue={''}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="email"
    onChangeText={newText => onChangeEmail(newText)}
    defaultValue={email1}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="Contact Number"
    onChangeText={newText => onChangeTextContact(newText)}
    defaultValue={''}
    clearButtonMode="always"

/>
<TouchableOpacity style={styles.button} onPress={updateEmployee}>
  
  <Text>Update</Text>
  
</TouchableOpacity>
</View> 
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      marginBottom:10,
      marginLeft:5,
      backgroundColor: '#FFF',
      borderRadius: 10,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 380,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#C0D4D8',
      padding: 10,
    },
    temp:{
      height:100,
    },
    addText: {},
  });

export default EditEmployee