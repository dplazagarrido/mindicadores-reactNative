import React, {useEffect, useState} from 'react';
import IndicadorLayout from './indicador.layout';
import indicadoresServices from '../../services/indicadoresServices';
import {connect} from 'react-redux';

const IndicadorScreen = ({navigation, codigo, nombre, unidadMedida}) => {
  const [valores, setValores] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        navigation.setOptions({title: nombre});
        await getIndicador(codigo);
        console.log({unidadMedida});
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const getIndicador = async (indicador) => {
    const response = await indicadoresServices.getIndicador(indicador);
    setValores(response.data.serie);
  };
  return <IndicadorLayout series={valores} unidadMedida={unidadMedida} />;
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    codigo: state.IndicadorReducer.codigo,
    nombre: state.IndicadorReducer.nombre,
    unidadMedida: state.IndicadorReducer.unidadMedida,
  };
};

export default connect(mapStateToProps)(IndicadorScreen);
