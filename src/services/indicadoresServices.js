import {mindicadorApi} from '../utils/appisUrlConfig';
import axios from 'axios';

export const indicadoresServices = {
  getIndicadores() {
    return axios.get(mindicadorApi);
  },

  getIndicador(tipoIndicador) {
    return axios.get(mindicadorApi + '/' + tipoIndicador);
  },
};

export default indicadoresServices;
