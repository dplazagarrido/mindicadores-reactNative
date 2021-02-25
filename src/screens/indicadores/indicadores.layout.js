import React from 'react';
import {View, Text} from 'react-native';
import IndicadorElement from '../../components/indicadorElement.component';

const IndicadoresLayout = (props) => {
  const {indicadores, goToIndicador} = props;
  return (
    <View>
      {indicadores.map((o, i) => (
        <IndicadorElement indicador={o} key={i} goToIndicador={goToIndicador} />
      ))}
    </View>
  );
};

export default IndicadoresLayout;
