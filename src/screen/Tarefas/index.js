import React, { useState, useEffect, Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  Animated
} from "react-native";
import {
  TextInput,
  Card,
  Button,
  RadioButton,
  Modal,
  Searchbar,
  Checkbox,
  FAB,
  Menu,
  Divider,
  Provider,
} from "react-native-paper";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import NumericInput from 'react-native-numeric-input';
import Select2 from "react-native-select-two";
import ModalSelector from "react-native-modal-selector";
import { Icon } from "react-native-elements";
import { TextInputMask } from "react-native-masked-text";
import { Vibration } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RadioButtonCustom from '../../components/RadioButton'




export default function Tarefas() {

  const Uid = useSelector((state) => state.userReducer.Uid);  
  const [dados, setDados] = useState({});
  const [ criado, setCriado ] = useState("");
  const [ atualizado, setAtualizado ] = useState("");
  const { replace } = useNavigation();
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
      } else {
        replace("Login");
      }
    });
  }, []);
  

  useEffect(() => {
    ///////////////*****Função que Pega a Lista do Firebase e salva no Redux da lista de rotinas    */
    if (Uid != undefined && Uid != "") {
      const endereco = "contatos" + "/" + Uid;
      const ref = firebase.database().ref(endereco);
      console.log(ref);

      ref.on("value", (snapshot) => {
        const dadoUser = snapshot.val();
        setDados(dadoUser);
        console.log(dadoUser);


       setCriado(timeConverter(dadoUser?.createdAt));
       setAtualizado(timeConverter(dadoUser?.updatedAt));

      });
    }

  }, []);


  const timeConverter = (UNIX_timestamp) =>{
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  const sair = () => {
    firebase.auth().signOut().then(() => {
      replace("Login");
    }).catch((error) => {
      // An error happened.
    });
  }
  

  return (
    <View style={{ backgroundColor: "#1FD05F",  flexDirection: 'column',  flex: 1}}>

      <View style={styles.fotoView}>
          <Animated.Image source={require('../../img/iconDefault.png')} style={{height:'25%', width:'25%', padding:"10%",}}/>
    </View>

<ScrollView>
        <View
          style={{
            alignItems: "center",
            height: "50%",
            marginBottom: "5%",
            marginTop: "2%",
          }}
        >

      <TextInput
          style={styles.textInputdefault}
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
          value={dados?.nome}
        />

        <TextInput
          style={styles.textInputdefault}
          label="Profissão"
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
          value={dados?.profdes}
        />   

          <TextInput
          style={styles.textInputdefault}
          label="Situação"
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
          value={dados?.situacao ? "Habilitado" : "Desabilitado"}
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
          value={dados?.contato}
        />

<TextInput
          style={styles.textInputdefault}
          label="Criado Em"
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
          value={criado}
        />

<TextInput
          style={styles.textInputdefault}
          label="Atualizado Em"
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
          value={atualizado}
        />

          </View>



  </ScrollView>       
  <FAB
        style={styles.fab}
        theme={{ colors: { primary: "#2196f3" } }}
        icon="logout"
        color="#fff"
        onPress={() => sair()}
      />


  </View>
  );
}


export function HeaderHome({ navigation }) {
   
  return {
    title: "Maxxidata",
    headerStyle: {
      backgroundColor: "#1FD05F",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    }
  };
}