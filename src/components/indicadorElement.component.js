import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Section,
} from 'react-native';
import {Text, Icon, ListItem} from 'react-native-elements';

const IndicadorElement = (props) => {
  const {indicador, goToIndicador} = props;
  return (
    <View>
      {indicador.nombre ? (
        <ListItem onPress={() => console.log('asdasads')} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{indicador.nombre}</ListItem.Title>
            <ListItem.Subtitle>{indicador.unidad_medida}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon
            name="error-outline"
            color="#00aced"
            onPress={() => goToIndicador(indicador.codigo)}
          />
          <ListItem.Chevron />
        </ListItem>
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {},
  indicadorElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default IndicadorElement;
