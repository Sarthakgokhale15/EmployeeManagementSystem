import { View, Text,TextInput,StyleSheet } from 'react-native'
import {React,useState} from 'react'

const Update = (navigation) => {
    const [email, onChangeEmail] = useState('');
  const [empid, onChangeEMPid] = useState('');

  const [fname, onChangeTextFname] = useState('');

  const [lname, onChangeTextLname] = useState('');
  const [contactNumber, onChangeTextContact] = useState('');
  return (
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
  )
}

export default Update
const styles = StyleSheet.create({
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
      addText: {},
});