import React from 'react';
import { Text, View, } from 'react-native';

import Bullet from './Bullet';

import { homeScreenStyles } from '../styles';

export default class DisplayItem extends React.Component {
    render() {
        return (
            <View style={homeScreenStyles.displayItem}>
                <Text style={homeScreenStyles.displayTitle}>
                    {this.props.title}
                </Text>
                <Bullet 
                    color={this.props.color}
                    icon={this.props.icon}
                    text={this.props.text.toUpperCase()}
                    width={300}
                />
            </View>
        );
    }
}