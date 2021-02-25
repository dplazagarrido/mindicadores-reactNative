// In App.js in a new project

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndicadoresScreen from './src/screens/indicadores/indicadores.screen';
import IndicadorScreen from './src/screens/indicador/indicador.screen';
import {Root} from 'native-base';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Indicadores" component={IndicadoresScreen} />
          <Stack.Screen name="Details" component={IndicadorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
}

export default App;
