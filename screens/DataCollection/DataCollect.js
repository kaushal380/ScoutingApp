import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { styles } from "../Home";

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
        <TouchableOpacity onPress={this.handleClick} style={styles.ButtonsContainer}>
          <Text style={styles.TitleStyle}>Exit</Text>
        </TouchableOpacity>
      </>
    );
  }
}

