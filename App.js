import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import GlobalStyles from './GlobalStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';



//1)Set up redux
export default function App() {

  const Stack = createStackNavigator();


  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
