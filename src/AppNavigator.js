import React, { useEffect, useRef } from 'react';
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
import UpdateProfile from './screens/UpdateProfile';
import UpdatePassword from './screens/UpdatePassword';
import LearningModuleScreen from './screens/LearningModule';

const Stack = createNativeStackNavigator();

export default function AppNav() {
    const navRef = useRef();
    
    useEffect(() => {
    },[])
    
    return (
        <NavigationContainer ref={navRef}>
            <Stack.Navigator initialRouteName={SCREEN_NAME.LOGIN} screenOptions={{
                orientation: 'portrait',
                headerShown: false,
                contentStyle: {
                    backgroundColor: COLOR.WHITE,
                }
            }}>
                <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
                <Stack.Screen name={SCREEN_NAME.FORGOT_PASSWORD} component={ForgotPassword} />
                <Stack.Screen name={SCREEN_NAME.REGISTER} component={Register} />
                <Stack.Screen name={SCREEN_NAME.RESET_PASSWORD} component={ResetPassword} />
                <Stack.Screen name={SCREEN_NAME.UPDATE_PROFILE} component={UpdateProfile} />
                <Stack.Screen name={SCREEN_NAME.UPDATE_PASSWORD} component={UpdatePassword} />
                <Stack.Screen name={SCREEN_NAME.MAIN_MENU} component={MainMenu} />
                <Stack.Screen name={SCREEN_NAME.LEARNING_MODULE} component={LearningModuleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}