import {

    BUSCAEMAIL,
    BUSCANOME,
    BUSCAFOTO,
    BUSCASENHA,
    BUSCASENHAREPETIDA,
    BUSCA_CPF,
    BUSCA_UID,
    BUSCA_CONTATO,
    BUSCA_NIVEL,
    
} from '../types';


const INITIAL_STATE = {
    NomePadrao: "",
    emailPadrao:'',
    SenhaPadrao: "",
    foto:'',
    SenhaRepetidaPadrao:'',
    cpf:'',
    Uid:'',
    contato : '',
    nivel : '',

}
 
export default (state=INITIAL_STATE, action)=>{ 

  if (action.type == BUSCAEMAIL){ 
      
    return {...state, emailPadrao: action.emailPadrao}
}

if (action.type == BUSCA_CPF){ 
    
    return {...state, cpf: action.cpf}
}

if (action.type == BUSCA_UID){ 
    
    return {...state, Uid: action.Uid}
}

if (action.type == BUSCANOME){ 
    
    return {...state, NomePadrao: action.NomePadrao}
}

if (action.type == BUSCAFOTO){ 
    return {...state, foto: action.payload}
}

if (action.type == BUSCASENHA){ 
   
    return {...state, SenhaPadrao: action.SenhaPadrao}
}

if (action.type == BUSCASENHAREPETIDA){ 
   
    return {...state, SenhaRepetidaPadrao: action.SenhaRepetidaPadrao}
}

if (action.type == BUSCA_CONTATO){ 
   
    return {...state, contato: action.contato}
}

if (action.type == BUSCA_NIVEL){ 
   
    return {...state, nivel: action.nivel}
}

/*
else if (action.type == ALTERARLATITUDE){ 
    return {...state, Latitude: action.payload}
}
*/


    
    return state;
}