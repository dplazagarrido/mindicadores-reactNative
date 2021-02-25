import React, {useEffect, useState} from 'react';
import IndicadoresLayout from './indicadores.layout';
import indicadoresServices from '../../services/indicadoresServices';
import {connect} from 'react-redux';
import {
  setCodigo,
  setNombre,
  setUnidadMedida,
} from '../../reducers/indicador.reducer';

const IndicadoresScreen = ({
  navigation,
  setCodigoIndicadorSeleccionado,
  setNombreIndicadorSeleccionado,
  setUnidadMedidaIndicadorSeleccionado,
}) => {
  const [indicadores, setIndicadores] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await getIndicadores();
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const goToIndicador = (codigoIndicador, nombreIndicador, unidadIndicador) => {
    setCodigoIndicadorSeleccionado(codigoIndicador, {codigoIndicador});
    setNombreIndicadorSeleccionado(nombreIndicador, {nombreIndicador});
    setUnidadMedidaIndicadorSeleccionado(unidadIndicador, {unidadIndicador});
    navigation.navigate('Indicador');
  };

  const goToDetails = (codigoIndicador, nombreIndicador, unidadIndicador) => {
    setCodigoIndicadorSeleccionado(codigoIndicador, {codigoIndicador});
    setNombreIndicadorSeleccionado(nombreIndicador, {nombreIndicador});
    setUnidadMedidaIndicadorSeleccionado(unidadIndicador, {unidadIndicador});
    navigation.navigate('Detalles');
  };

  const getIndicadores = async () => {
    const response = await indicadoresServices.getIndicadores();
    const arrayIndicadores = [];
    for (const property in response.data) {
      arrayIndicadores.push(response.data[property]);
    }
    setIndicadores(arrayIndicadores);
  };
  return (
    <IndicadoresLayout
      indicadores={indicadores}
      goToIndicador={goToIndicador}
      goToDetails={goToDetails}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCodigoIndicadorSeleccionado: (codigo) => dispatch(setCodigo(codigo)),
  setNombreIndicadorSeleccionado: (nombre) => dispatch(setNombre(nombre)),
  setUnidadMedidaIndicadorSeleccionado: (unidad) =>
    dispatch(setUnidadMedida(unidad)),
});

export default connect(null, mapDispatchToProps)(IndicadoresScreen);
