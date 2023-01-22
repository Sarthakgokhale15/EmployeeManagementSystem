
import { View, Text, SafeAreaView ,StyleSheet,ScrollView,TouchableOpacity,TextInput} from 'react-native'

import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Input } from '@material-ui/core';
import { borderColor, style } from '@mui/system';

const List = (navigation) => {
  const [data, setData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [email, onChangeEmail] = useState('');
  const [empid, onChangeEMPid] = useState('');

  const [fname, onChangeTextFname] = useState('');

  const [lname, onChangeTextLname] = useState('');
  const [contactNumber, onChangeTextContact] = useState('');


  //this is used for post
  async function createUser(){
    axios.post('http://localhost:3000/employees', {
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
      console.log(error);
    });
  }


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/employees');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [data]);
  return (
    <View style={styles.container}>
<ScrollView
  contentContainerStyle={{
    flexGrow: 1
  }}
  keyboardShouldPersistTaps='handled'
>


<View style={styles.tasksWrapper}>
  <Text style={styles.sectionTitle}>Employees</Text>
  <View style={styles.items}>

    {
      data.map((item, index) => {
        return (
          <TouchableOpacity key={index}  onPress={()=>{}}>
            <Home name={data[index].firstName} lastName={data[index].lastName} id={data[index]._id} /> 
          </TouchableOpacity >
          
        )
      })
    }
    
  </View>
  <View>
  <TextInput
    style={styles.input}
    placeholder="First Name"
    onChangeText={newText => onChangeTextFname(newText)}
    defaultValue={fname}
    clearButtonMode="always"
   

/>
<TextInput
    style={styles.input}
    placeholder="last Name"
    onChangeText={newText => onChangeTextLname(newText)}
    defaultValue={''}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="Empid"
    onChangeText={newText => onChangeEMPid(newText)}
    defaultValue={''}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="email"
    onChangeText={newText => onChangeEmail(newText)}
    defaultValue={''}
    clearButtonMode="always"

/>
<TextInput
    style={styles.input}
    placeholder="Contact Number"
    onChangeText={newText => onChangeTextContact(newText)}
    defaultValue={''}
    clearButtonMode="always"

/>
  </View>
  

  <TouchableOpacity style={styles.button} onPress={createUser}>
  
  <Text>Add Employee</Text>
</TouchableOpacity>
</View>
  
</ScrollView>
</View>




  )
}

export default List






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
      backgroundColor: '#FFF',
      borderRadius: 10,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 350,
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
    addText: {},
  });