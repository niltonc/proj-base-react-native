import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '4%',
  },
  btnOn: {
    paddingBottom: 10,
    paddingTop:10,
    paddingHorizontal:15,
    backgroundColor: '#1FD05F',

  },
  btnOff: {
    paddingBottom: 10,
    paddingTop:10,
    paddingHorizontal:15,
    backgroundColor: "#e0e0e0",

  },
  textOn: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  textOff: {
    color: '#757575',
    fontWeight: 'bold',
  }

});

export default styles;