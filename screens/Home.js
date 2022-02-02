import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Switch, Pressable } from 'react-native';
import React, {useState} from 'react';
import DataCollect from './DataCollection/DataCollect';
import {AntDesign, Entypo} from "@expo/vector-icons"
const Home = () => {
    const [isInputVisible, setIsInputVisible] = useState(false)
    const [taxi, setTaxi] = useState()
    const [taxiSwitch, setTaxiSwitch] = useState(false)
    const [Team, setTeam] = useState('')
    const [match, setMatch] = useState('')
    const [AutoUpper, setAutoUpper] = useState(0);
    const [autoLower, setAutoLower] = useState(0);
    const [TeleUpper, setTeleUpper] = useState(0);
    const [TeleLower, setTeleLower] = useState(0);
    const [hanger, setHanger] = useState("");
    const [outcome, setOutcome] = useState("");
    const [isTaxiDisabledYes, setIsTaxiDisabledYes] = useState(false)
    const [isTaxiDisabledNo, setIsTaxiDisabledNo] = useState(false)

    const handleTaxi = () => {
        setTaxi()
        // alert(state)
        setTaxi(taxiSwitch)
        setTaxiSwitch(!taxiSwitch)
        alert("taxi: " + taxi)    
    }
    const handleCargoLower = (type) => {
        let setNum = autoLower;
        if(type === "plus"){
            setNum++;
        }
        else{
            if(setNum>0){
                setNum--;
            }
            else{
                setAutoLower(setNum)
                return;
            }
        }
        setAutoLower(setNum)
    }

    const autoCargolowerincrement = () => {
        let autolower = autoLower + 1;
        setAutoLower(autolower)
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

            <View style = {{flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center',marginTop: 30, marginLeft: 45}}>
                <Text style = {{fontSize: 25}}>Taxi: </Text>

                <Switch
                    style = {{position: 'absolute', bottom: -11, left: 50,}}
                    trackColor={{ false: "grey", true: "grey" }}//#767577
                    thumbColor={taxi ? "black" : "black"}//#f5dd4b
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={handleTaxi}
                    value={taxiSwitch}
                />
            </View>

            <View style = {{flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center',marginTop: 30, marginLeft: 45}}>

                <View>
                    <Text style = {{fontSize: 25}}>CargoLower: </Text>
                </View>

                <AntDesign name='minus' size={35} color={'grey'} style = {{marginTop: 0, marginRight: 5}} onPress={() => handleCargoLower("other")}/>
                <TouchableOpacity style = {{backgroundColor: 'white', borderRadius: 4, width: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{autoLower}</Text>
                </TouchableOpacity>
                <AntDesign name='plus' size={35} color={'grey'} style = {{marginTop: 0, marginLeft: 5}} onPress={() => handleCargoLower('plus')}/>
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
