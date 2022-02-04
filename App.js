import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./screens/Home";
import {DataCollection} from './screens/DataCollection/DataCollect';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataCollectionPage: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(showPage) {
    this.setState({ dataCollectionPage: showPage });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.dataCollectionPage ? <DataCollection onClick={this.handleClick}/> : <Home onClick={this.handleClick} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
