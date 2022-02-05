import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../App";

export class CargoData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cargoLower: 0, cargoUpper: 0}
    this.addLower = this.addLower.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  addLower(e) {
    this.setState({cargoLower: this.state.cargoLower + 1})
  }

  render() {
    return (
      <View>
        <Text>Cargo Collection Component</Text>
        <View>
          <Text>Cargo Lower: {this.state.cargoLower}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            value={this.state.cargoLower}
            onPress={this.addLower}
          />
        </View>
      </View>
    );
  }
}
