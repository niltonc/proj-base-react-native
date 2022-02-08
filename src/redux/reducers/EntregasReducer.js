import {

    BUSCA_OPTIONS,
     
 } from '../types';
 
 
 const INITIAL_STATE = {
     Lista: [],
     ListaItem:[],
     options: [
        { key: 1, label: "Engenheiro de Automação" },
        { key: 2, label: "Desenvolver Fullstack" },
        { key: 3, label: "Médico" },
        { key: 4, label: "Professor" },
        { key: 5, label: "Outro" },
     ],
     empresas: [],
     codePlan : "",
 
 }
  
 export default (state=INITIAL_STATE, action)=>{ 

if(action.type == BUSCA_OPTIONS){ 
   
    return {...state, options: [...state.options,action.options]}
}

     
     return state
 }
