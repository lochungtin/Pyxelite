import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { generalStyles } from '../styles';

import { white } from '../data/color';

export default class Bubble extends React.Component {
    render() {
        const dim = this.props.dim ? {
            borderRadius: this.props.dim / 2,
            height: this.props.dim,
            width: this.props.dim,
        } : {
            borderRadius: 20,
            height: 40,
            width: 40,
        }

        return (
            <TouchableOpacity onPress={this.props.onPress} style={{...dim, ...generalStyles.bubble, ...this.props.style}}>
                <Icon
                    color={this.props.color || white}
                    name={this.props.icon}
                    size={this.props.size || 20}
                />
            </TouchableOpacity>
        );
    }
}