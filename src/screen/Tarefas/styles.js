import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fotoView:{
    width:'100%',
    height:'10%',
    alignItems:'center',
    marginTop:'5%',
    marginBottom : '7%'
 
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  cardCliente: {
    marginHorizontal: "5%",
    marginTop: "2.5%",
    paddingBottom: "5%",
    borderWidth: 0.3,
    paddingTop: 10,
    borderRadius: 5,
  },
  cltTxt: {
    marginStart: 8,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    marginHorizontal: "2%",
    marginTop: 5,
    width: "94%",
  },
  inputElement: {
    borderColor: "rgba(255,255,255,0)",
  },
  imputBairro: {
    marginHorizontal: "2%",
    marginTop: 5,
    width: "94%",
    height: 55,
    borderWidth: 0.8,
    borderColor: "#757575",
    borderRadius: 5,
    color: "#757575",
  },
  cardDestino: {
    marginTop: "2.5%",
    marginHorizontal: "5%",
    paddingBottom: "5%",
    paddingTop: "2.5%",
    borderWidth: 0.3,
    paddingHorizontal: "2.5%",
  },
  searchDestino: {
    marginHorizontal: "5%",
    marginTop: 8,
  },
  cardPag: {
    marginTop: "2.5%",
    marginHorizontal: "5%",
    paddingBottom: "5%",
    paddingTop: "2.5%",
    borderWidth: 0.3,
    paddingHorizontal: "2.5%",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: "12%",
    marginHorizontal: "8%",
    paddingHorizontal: "2%",
    backgroundColor: "#eee",
    borderWidth: 0.2,
    borderColor: "#333",
    marginTop: "3%",
  },
  textDefault: {
    fontWeight: "bold",
    fontSize: 17,
    marginStart: "8%",
    color: "#1FD05F",
  },
  viewModal: {
    paddingTop: "5%",
    paddingBottom: "5%",
    marginHorizontal: "5%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  radio: {
    marginHorizontal: "5%",
    borderWidth: 0.1,
    paddingHorizontal: 5,
  },
  textBairro: {
    fontSize: 14,
    fontWeight: "bold",
    marginStart: 12,
  },
  containerFlatBairro: {
    paddingTop: 8,
    paddingBottom: 8,
    borderColor:'#333',
    borderWidth: 0.6,
    marginBottom: 5,
    borderRadius: 5,
  },
  btnBairro:{
    borderRadius: 5,
    borderWidth: 0.7,
    paddingStart: 8,
    borderColor: "#333",
    height: "12%",
    color: "#757575",
    width: '94%',
    alignContent: 'center',
    justifyContent: 'center',
    height: 55,
    marginTop: 8,
    backgroundColor: '#f5f5f5'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 16,
    backgroundColor: '#2196f3',
    color: '#FFF',
  },
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
  },
  Header: {
    backgroundColor: '#1FD05F',
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: '4%',
  },
  textHeader: {
    marginTop: '5%',
    color: '#FFF',
    marginStart: '5%',
    fontSize: 20,
    fontWeight: '700',
  },

  textInputdefault:{
    marginHorizontal:'5%',
    marginTop:'2%',
    height: 60,
    width: '90%',
   },

});

export default styles;
