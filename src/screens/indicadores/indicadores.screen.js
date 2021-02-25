import React, {useEffect, useState} from 'react';
import IndicadoresLayout from './indicadores.layout';
import indicadoresServices from '../../services/indicadoresServices';

const IndicadoresScreen = ({navigation}) => {
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

  const goToIndicador = (codigoIndicador) => {
    navigation.navigate('Details', {codigoIndicador});
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
    />
  );
};

export default IndicadoresScreen;
