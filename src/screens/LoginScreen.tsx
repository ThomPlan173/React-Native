import * as React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Header } from "../components/Header";
import { Routes } from '../navigation/Routes'
// You can import from local files

// or any pure javascript modules available in npm

import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

export default function LoginScreen(props) {
  console.log(props);
  const [text, setText] = React.useState("");
  function navigateToTerms() {
    props.navigation.navigate(Routes.TERMS_SCREEN);
  }
  return (
    <ScrollView>
      <Header title="Welcome to Starport" />

      <View style={styles.form}>
        <>
          <TextInput
            autoComplete={true}
            style={styles.input}
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            autoComplete={true}
            style={styles.input}
            label="Password"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button mode="contained" onPress={() => console.log("Pressed")}>
            Login
          </Button>
        </>
        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.parag}>Read Conditions and Terms </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//  // using </> is just like using </React.Fragment>

const styles = StyleSheet.create({
  headline: {
    textAlign: "center",
    color: "white",
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    backgroundColor: "#7950F2",
  },

  form: {
    padding: 50,
  },

  input: {
    marginBottom: 20,
  },

  parag: {
    textAlign: "center",
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
