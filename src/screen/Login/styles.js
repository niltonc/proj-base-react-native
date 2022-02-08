
import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 
  viewMain:{
    flex:1,
      backgroundColor:'#e0e0e0',
      borderRadius:20,
      marginHorizontal:'1%',
      paddingBottom:'5%',
      position:'absolute',
      bottom:'5%',
    paddingTop:'5%',
  
  },
  title:{
     fontSize:21, 
     fontWeight:'bold',
     
     color:'green',
     marginBottom:'5%',
    },
    textInputdefault:{
     marginHorizontal:'5%',
     marginBottom:'5%'   
    },
    btnDefault:{
     backgroundColor:'green',
     width:'50%',
     marginTop:'5%'   
    },
    textOR:{
       fontWeight:'bold',
       color:'green',
       marginTop:'5%',
       marginLeft:'2%',
       marginRight:'2%'
    },
    barra:{
        marginTop:5,
        height: StyleSheet.hairlineWidth,
        backgroundColor:'blue',
        width:'40%',
        marginTop:'7%'

    },
    btnCadastro:{
        backgroundColor:'red',
        width:'50%',
        marginTop:'5%'   
       },
       containerLogo:{
         height:'50%',
         justifyContent:'center',
         width:'100%',
        alignItems:'center',
        paddingBottom:'15%'
       }
});

export default styles;