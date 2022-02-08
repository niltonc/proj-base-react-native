import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import firebase from "firebase";
import {
    Button,
    TextInput,    
  } from "react-native-paper";
import styles from './styles';


function Contas() {
    const count = useSelector((state) => state.userReducer.emailPadrao);
    const [email] = useState(count);
    const { navigate, replace } = useNavigation();
    
    const exit = () => {
        firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }
  return (
      <View style={styles.container}>
          <TextInput
          editable={false}
          value={email}
          style={styles.input}
          label="E-mail"
          mode="outlined"
          theme={{
            colors: { primary: "#1FD05F", underlineColor: "transparent" },
          }}/>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => exit()}
          >
            Sair
          </Button>
      </View>
  );
}

export default Contas;