import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './Home';
import { About } from './About';
import { Money } from './Money';
import { Rate } from './Rate';
import { Todo } from './Todo';
import { Add } from './Add';

// import "./assets/style.css"

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
          <Stack.Screen name="About" component={About} options={{ title: 'About' }}/>
          <Stack.Screen name="Money" component={Money} options={{ title: 'Money Converter' }}/>
          <Stack.Screen name="Rate" component={Rate} options={{ title: 'Rate' }}/>
          <Stack.Screen name="Todo" component={Todo} options={{ title: 'Todo' }}/>
          <Stack.Screen name="Add" component={Add} options={{ title: 'Add' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entry: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: '#DDDDDD',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  view: {
    maxWidth: 500
  }
});
