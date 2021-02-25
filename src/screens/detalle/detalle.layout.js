import React from 'react';
import {View} from 'react-native';
import {Text, ListItem, Input} from 'react-native-elements';
import Moment from 'moment';
import {StyleSheet} from 'react-native';

const IndicadorLayout = (props) => {
  const {detalles, unidadMedida, valorActual} = props;
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <View style={styles.detalles}>
            <Text h2 style={styles.valor}>
              {' '}
              {unidadMedida === 'Pesos'
                ? '$ '
                : unidadMedida === 'Dólar'
                ? 'US$ '
                : '% '}{' '}
              {valorActual.valor}
            </Text>
            <Text style={styles.text}>Nombre: {detalles.nombre} </Text>
            <Text style={styles.text}>
              Fecha: {Moment(valorActual.fecha).format('YYYY-MM-DD')}{' '}
            </Text>
            <Text style={styles.text}>
              Unidad de Medida: {detalles.unidad_medida}{' '}
            </Text>
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  valor: {
    color: '#00aced',
    textAlign: 'center',
  },
  detalles: {
    display: 'flex',
    padding: 30,
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 'auto',
  },
});

export default IndicadorLayout;
