import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VehiclesScreen from  './screens/exhibition/VehiclesScreen.tsx';
import { SupplyScreen } from './screens/exhibition/SupplyScreen.tsx';
import NewVehicleScreen from './screens/creation/NewVehicleScreen.tsx';
import { NewSupplyScreen } from './screens/creation/NewSupplyScreen.tsx';
import { ConsumptionScreen } from './screens/exhibition/ConsumptionScreen.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName='VehicleScreen' screenOptions={{headerTintColor: '#999999', headerStyle: {backgroundColor: "#111111"}, headerTitleAlign: "center"}}>
      <Stack.Screen name='VehiclesScreen' component={VehiclesScreen} options={{headerTitle: "Veículos",}}/>
      <Stack.Screen name='NewVehicleScreen' component={NewVehicleScreen} options={{title: "Cadastro de Veículo"}}/>
      <Stack.Screen name='SupplyScreen' component={SupplyScreen} options={{headerTitle: "Abastecimento"}}/>
      <Stack.Screen name="NewSupplyScreen" component={NewSupplyScreen} options={{title: "Abastecer"}}/>
      <Stack.Screen name="ConsumptionScreen" component={ConsumptionScreen} options = {{title: "Consumo"}}/>
    </Stack.Navigator>
  </NavigationContainer>
  
 
  );
};

export default App;