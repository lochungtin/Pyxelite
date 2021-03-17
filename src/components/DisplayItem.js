import React from 'react';
import { Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { homeScreenStyles } from '../styles';

export default class DisplayItem extends React.Component {
    render() {
        return (
            <View>
                <Text style={homeScreenStyles.displayTitle}>
                    {this.props.title}
                </Text>
                <View style={homeScreenStyles.bullet}>
                    <Icon 
                        color={this.props.color}
                        name={this.props.icon}
                        size={30}
                    />
                    <Text style={homeScreenStyles.displayValue}>
                        {this.props.value}
                    </Text>
                </View>
            </View>
        );
    }
}