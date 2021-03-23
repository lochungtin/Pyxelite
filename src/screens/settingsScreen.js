import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import Slider from '../components/Slider';
import { store } from '../redux/store';
import { updateBrightness, updateSpeed } from '../redux/action';

import { generalStyles, settingsScreenStyles, } from '../styles';
import { accent, white, } from '../data/color';
import { plans } from '../data/plan';

class Screen extends React.Component {

    handleBrightness = val => {
        store.dispatch(updateBrightness(val));
    }

    handleSpeed = val => {
        store.dispatch(updateSpeed(val));
    }

    render() {
        return (
            <View style={generalStyles.screen}>
                <View style={{ height: 60 }} />
                {plans.map(plan => {
                    return (
                        <View key={plan.key} style={settingsScreenStyles.planContainer}>
                            <View style={settingsScreenStyles.planBullet}>
                                <Icon
                                    color={accent}
                                    name={plan.icon}
                                    size={25}
                                />
                                <Text style={settingsScreenStyles.planText}>
                                    {plan.displayName.toUpperCase()}
                                </Text>
                            </View>
                            <TouchableOpacity style={settingsScreenStyles.planBtn}>
                                <Icon
                                    color={white}
                                    name={'check'}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                })}
                <View style={settingsScreenStyles.sliderContainer}>
                    <Slider
                        max={100}
                        onValueChange={this.handleSpeed}
                        value={this.props.settings.speed}
                    />
                    <Slider
                        onValueChange={this.handleBrightness}
                        value={this.props.settings.brightness}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    settings: state.settings
});

export default connect(mapStateToProps)(Screen);