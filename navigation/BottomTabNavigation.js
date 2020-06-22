import React from "react";
import {createStackNavigator, HeaderTitle} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, EvilIcons, Feather, FontAwesome5,AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import HomeScreen from "../BottomPages/HomeScreen";
import ReportScreen from "../BottomPages/ReportScreen";
import SettingsScreen from "../BottomPages/SettingsScreen";
import VitalsScreen from "../BottomPages/VitalsScreen";
import StackNavigation from "./StackNavigation";
import DashboardScreen from "../BottomPages/DashboardScreen";

const MainTab=createBottomTabNavigator();
const StackNavigator=createStackNavigator();

const BottomTabNavigation=()=>{
    return(
        <MainTab.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <MainTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                
                tabBarIcon:({focused})=>(
                    <SimpleLineIcons
                    name="home"
                    size={24}
                    color="black"
                    />   
                )                
    
            }}
            />
            
            <MainTab.Screen
            name="Symptoms"
            component={VitalsScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <AntDesign
                    name="warning"
                    size={24}
                    color="black"
                    />
                )
            }}
            />     
             <MainTab.Screen
            name="Measures"
            component={ReportScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <AntDesign
                    name="Safety"
                    size={24}
                    color="black"
                    />
                )
            }}
            />
            
        </MainTab.Navigator>
    )
}

export default BottomTabNavigation;