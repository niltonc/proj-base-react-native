import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  Animated,
  Vibration
} from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import firebase from "firebase";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import ModalSelector from "react-native-modal-selector";


export default function CadUser(params) {
  const { navigate, replace } = useNavigation();
  const [name, setName] = useState();
  const [prof, setProf] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [rsenha, setRsenha] = useState();
  const [contato, setContato] = useState();
  const data = useSelector((state) => state.EntregasReducer.options);  

  const dispatch = useDispatch();

  const nameDispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        replace("Tarefas");
      } else {
        
      }
    });
  }, []);

  const validation = () => {
    if (senha != rsenha) {
      Alert.alert("As senhas devem ser iguais");
      return;
    }
    if (name == "") {
      Alert.alert("O campo nome precisa ser preenchido.");
      return;
    }

    if (email == "") {
      Alert.alert("O campo email precisa ser preenchido.");
      return;
    }

    criarConta();
  };

  const uidDispach = useDispatch();

  const criarConta = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        let uuid = user.user.uid;

        if (uuid != undefined) {
          console.log(uuid);
        }
        uidDispach({ type: "BUSCA_UID", Uid: user.user.uid });
        saveBank(uuid);

        // ...
        //

        replace("Tarefas");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorMessage);
        // ..
      });
  };

  const saveBank = (item) => {

    var timestamp = new Date().getTime();

    let Contato = {
      profid: prof.key,
      profdes: prof.label,
      uuid: item,
      contato: contato,
      nome: name,
      status: "ok",
      nivel: "usr",
      situacao: false,
      createdAt : timestamp,
      updatedAt : timestamp
    };
    nameDispatch({ type: 'BUSCANOME', NomePadrao: name });
    sendContato(Contato);
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ backgroundColor: "#2196f3", flex: 1 }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            height: "13%",
            marginBottom: "8%",
            marginTop: "2%",
          }}
        >
          <View style={styles.fotoView}>
          <Animated.Image source={require('../../img/iconDefault.png')} style={{height:'20%', width:'20%', padding:"10%",}}/>
  
          </View>
        </View>

        <ModalSelector
              style={styles.textInputFist}
                    data={data}
                    initValue="Selecione sua Profissão"
                    onChange={(option)=> setProf(option)} />

        <TextInput
          style={styles.textInputFist}
          label="Nome"
          underlineColor="#fff"
          theme={{
            colors: {
              primary: "#fff",
              background: "#2196f3",
              surface: "#fff",
              placeholder: "#fff",
              text: "#fff",
            },
          }}
          value={name}
          onChangeText={(text) => setName(text)}
        />

         


       
        <TextInput
          style={styles.textInputdefault}
          label="Telefone"
          underlineColor="#fff"
          theme={{
            colors: {
              primary: "#fff",
              background: "#2196f3",
              surface: "#fff",
              placeholder: "#fff",
              text: "#fff",
            },
          }}
          value={contato}
          onChangeText={(text) => setContato(text)}
          render={(props) => (
            <TextInputMask
              type={"cel-phone"}
              onChangeText={(text) => setContato(text)}
              value={contato}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "(99) ",
              }}
              selectionColor="#fff"
              style={{
                marginTop: "8%",
                fontSize: 15,
                color: "#fff",
                marginStart: "4%",
              }}
            />
          )}
        />

        <TextInput
          style={styles.textInputdefault}
          label="Email"
          underlineColor="#fff"
          autoCapitalize='none'
          theme={{
            colors: {
              primary: "#fff",
              background: "#2196f3",
              surface: "#fff",
              placeholder: "#fff",
              text: "#fff",
            },
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.textInputdefault}
          label="Senha"
          underlineColor="#fff"
          autoCapitalize='none'
          secureTextEntry={true}
          theme={{
            colors: {
              primary: "#fff",
              background: "#2196f3",
              surface: "#fff",
              placeholder: "#fff",
              text: "#fff",
            },
          }}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <TextInput
          style={styles.textInputdefault}
          label="Repetir Senha"
          underlineColor="#fff"
          autoCapitalize='none'
          secureTextEntry={true}
          theme={{
            colors: {
              primary: "#fff",
              background: "#2196f3",
              surface: "#fff",
              placeholder: "#fff",
              text: "#fff",
            },
          }}
          value={rsenha}
          onChangeText={(text) => setRsenha(text)}
        />

        <View style={{ width: "100%", alignItems: "center" }}>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => validation()}
          >
            <Text style={styles.txt}>Cadastrar</Text>
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const sendContato = (_body) => {
  const body = JSON.stringify(_body);
  console.log("body=", body);

  const uri =
    "https://us-central1-maxxidata-9661f.cloudfunctions.net/insertContato";

  const options = {
    method: "POST",
    body: body,
    mode: "no-cors",
  };

  Vibration.vibrate(30);

  fetch(uri, options)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error.status));
};
