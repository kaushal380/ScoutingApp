import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { styles } from "./Home";
import { CargoData } from "./DataCollection/CargoData";
import { ClimbData } from "./DataCollection/ClimbData";
import { DriverData } from "./DataCollection/DriverData";
import { OverallStratData } from "./DataCollection/OverallStratData";
import { PenaltiesData } from './DataCollection/PenaltiesData';

export class DataCollection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(false);
  }

  render() {
    return (
      <>
        <Text style={styles.TitleStyle}>Data Collection Page</Text>
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

