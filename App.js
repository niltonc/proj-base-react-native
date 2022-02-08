import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {getStore, getPersistor}    from './src/redux/store';

import Heade from './src/components/header';


import Login, {headerLogin} from './src/screen/Login';
import CadUser from './src/screen/cadastroView';
import Tarefas, {HeaderHome} from './src/screen/Tarefas';
import Contas from './src/screen/Contas';
import firebase from './firebaseConfig';
//import firebase from 'firebase';

const Stack = createStackNavigator();
async function verAtualizacao(){
  const { isAvailable } = await Updates.checkForUpdateAsync();
    if(isAvailable){
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  
}
verAtualizacao()


export default function App() {

  
 
  const myStore = getStore();  
  const myPersistor = getPersistor();


  return(
    <Provider store={myStore}>
      <PersistGate persistor={myPersistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>

            <Stack.Screen name="Contas"
              component={Contas} 
              options={Heade}             
            />
  
  

            <Stack.Screen name="Login" component={Login}
              options={headerLogin}
            />

            <Stack.Screen name='CadUser' component={CadUser}
              options={{ headerShown: false, }}
            />

     
     
            <Stack.Screen name='Tarefas' component={Tarefas}
              options={HeaderHome}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
  
}

