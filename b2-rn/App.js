import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Button } from 'react-native-paper';
// import { StyleSheet, Text, TextInput, View } from "react-native";
import HomeTask from './views/HomeTask';
import Calendar from './views/Calendar';
import Test from './views/Test';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Navigation stack setup
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Accueil' component={HomeTask} options={{title: 'Accueil', tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={30} />;
          }}} />
          <Tab.Screen name='Second' component={Calendar} options={{title: 'Mail', tabBarIcon: ({ color, size }) => {
            return <Icon name="mail" size={30} />;
          }}}/>
          <Tab.Screen name='Test' component={Test} options={{title: 'Test'}} />
        </Tab.Navigator>
    </NavigationContainer>

  );
}

