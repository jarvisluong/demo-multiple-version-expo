import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";

const variant = Constants.manifest.extra.variant;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>You are running in {variant} mode!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
