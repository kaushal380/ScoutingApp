
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { styles } from "../App";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataCollection: this.props.dataCollectPage };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(true);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://static.wixstatic.com/media/398287_40b3117e8571414381b6dba84bf96a0a~mv2.png/v1/fill/w_115,h_104,al_c,q_85,usm_0.66_1.00_0.01/square_whitespace.webp",
          }}
        />
        <View>
          <Text style={styles.TitleStyle}>Techno Titans</Text>
          <TouchableOpacity
            style={styles.ButtonsContainer}
            onPress={this.handleClick}
          >
            <Text style={styles.TitleStyle}>Scout Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Switch, ScrollView } from 'react-native';
import React, {useState} from 'react';
import DataCollect from './DataCollection/DataCollect';
import {AntDesign, Entypo} from "@expo/vector-icons"
const Home = () => {
    const [isInputVisible, setIsInputVisible] = useState(false)
    const [taxi, setTaxi] = useState(false)
    const [taxiSwitch, setTaxiSwitch] = useState(false)
    const [Team, setTeam] = useState('')
    const [match, setMatch] = useState('')
    const [AutoUpper, setAutoUpper] = useState(0);
    const [autoLower, setAutoLower] = useState(0);
    const [TeleUpper, setTeleUpper] = useState(0);
    const [TeleLower, setTeleLower] = useState(0);

    const [hanger, setHanger] = useState("");
    const [lowColor, setLowColor] = useState("white")
    const [midColor, setMidColor] = useState("white")
    const [highColor, setHighColor] = useState("white")
    const [treversalColor, setTreversalColor] = useState("white")
    const [noneColor, setNoneColor] = useState("white")

    const [outcome, setOutcome] = useState("");
    const [isTaxiDisabledYes, setIsTaxiDisabledYes] = useState(false)
    const [isTaxiDisabledNo, setIsTaxiDisabledNo] = useState(false)

    const handleTaxi = () => {
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

    const handleCargoUpper = (type) => {
        let setNum = AutoUpper;
        if(type === "plus"){
            setNum++;
        }
        else{
            if(setNum>0){
                setNum--;
            }
            else{
                setAutoUpper(setNum)
                return;
            }
        }
        setAutoUpper(setNum)
    }
    const handleCargoLowerTele = (type) => {
        let setNum = TeleLower;
        if(type === "plus"){
            setNum++;
        }
        else{
            if(setNum>0){
                setNum--;
            }
            else{
                setTeleLower(setNum)
                return;
            }
        }
        setTeleLower(setNum)
    }
    const handleCargoUpperTele = (type) => {
        let setNum = TeleUpper;
        if(type === "plus"){
            setNum++;
        }
        else{
            if(setNum>0){
                setNum--;
            }
            else{
                setTeleUpper(setNum)
                return;
            }
        }
        setTeleUpper(setNum)
    }

    const handleHanger = (type) => {
        let selectedColor = "#0782F9"

        if(type === "low"){
            setHanger("low")
            setNoneColor("white")
            setLowColor(selectedColor)
            setMidColor("white")
            setHighColor("white")
            setTreversalColor("white")
        }
        if(type === "mid"){
            setHanger("mid")
            setNoneColor("white")
            setLowColor("white")
            setMidColor(selectedColor)
            setHighColor("white")
            setTreversalColor("white")
        }
        if(type === "high"){
            setHanger("high")
            setNoneColor("white")
            setLowColor("white")
            setMidColor("white")
            setHighColor(selectedColor)
            setTreversalColor("white")
        }
        if(type === "t"){
            setHanger("traversal")
            setNoneColor("white")
            setLowColor("white")
            setMidColor("white")
            setHighColor("white")
            setTreversalColor(selectedColor)
        }
        if(type === "none"){
            setHanger("none")
            setNoneColor(selectedColor)
            setLowColor("white")
            setMidColor("white")
            setHighColor("white")
            setTreversalColor("white")
        }
        
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

    {/* Modallllllllllllllll ----------------------------------------------------*/}
      <Modal
      visible = {isInputVisible}
      >
       <>
       <ScrollView>
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
                {/* add human player shot*/}
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

            <View style = {{flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center',marginTop: 30, marginLeft: 45}}>

            <View>
                <Text style = {{fontSize: 25}}>CargoHigher: </Text>
            </View>

            <AntDesign name='minus' size={35} color={'grey'} style = {{marginTop: 0, marginRight: 5}} onPress={() => handleCargoUpper("other")}/>
            <TouchableOpacity style = {{backgroundColor: 'white', borderRadius: 4, width: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{AutoUpper}</Text>
            </TouchableOpacity>
            <AntDesign name='plus' size={35} color={'grey'} style = {{marginTop: 0, marginLeft: 5}} onPress={() => handleCargoUpper('plus')}/>
            </View>

            <Text style = {{alignSelf: 'center', marginTop: 30, fontSize: 30}}>
                ----  Teleop  ----
            </Text>

            <View style = {{flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center',marginTop: 30, marginLeft: 45}}>

                <View>
                    <Text style = {{fontSize: 25}}>CargoLower: </Text>
                </View>

                <AntDesign name='minus' size={35} color={'grey'} style = {{marginTop: 0, marginRight: 5}} onPress={() => handleCargoLowerTele("other")}/>
                <TouchableOpacity style = {{backgroundColor: 'white', borderRadius: 4, width: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{TeleLower}</Text>
                </TouchableOpacity>
                <AntDesign name='plus' size={35} color={'grey'} style = {{marginTop: 0, marginLeft: 5}} onPress={() => handleCargoLowerTele('plus')}/>
            </View>

            <View style = {{flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'center',marginTop: 30, marginLeft: 45}}>

            <View>
                <Text style = {{fontSize: 25}}>CargoHigher: </Text>
            </View>

            <AntDesign name='minus' size={35} color={'grey'} style = {{marginTop: 0, marginRight: 5}} onPress={() => handleCargoUpperTele("other")}/>
            <TouchableOpacity style = {{backgroundColor: 'white', borderRadius: 4, width: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{TeleUpper}</Text>
            </TouchableOpacity>
            <AntDesign name='plus' size={35} color={'grey'} style = {{marginTop: 0, marginLeft: 5}} onPress={() => handleCargoUpperTele('plus')}/>
            </View>
            
            <View style = {{alignSelf: 'flex-start', justifyContent: 'center',marginTop: 30, marginLeft: 45}}>
                <Text style = {{fontSize: 25}}>Hanger: {hanger}</Text>

                <View style = {{flexDirection: 'row', alignSelf: 'flex-start', marginTop: 10}}>

                <TouchableOpacity 
                        style = {{backgroundColor: noneColor, 
                        borderRadius: 5, 
                        width: 60, height: 30, 
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'}}
                        
                        onPress={() => {handleHanger("none")}}
                    >
                        <Text>None</Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                        style = {{backgroundColor: lowColor, 
                        borderRadius: 5, 
                        width: 60, height: 30, 
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'}}
                        
                        onPress={() => {handleHanger("low")}}
                    >
                        <Text>Low</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {{backgroundColor: midColor, 
                        borderRadius: 5, 
                        width: 60, height: 30, 
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'}}
                    
                        onPress={() => {handleHanger("mid")}}
                    >
                        <Text>Mid</Text>

                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {{backgroundColor: highColor, 
                        borderRadius: 5, 
                        width: 60, height: 30, 
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'}}
                    
                        onPress={() => {handleHanger("high")}}
                    >
                        <Text>High</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {{backgroundColor: treversalColor, 
                        borderRadius: 5, 
                        width: 80, height: 30, 
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'}}
                        
                        onPress={() => {handleHanger("t")}}
                    >
                        <Text>Traversal</Text>
                    </TouchableOpacity>

                </View>
            </View>



            <View style = {{flexDirection: 'row', alignSelf:'center', marginTop: 30}}>

                <AntDesign name='close' size={45} color={'#0782F9'} style = {{marginRight: 60}} onPress={() => {setIsInputVisible(false)}}/> 
                <AntDesign name='check' size={45} color={'#0782F9'} style = {{marginLeft: 60}}/> 
            </View>
            
        </View>
        </ScrollView>
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
