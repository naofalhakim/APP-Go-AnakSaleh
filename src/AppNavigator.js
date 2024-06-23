import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import { SCREEN_NAME } from './utils/Enum';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function AppNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SCREEN_NAME.LOGIN} screenOptions={{
                orientation:'portrait',
                headerShown:false,
            }}>
                <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login}/>
                <Stack.Screen name={SCREEN_NAME.FORGOT_PASSWORD} component={ForgotPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}