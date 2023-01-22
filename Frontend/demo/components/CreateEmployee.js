import { View, Text,TextInput,StyleSheet ,TouchableOpacity} from 'react-native'
import {React,useState} from 'react'
import axios from 'axios'

const CreateEmployee = (navigation) => {

  const [email, onChangeEmail] = useState('');
  const [Empid, onChangeEMPid] = useState('');

  const [firstname, onChangeTextFname] = useState('');

  const [lastname, onChangeTextLname] = useState('');
  const [contactNumber, onChangeTextContact] = useState('');


    async function createUser(){
        axios.post('http://localhost:3000/employees', {
          "firstName":firstname,
          "lastName":lastname,
          "email":email,
          "Empid":Empid,
          "contactNumber":contactNumber,

      })
        .then(function (response) {
          console.log(response);
          navigation.navigate('Home')

          
          
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
    defaultValue={firstname}
    clearButtonMode="always"
   

/>
<TextInput
    style={styles.input}
    placeholder="last Name"
    onChangeText={newText => onChangeTextLname(newText)}
    defaultValue={lastname}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="id"
    onChangeText={newText => {onChangeEMPid(newText)}}
    defaultValue={Empid}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="email"
    onChangeText={newText => onChangeEmail(newText)}
    defaultValue={email}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="Contact Number"
    onChangeText={newText => onChangeTextContact(newText)}
    defaultValue={contactNumber}
    clearButtonMode="always"

/>
<TouchableOpacity style={styles.button} onPress={createUser}>
  
  <Text>Add Employee</Text>
  
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
export default CreateEmployee