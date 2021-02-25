import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Section,
  Text,
} from 'react-native';
import SerieElement from '../../components/serieElement.component';

const IndicadorLayout = (props) => {
  const {series, unidadMedida} = props;
  return (
    <View>
      {series.map((o, i) => (
        <SerieElement serie={o} key={i} unidadMedida={unidadMedida} />
      ))}
    </View>
  );
};

export default IndicadorLayout;
