import React from 'react';
import {View} from 'react-native';
import {Text, Icon, ListItem} from 'react-native-elements';
import Moment from 'moment';
import {StyleSheet} from 'react-native';

const serieElement = (props) => {
  const {serie, unidadMedida} = props;
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.fecha}>
            {Moment(serie.fecha).format('YYYY-MM-DD')}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Title style={styles.valor}>
            {' '}
            {unidadMedida === 'Pesos'
              ? '$ '
              : unidadMedida === 'Dólar'
              ? 'US$ '
              : '% '}{' '}
            {serie.valor}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem />
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  fecha: {
    paddingLeft: 20,
    color: '#00aced',
  },
  valor: {
    paddingLeft: 20,
  },
});

export default serieElement;
