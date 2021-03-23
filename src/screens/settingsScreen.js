import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import Bullet from '../components/Bullet';
import Slider from '../components/Slider';
import { store } from '../redux/store';
import { setActiveAction, updateBrightness, updateSpeed } from '../redux/action';

import { generalStyles, settingsScreenStyles, } from '../styles';
import { accent, white, } from '../data/color';
import { plans } from '../data/plan';
import Bubble from '../components/Bubble';

class Screen extends React.Component {

    handleBrightness = val => {
        store.dispatch(updateBrightness(val));
    }

    handleSpeed = val => {
        store.dispatch(updateSpeed(val));
    }

    setAction = action => {
        store.dispatch(setActiveAction(action))
    }

    render() {
        return (
            <View style={generalStyles.screen}>
                <View style={{ height: 60 }} />
                {plans.map(plan => {
                    return (
                        <View key={plan.key} style={settingsScreenStyles.planContainer}>
                            <Bullet
                                color={accent}
                                icon={plan.icon}
                                text={plan.displayName}
                                width={300}
                            />
                            <Bubble 
                                icon={'check'}
                                onPress={() => this.setAction(plan.displayName)}
                            />
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