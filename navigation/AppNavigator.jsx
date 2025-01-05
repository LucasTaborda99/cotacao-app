import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RecoveryPasswordScreen from '../screens/RecoveryPasswordScreen';
import OptionsScreen from '../screens/OptionsScreen';
import AdicionarCotacao from '../screens/AdicionarCotacao';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="RecoveryPassword" component={RecoveryPasswordScreen} options={{ title: 'Recuperar Senha' }} />
    <Stack.Screen name="Options" component={OptionsScreen} options={{ title: 'Opções' }} />
    <Stack.Screen name="AdicionarCotacao" component={AdicionarCotacao} options={{ title: 'Adicionar Cotação' }} />
  </Stack.Navigator>
);

export default AppNavigator;
