import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import TransfareScreen from './screens/transfare';
import TransfareScreenTwo from './screens/transfareNumtwo';


import CounterProvider from './store/contextconter';
import RandomProvider from './store/randomContext';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CounterProvider>
    <RandomProvider>
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="TransfareScreen" component={TransfareScreen} />
          <Stack.Screen name="ScreenTwo" component={TransfareScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
      </RandomProvider>
    </CounterProvider>
  );
}
