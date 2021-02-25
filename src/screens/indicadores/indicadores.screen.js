import React, {useEffect, useState} from 'react';
import IndicadoresLayout from './indicadores.layout';
import indicadoresServices from '../../services/indicadoresServices';
import {connect} from 'react-redux';
import {setCodigo, setNombre} from '../../reducers/indicador.reducer';

const IndicadoresScreen = ({
  navigation,
  setCodigoIndicadorSeleccionado,
  setNombreIndicadorSeleccionado,
}) => {
  const [indicadores, setIndicadores] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await getIndicadores();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const goToIndicador = (codigoIndicador, nombreIndicador) => {
    setCodigoIndicadorSeleccionado(codigoIndicador, {codigoIndicador});
    setNombreIndicadorSeleccionado(nombreIndicador, {nombreIndicador});
    navigation.navigate('Details');
  };

  const goToDetails = () => {
    console.log('asdasd');
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
});

export default connect(null, mapDispatchToProps)(IndicadoresScreen);
