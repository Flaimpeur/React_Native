import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './views/HomeView'
import SecondView from './views/SecondView';
// Navigation stack setup
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Accueil' component={HomeView} options={{title: 'Accueil'}} />
          <Tab.Screen name='Second' component={SecondView} options={{title: 'Calendrier'}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

