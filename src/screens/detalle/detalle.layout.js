import React from 'react';
import {View} from 'react-native';
import {Text, ListItem} from 'react-native-elements';
import Moment from 'moment';
import {StyleSheet} from 'react-native';
import {LineChart, YAxis, XAxis, Grid} from 'react-native-svg-charts';

const IndicadorLayout = (props) => {
  const {
    detalles,
    unidadMedida,
    valorActual,
    valoresGraficosEjeY,
    valoresGraficosEjeX,
  } = props;
  const contentInset = {top: 20, bottom: 20};
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
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
      <View style={{height: 200, flexDirection: 'row'}}>
        <YAxis
          data={valoresGraficosEjeY}
          style={{marginBottom: 10}}
          contentInset={{top: 10, bottom: 10}}
          svg={{fontSize: 10, fill: 'grey'}}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <LineChart
            style={{flex: 1}}
            data={valoresGraficosEjeY}
            contentInset={{top: 10, bottom: 10}}
            svg={{stroke: 'rgb(134, 65, 244)'}}>
            <Grid />
          </LineChart>
          <XAxis
            style={{marginHorizontal: 10, height: 10}}
            data={valoresGraficosEjeX}
            formatLabel={(value, index) => index}
            contentInset={{left: 10, right: 10}}
            svg={{axefontSize: 10, fill: 'grey'}}
          />
        </View>
      </View>
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
