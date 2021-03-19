import React from 'react';
import { Text, View, } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';

import { accent, darkGrey, white } from '../data/color';
import { colorScreenStyles } from '../styles';

export default class ColorSlider extends React.Component {
    render() {
        return (
            <View style={colorScreenStyles.slider}>
                <Text style={colorScreenStyles.sliderText}>
                    {this.props.value}
                </Text>
                <VerticalSlider
                    borderRadius={5}
                    height={275}
                    maximumTrackTintColor={darkGrey}
                    max={this.props.max || 255}
                    minimumTrackTintColor={'#3e3e3e'}
                    min={0}
                    onChange={this.props.onValueChange}
                    step={1}
                    value={this.props.value}
                    width={32}
                />
            </View>
        );
    }
}