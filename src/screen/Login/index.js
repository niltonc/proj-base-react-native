import React, { useState, useEffect, Component } from 'react';
import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Animated, Keyboard, Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import firebase from 'firebase';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const uidDispach = useDispatch();
    const nameDispach = useDispatch();
    const { navigate, replace } = useNavigation();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            replace("Tarefas");
          } else {
            
          }
        });
      }, []);

    const validar = () =>{
        if(email == ''){
            Alert.alert(
                "campo email vazio."
             )
             return;
        }
        if(senha == ''){
            Alert.alert(
                "campo senha vazio."
             )
             return;
        }
        logando()
    }
   
    const logando =()=>{
        
            firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((user) => {
                uidDispach({ type: "BUSCA_UID", Uid: user.user.uid });
                uidDispach({ type: "BUSCAEMAIL", emailPadrao: user.user.email });
     
              replace('Tarefas')
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error);
              Alert.alert(
                "usuário Inválido"
             )
        
              });
        
        
    } 

    const [offset]=useState(new Animated.ValueXY({x:0, y:80}))
    const [logo] = useState(new Animated.ValueXY({x:300,y:75}))

    useEffect(()=>{
     const   keyboardDidShowLister = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
     const   keyboardDidHideLister = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

       Animated.spring(offset.y,{
           toValue:0, speed:4,
           bounciness:30
       }).start(); 
    },[])

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(
                logo.x,{
                    toValue:150,
                    duration:100,
                }
            ), Animated.timing(
                logo.y,{
                    toValue:10,
                    duration:100,
                }
            ),
            ]).start();
                     
    }
    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(
                logo.x,{
                    toValue:300,
                    duration:100,
                }
            ), Animated.timing(
                logo.y,{
                    toValue:70,
                    duration:100,
                }
            ),
            ]).start();
    }
  
    
    return(
         <KeyboardAvoidingView style={{backgroundColor:'#2196f3', flex:1, width:'100%', alignItems:"center"}}>  


         <View style={styles.containerLogo}>
         <Animated.Image source={require('../../img/logoMaxxidata.png')} style={{height:'20%', width:'80%', padding:"0%",}}/>
         </View>

        
        
        <Animated.View 
        style={[
            styles.viewMain,
            {
                transform:[{ translateY: offset.y}]
            }
        ]}>
            <View style={{alignItems:'center'}}><Text style={styles.title}>Entrar</Text></View>
          
        <TextInput
        style={styles.textInputdefault}
        label="Email"
        mode='outlined'
        autoCapitalize='none'
        theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
        autoCompleteType='email'
        value={email}
        onChangeText={text=>setEmail(text)}
        />

        <TextInput
        style={styles.textInputdefault}
        label="Senha"
        mode='outlined'
        autoCapitalize='none'
        theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}       
        autoCompleteType='password'
        value={senha}
        onChangeText={text=>setSenha(text)}
        secureTextEntry={true}
        /> 
        <View style={{alignItems:'center'}}>
        <Button style={styles.btnDefault} mode="contained" onPress={() => validar()}>
         Entrar
            </Button>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={styles.barra}/><Text style={styles.textOR}>OU</Text><View style={styles.barra}/>
        </View>

        <View style={{alignItems:'center'}}>
        <Button  style={styles.btnCadastro} mode="contained" onPress={() =>navigate('CadUser') }>
         Cadastrar
         </Button>
         
        </View>
        </Animated.View >
    
    </KeyboardAvoidingView>
    );

}
export function headerLogin({ navigation }) {
    return {
             
            title: '',
            headerShown: false,
            header: null,
         
                    
          }}
    
   
