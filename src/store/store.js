import IndicadorReducer from '../reducers/indicador.reducer';
import {combineReducers, createStore} from 'redux';

export default createStore(
  combineReducers({
    IndicadorReducer,
  }),
);
