import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTask from './views/HomeTask';
import Calendar from './views/Calendar';
import Test from './views/Test';
// Navigation stack setup
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Accueil' component={HomeTask} options={{title: 'Accueil'}} />
          <Tab.Screen name='Second' component={Calendar} options={{title: 'Calendrier'}}/>
          <Tab.Screen name='Test' component={Test} options={{title: 'Test'}} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

