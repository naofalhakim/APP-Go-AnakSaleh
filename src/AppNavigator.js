import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Login from './screens/Login';
import { SCREEN_NAME } from './utils/Enum';

const Stack = createNativeStackNavigator();

export default function AppNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SCREEN_NAME.LOGIN} screenOptions={{
                orientation:'portrait',
                headerShown:false,
            }}>
                <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}