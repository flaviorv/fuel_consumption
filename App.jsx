import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VehiclesScreen from  './screens/exhibition/VehiclesScreen.tsx';
import SuppliesScreen from './screens/exhibition/SuppliesScreen.tsx';
import NewVehicleScreen from './screens/creation/NewVehicleScreen.tsx';
import { NewSupplyScreen } from './screens/creation/NewSupplyScreen.tsx';
import { Image, View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName='VehicleScreen' screenOptions={{headerTintColor: '#999999', headerStyle: {backgroundColor: "#111111"},}}>
      <Stack.Screen name='VehiclesScreen' component={VehiclesScreen} options={{title: "Veículos",}}/>
      <Stack.Screen name='NewVehicleScreen' component={NewVehicleScreen} options={{title: "Cadastro de Veículo"}}/>
      <Stack.Screen name='SuppliesScreen' component={SuppliesScreen} options={{title: "Abastecimentos"}}/>
      <Stack.Screen name="NewSupplyScreen" component={NewSupplyScreen} options={{title: "Abastecer"}}/>
    </Stack.Navigator>
  </NavigationContainer>
  
 
  );
};

export default App;