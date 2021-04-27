import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import FlashMessage from "react-native-flash-message";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colorScreen from '../screens/colorScreen';
import homeScreen from '../screens/homeScreen';
import libraryScreen from '../screens/libraryScreen';
import settingsScreen from '../screens/settingsScreen';

import { accent, bgColor, white, } from '../data/color';

const Root = createBottomTabNavigator();

export default class AppNav extends React.Component {

    tabIcons = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let name = '';
            switch (route.name) {
                case 'Settings':
                    name = 'cog';
                    break;
                case 'Home':
                    name = 'home';
                    break;
                case 'Color':
                    name = 'palette';
                    break;
                case 'Library':
                    name = 'text-box-outline';
                    break;
                default:
                    name = 'empty';
                    break;
            }
            return <Icon
                color={color}
                name={name}
                size={size}
            />
        }
    })

    render() {
        return (
            <NavigationContainer>
                <StatusBar backgroundColor={bgColor} />
                <Root.Navigator
                    initialRouteName='Home'
                    screenOptions={this.tabIcons}
                    tabBarOptions={{
                        activeBackgroundColor: bgColor,
                        activeTintColor: accent,
                        inactiveBackgroundColor: bgColor,
                        inactiveTintColor: white,
                        keyboardHidesTabBar: true,
                        showLabel: false,
                        style: {
                            backgroundColor: bgColor,
                            borderTopColor: 'transparent',
                        },
                    }}
                >
                    <Root.Screen name='Library' component={libraryScreen} />
                    <Root.Screen name='Settings' component={settingsScreen} />
                    <Root.Screen name='Home' component={homeScreen} />
                    <Root.Screen name='Color' component={colorScreen} />
                </Root.Navigator>
                <FlashMessage position='center' style={{ height: 75 }} />
            </NavigationContainer>
        );
    }
}