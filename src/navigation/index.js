import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import homeScreen from '../screens/homeScreen';

import { accent, bgColor, white } from '../data/color';

const Root = createBottomTabNavigator();

class AppNav extends React.Component {

    tabIcons = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let name = '';
            switch (route.name) {
                case 'Home':
                    name = 'home';
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
                    <Root.Screen name='Home' component={homeScreen} />
                </Root.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AppNav);