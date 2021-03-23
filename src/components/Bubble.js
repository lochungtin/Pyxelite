import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { generalStyles } from '../styles';
import { white } from '../data/color';

export default class Bubble extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={generalStyles.bubble}>
                <Icon
                    color={this.props.color || white}
                    name={this.props.icon}
                    size={20}
                />
            </TouchableOpacity>
        );
    }
}