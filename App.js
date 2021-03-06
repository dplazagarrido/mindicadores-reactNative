// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndicadoresScreen from './src/screens/indicadores/indicadores.screen';
import IndicadorScreen from './src/screens/indicador/indicador.screen';
import DetalleScreen from './src/screens/detalle/detalle.screen';
import {Root} from 'native-base';
import store from './src/store/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Indicadores" component={IndicadoresScreen} />
            <Stack.Screen name="Indicador" component={IndicadorScreen} />
            <Stack.Screen name="Detalles" component={DetalleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </Provider>
  );
}

export default App;
