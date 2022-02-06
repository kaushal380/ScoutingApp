import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./screens/Home";
import { DataCollection } from './screens/DataCollect';

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
        {this.state.dataCollectionPage ? <DataCollection onClick={this.handleClick} /> : <Home onClick={this.handleClick} />}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 100,
    marginRight: 30,
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
  },

  TitleStyle: {
    fontSize: 40,
    alignSelf: "center",
  },

  ButtonsContainer: {
    backgroundColor: "#0782F9",
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 10,
    marginTop: 100
  },

  addButton: {
    backgroundColor: "#194D33",
    borderRadius: 5,
    width: 80, height: 30,
    marginRight: 10, marginTop: 10,
    justifyContent: 'center', alignItems: 'center'
  },

  subtractButton: {
    backgroundColor: "#F44336",
    borderRadius: 5,
    width: 80, height: 30,
    marginRight: 10, marginTop: 10,
    justifyContent: 'center', alignItems: 'center'
  },

  cargoButtons: {
    display: "flex",
    flexDirection: "row"
  },

  identityInputs: {
    backgroundColor: "#ABB8C3",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 150,
    marginRight: 30,
  },

  
});
