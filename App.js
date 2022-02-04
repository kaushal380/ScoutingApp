import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./screens/Home";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataCollectionPage: false};
  }
  render() {
    return (
      <View style={styles.container}>
        <Home dataCollectionPage={this.state.dataCollectionPage}/>
        <StatusBar style="auto" />
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