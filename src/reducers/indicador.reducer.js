import {makeType, mac} from '../utils/redux-utils';
const t = makeType('INDICADOR');

const initialState = {
  codigo: undefined,
  nombre: undefined,
};

const SET_CODIGO = t('SET_CODIGO');
const SET_NOMBRE = t('SET_NOMBRE');

export const setCodigo = mac(SET_CODIGO, 'payload');
export const setNombre = mac(SET_NOMBRE, 'payload');

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CODIGO:
      return {...initialState, codigo: action.payload};
    case SET_NOMBRE:
      return {...state, nombre: action.payload};
    default:
      return state;
  }
};
