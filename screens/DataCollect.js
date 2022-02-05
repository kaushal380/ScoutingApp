import React from "react";
import { Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../App";
import { CargoData } from "./DataCollection/CargoData";
import { ClimbData } from "./DataCollection/ClimbData";
import { DriverData } from "./DataCollection/DriverData";
import { OverallStratData } from "./DataCollection/OverallStratData";
import { PenaltiesData } from './DataCollection/PenaltiesData';

export class DataCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { teamNum: null, matchNum: null }
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick() {
    this.props.onClick(false);
  }

  handleInputChange = e => {
    const {value} = e.target;
    this.setState({teamNum: value})
  }

  render() {
    return (
      <>
        <Text style={styles.TitleStyle}>Data Collection Page</Text>
        {/* Team Number Input */}
        {console.log(this.state.teamNum)}
        <TextInput 
          value={this.state.teamNum}
          onChange={this.handleInputChange}
          placeholder="Team Number"
          keyboardType="number-pad"
          maxLength={4}
          textAlign="center"
        /> 
        {/* Match Number Input */}
        <TextInput 
          value={this.state.matchNum}
          placeholder="Match Number"
          keyboardType="number-pad"
          maxLength={4}
          textAlign="center"
        /> 

        <Text>----  Autonomous  ----</Text>

        <CargoData />
        <ClimbData />
        <DriverData />
        <OverallStratData />
        <PenaltiesData />

        <Text>----  Teleop  ----</Text>

        <CargoData />
        <ClimbData />
        <DriverData />
        <OverallStratData />
        <PenaltiesData />

        <TouchableOpacity onPress={this.handleClick} style={styles.ButtonsContainer}>
          <Text style={styles.TitleStyle}>Exit</Text>
        </TouchableOpacity>
      </>
    );
  }
}

