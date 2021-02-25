import React, {useEffect, useState} from 'react';
import DetalleLayout from './detalle.layout';
import indicadoresServices from '../../services/indicadoresServices';
import {connect} from 'react-redux';
import Moment from 'moment';

const DetalleScreen = ({navigation, codigo, nombre, unidadMedida}) => {
  const [detalles, setDetalles] = useState({});
  const [valorActual, setValorActual] = useState({});
  const [valoresGraficosEjeY, setValoresGraficosEjeY] = useState([]);
  const [valoresGraficosEjeX, setValoresGraficosEjeX] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        navigation.setOptions({title: nombre});
        await getIndicador(codigo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const getIndicador = async (indicador) => {
    const response = await indicadoresServices.getIndicador(indicador);
    setDetalles(response.data);
    setValorActual(response.data.serie[0]);
    const tempData = response.data.serie.slice(0, 10);
    let resultY = tempData.map((a) => a.valor);
    let resultX = tempData.map((a) => Moment(a.fecha).format('YYYY-MM-DD'));
    console.log(resultX);
    setValoresGraficosEjeY(resultY);
    setValoresGraficosEjeX(resultX);
  };

  return (
    <DetalleLayout
      detalles={detalles}
      valorActual={valorActual}
      unidadMedida={unidadMedida}
      valoresGraficosEjeY={valoresGraficosEjeY}
      valoresGraficosEjeX={valoresGraficosEjeX}
    />
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    codigo: state.IndicadorReducer.codigo,
    nombre: state.IndicadorReducer.nombre,
    unidadMedida: state.IndicadorReducer.unidadMedida,
  };
};

export default connect(mapStateToProps)(DetalleScreen);
