import axios from "axios";
import React from "react";
import { SafeAreaView, Button, StyleSheet, TextInput } from "react-native";

const Login = (props) => {
  const loginApi = "https://reqres.in/api/login";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState();

  async function loginStatus() {
      console.log(email);
    let response = await axios
      .post(loginApi, {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.

        console.log(JSON.stringify(response.data.token) + "hello");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);

        // setNotification(JSON.stringify(error.response));
      });
  }

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={(email) => setEmail(email)} value={email} placeholder="Email" />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button title="Login" color="#841584"
                  onPress={loginStatus}

      >
        Login
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
