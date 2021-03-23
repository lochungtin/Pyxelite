import React from 'react';
import { Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { generalStyles } from '../styles';

export default class Bullet extends React.Component {
    render() {
        return (
            <View style={{
                ...generalStyles.bullet,
                ...this.props.style,
                justifyContent: this.props.children ? 'center' : 'flex-start',
                width: this.props.width,
            }}>
                {this.props.children ? this.props.children : <>
                    <Icon
                        color={this.props.color}
                        name={this.props.icon}
                        size={25}
                        style={generalStyles.bulletIcon}
                    />
                    <Text style={generalStyles.bulletText}>
                        {this.props.text.toUpperCase()}
                    </Text>
                </>}
            </View>
        );
    }
}