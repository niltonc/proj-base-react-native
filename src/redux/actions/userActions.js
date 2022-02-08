import {

   
    BUSCAEMAIL,
    BUSCANOME,
    BUSCAFOTO,
    BUSCASENHA,

} from '../types';


export const buscaEmail = (payload) =>{
    return {
      type:  BUSCAEMAIL,
      payload
    }
  }

  export const buscaSenha = (payload) =>{
    return {
      type:  BUSCASENHA,
      payload
    }
  }


  export const buscaNome = (payload) =>{
    return {
      type:  BUSCANOME,
      payload
    }
  }

  export const buscaFoto = (payload) =>{
    return {
      type:  BUSCAFOTO,
      payload
    }
  }
