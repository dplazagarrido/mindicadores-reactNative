import React from 'react';
import {View} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';

const IndicadorElement = (props) => {
  const {indicador, goToIndicador, goToDetails} = props;
  return (
    <View>
      {indicador.nombre ? (
        <ListItem
          onPress={() =>
            goToIndicador(
              indicador.codigo,
              indicador.nombre,
              indicador.unidad_medida,
            )
          }
          bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{indicador.nombre}</ListItem.Title>
            <ListItem.Subtitle>{indicador.unidad_medida}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem />
          <Icon
            name="error-outline"
            color="#00aced"
            onPress={() =>
              goToDetails(
                indicador.codigo,
                indicador.nombre,
                indicador.unidad_medida,
              )
            }
          />
          <ListItem.Chevron />
        </ListItem>
      ) : undefined}
    </View>
  );
};

export default IndicadorElement;
