import React from 'react';
import { Text, View, } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';

import { sliderStyles } from '../styles';

import { darkGrey, grey, } from '../data/color';

export default class Slider extends React.Component {
    render() {
        return (
            <View style={sliderStyles.slider}>
                <Text style={sliderStyles.sliderText}>
                    {this.props.value}
                </Text>
                <VerticalSlider
                    borderRadius={10}
                    height={275}
                    maximumTrackTintColor={darkGrey}
                    max={this.props.max || 255}
                    minimumTrackTintColor={grey}
                    min={0}
                    onChange={this.props.onValueChange}
                    step={1}
                    value={this.props.value}
                    width={40}
                />
            </View>
        );
    }
}