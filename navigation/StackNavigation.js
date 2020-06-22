import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CoversStack from '../Front_StackPages/CoversStack';
import VerficationStack from "../Front_StackPages/VerificationStack";
import GeneralInfo from "../Front_StackPages/GeneralInfo";

import BottomTabNavigation from "./BottomTabNavigation";
import DashboardScreen from '../BottomPages/DashboardScreen';


const Stack= createStackNavigator();

const HomeStack=()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen name="Covers" component={CoversStack}  />
            <Stack.Screen name="Verification" component={VerficationStack} />           
        </Stack.Navigator>

    )
}


const StackNavigation=()=>{
    return(
        <Stack.Navigator 
        options={{
            headerShown:false
        }} 
        >
            <Stack.Screen
            name="Covers"
            component={HomeStack}
            options={{
                headerTitle:false,
                
            }}
            
            />

            <Stack.Screen
            name="GeneralInfo"
            component={GeneralInfo}
            options={{
                headerTitle:false,
                
            }}
            
            />

            <Stack.Screen
            name="Home"
            component={BottomTabNavigation}
            options={{
                headerTitle:false,
                
            }}
            />
            <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
                headerTitle:false,
                
            }}
            />
               
            
        </Stack.Navigator>
    )
}

export default StackNavigation;