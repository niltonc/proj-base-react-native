import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from "react-native-elements";
import styles from './styles';

function RadioButtonCustom() {
  const [btnstate, setBtnstate]= useState(false);  
  return (
      <View style={styles.containerBtn}>
       <TouchableOpacity 
       style={btnstate? styles.btnOn: styles.btnOff }
       onPress={() => setBtnstate(true)}>
       <Icon
            size={30}
            color={btnstate? "#FFF": "#757575" } 
            type="material-community"
            name="truck"
          />
        <Text style={btnstate? styles.textOn : styles.textOff}>Entrega</Text>
       </TouchableOpacity>
       <TouchableOpacity
       style={btnstate? styles.btnOff:styles.btnOn }
       onPress={() => setBtnstate(false)}>
       <Icon
            size={30}
            color={btnstate? "#757575": '#FFF'} 
            type="material-community"
            name="gift"
          />
        <Text style={btnstate? styles.textOff: styles.textOn}>Coleta</Text>
       </TouchableOpacity>
      </View>
  );
}

export default RadioButtonCustom;