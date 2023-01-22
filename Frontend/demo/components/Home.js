import { View, Text ,StyleSheet,ScrollView,TouchableOpacity,Button} from 'react-native'
import {React,useState,useEffect} from 'react'
import axios from 'axios';
import { Input } from '@material-ui/core';
import { borderColor, style } from '@mui/system';
import { SpaceBar } from '@mui/icons-material';
import EmpCard from './EmpCard';

const Home = ({navigation}) => {


  const [data, setData] = useState([]);
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
        <Text style={styles.sectionTitle}>Employees List</Text>
        <View style={styles.items}>
          {
            data.map((item, index) => {
              return (
                <View style={styles.section} key={index}  onPress={()=>{}}>
                  <EmpCard Empid={data[index].Empid} firstName={data[index].firstName} lastName={data[index].lastName} 
                  _id={data[index]._id}  contactNumber={data[index].contactNumber} email={data[index].email}/>
                </View > 
              )
            })
          }
          
        </View>
      </View>
      <Button title="Add Employee" onPress={() => navigation.navigate('CreateEmployee')}/>
    </ScrollView>
  </View>
  )
}
export default Home
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
  temp:{
    height:100,
  },
  actions:{
    display:"flex",
    alignItems:"center",
    flexDirection:'row',
    justifyContent:'space-around'

  },
  section:{
    height:70,

    borderColor:'red',
    borderRadius:10,
  },
  addText: {},
});

