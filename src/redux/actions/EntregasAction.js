import {

    BUSCA_LISTA_ENTREGA

} from '../types';


export const buscaLista = (payload) =>{
    return {
      type:  BUSCA_LISTA_ENTREGA,
      payload
    }
  }

 
