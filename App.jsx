import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VehiclesScreen from  './screens/VehiclesScreen.tsx';
import SuppliesScreen from './screens/SuppliesScreen.tsx';
import NewVehicleScreen from './screens/NewVehicleScreen.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName='NewVehicleScreen'
    screenOptions={{
      headerTintColor: '#999999', headerStyle: {backgroundColor: "#111111"}}}
    >
      <Stack.Screen name='VehiclesScreen' component={VehiclesScreen} options={{title: "Veículos"}}  />
      <Stack.Screen name='SuppliesScreen' component={SuppliesScreen} options={{title: "Abastecimentos"}}/>
      <Stack.Screen name='NewVehicleScreen' component={NewVehicleScreen} options={{title: "Cadastro de Veículo"}}/>
    </Stack.Navigator>
  </NavigationContainer>
  
 
  );
};

export default App;