import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import { SCREEN_NAME } from './utils/Enum';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
import COLOR from './utils/ColorSystem';
import MainMenu from './screens/MainMenu';

const Stack = createNativeStackNavigator();

export default function AppNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SCREEN_NAME.MAIN_MENU} screenOptions={{
                orientation:'portrait',
                headerShown:false,
                contentStyle:{
                    backgroundColor: COLOR.WHITE,
                }
            }}>
                <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login}/>
                <Stack.Screen name={SCREEN_NAME.FORGOT_PASSWORD} component={ForgotPassword}/>
                <Stack.Screen name={SCREEN_NAME.REGISTER} component={Register}/>
                <Stack.Screen name={SCREEN_NAME.RESET_PASSWORD} component={ResetPassword}/>
                <Stack.Screen name={SCREEN_NAME.MAIN_MENU} component={MainMenu}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}