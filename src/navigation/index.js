import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { connect } from 'react-redux';

import homeScreen from '../screens/homeScreen';

const Root = createBottomTabNavigator();

class AppNav extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Root.Navigator>
                    <Root.Screen name='Home' component={homeScreen} />
                </Root.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AppNav);