import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import React, {useState} from 'react';
import DataCollect from './DataCollection/DataCollect';
import {AntDesign, Entypo} from "@expo/vector-icons"
const Home = () => {
    const [isInputVisible, setIsInputVisible] = useState(false)
    const [taxi, setTaxi] = useState(false)
    const [Team, setTeam] = useState('')
    const [match, setMatch] = useState('')
    const [AutoUpper, setAutoUpper] = useState(0);
    const [autoLower, setAutoLower] = useState(0);
    const [TeleUpper, setTeleUpper] = useState(0);
    const [TeleLower, setTeleLower] = useState(0);
    const [hanger, setHanger] = useState("");
    const [outcome, setOutcome] = useState("");
    const [color, setColor] = useState('white')
    const [isTaxiDisabledYes, setIsTaxiDisabledYes] = useState(false)
    const [isTaxiDisabledNo, setIsTaxiDisabledNo] = useState(false)

    const handleTaxiYes = () => {
        if(taxi){
            setTaxi(false)
            setColor('white')
        }
        else{
            setTaxi(true)
            setColor('#0782F9')
        }
        setIsTaxiDisabledNo(true)
    }
    const handleTaxiNo = () => {
        if(!taxi){
            setTaxi(false)
            setColor('#0782F9')
        }
        else{
            setTaxi(true)
            setColor('white')
        }
        setIsTaxiDisabledYes(true)
    }
  return (
    <>
    <View style>
        <Text style = {styles.TitleStyle}>
          Techno Titans
      </Text>
    </View>
    <View style = {styles.container}>

      <TouchableOpacity
      style = {styles.ButtonsContainer}
      onPress={() => {setIsInputVisible(true)}}
      >
        <Text style = {styles.Buttontext}>Scout Data</Text>
      </TouchableOpacity>

      <Modal
      visible = {isInputVisible}
      >
       <>
        <View style = {{backgroundColor: '#dedbd5'}}>
            <Text style = {{fontSize: 40, alignSelf: 'center'}}>data collection</Text>
            <View style = {{flexDirection: 'row', alignSelf: 'center', marginTop: 50}}>
            <TextInput
                    placeholder = "Team #"
                    value = {Team}
                    onChangeText = {text => setTeam(text)}
                    style = {styles.input}                   
            />
            <TextInput
                placeholder = "Match #"
                value = {match}
                onChangeText = {text => setMatch(text)}
                style = {styles.input1}                   
            />
            </View>

            <Text style = {{alignSelf: 'center', marginTop: 30, fontSize: 30}}>
                ----  Autonomous  ----
            </Text>

            <View style = {{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center',marginTop: 30}}>
                <Text style = {{fontSize: 35}}>Taxi: </Text>

                <TouchableOpacity
                style = {{
                    backgroundColor: color, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 30, 
                    width: 60, 
                    borderRadius: 5,
                    marginTop: 8, 
                    marginLeft: 10, 
                }}
                onPress={() => {handleTaxiYes}}
                disabled = {isTaxiDisabledYes}
                >
                    <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {{
                    backgroundColor: color, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 30, 
                    width: 60, 
                    borderRadius: 5,
                    marginTop: 8, 
                    marginLeft: 10, 
                }}
                onPress={() => {handleTaxiNo}}
                disabled = {isTaxiDisabledNo}
                >
                    <Text>No</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row', alignSelf:'center'}}>

                <AntDesign name='close' size={45} color={'#0782F9'} style = {{marginRight: 60}} onPress={() => {setIsInputVisible(false)}}/> 
                <AntDesign name='check' size={45} color={'#0782F9'} style = {{marginLeft: 60}}/> 
            </View>
        </View>
        </>
      </Modal>
    </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    ButtonsContainer: {
        backgroundColor: "#0782F9",
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 10,
        marginTop: -100
    },
    Buttontext: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700'
    },
    // TaxiButton: {
    //     backgroundColor: color,
    //     width: 300,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: 100,
    //     borderRadius: 10,
    //     marginTop: -100
    // },
    TitleStyle: {fontSize: 40, marginTop: 100},
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: 100, 
        marginRight: 30, 
    },
    input1: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: 100
    },
  });
