import axios from 'axios';
import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import Bubble from '../components/Bubble';
import Bullet from '../components/Bullet';
import Slider from '../components/Slider';
import { setActiveAction, setActiveBrightness, setActiveColor, setActiveSpeed, setPreset, } from '../redux/action';
import { store } from '../redux/store';

import { generalStyles, settingsScreenStyles, } from '../styles';

import { accent, white } from '../data/color';
import { plans } from '../data/plan';
import { RNKey } from '../utils/randomKey';
import { stretch } from '../utils/text';

class Screen extends React.Component {

    handleBrightness = val => store.dispatch(setActiveBrightness(val));

    handleSpeed = val => store.dispatch(setActiveSpeed(val));

    savePreset = (num, data) => store.dispatch(setPreset({ num, data }));

    setAction = action => {
        store.dispatch(setActiveAction(action));
        axios
            .post(`http://${this.props.ip}/action`, {
                payload: action,
            })
            .then(() => { })
            .catch(() => showMessage({
                description: 'Unable to set action',
                message: 'Error',
                type: 'danger',
            }));
    }

    setBrightness = payload => axios
        .post(`http://${this.props.ip}/gamma`, { payload })
        .then(() => { })
        .catch(() => showMessage({
            description: 'Unable to set brightness',
            message: 'Error',
            type: 'danger',
        }));

    setSpeed = payload => axios
        .post(`http://${this.props.ip}/speed`, { payload })
        .then(() => { })
        .catch(() => showMessage({
            description: 'Unable to set speed',
            message: 'Error',
            type: 'danger',
        }));

    usePreset = data => {
        store.dispatch(setActiveAction(data.action));
        store.dispatch(setActiveBrightness(data.brightness));
        store.dispatch(setActiveColor(data.color));
        store.dispatch(setActiveSpeed(data.speed));
        axios
            .post(`http://${this.props.ip}/config`, {
                color: data.color,
                action: data.action,
                speed: data.speed,
                gamma: data.brightness,
            })
            .then(() => { })
            .catch(() => showMessage({
                description: 'Unable to use preset',
                message: 'Error',
                type: 'danger',
            }));
    }

    render() {
        return (
            <View style={generalStyles.screen}>
                <View style={settingsScreenStyles.topControls}>
                    {plans.map(plan => {
                        return (
                            <View key={plan.key} style={settingsScreenStyles.planItem}>
                                <Bullet
                                    color={accent}
                                    icon={plan.icon}
                                    text={plan.displayName}
                                    width={300}
                                />
                                <Bubble
                                    color={this.props.activity.action === plan.displayName ? accent : white}
                                    icon={'check'}
                                    onPress={() => this.setAction(plan.displayName)}
                                />
                            </View>
                        );
                    })}
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Library')} style={settingsScreenStyles.midSection}>
                    <Text style={settingsScreenStyles.currentColorText}>
                        CURRENT COLOR
                    </Text>
                    <View style={{ ...settingsScreenStyles.currentColorBullet, backgroundColor: this.props.activity.color }} />
                </TouchableOpacity>
                <View style={settingsScreenStyles.bottomControls}>
                    <View style={settingsScreenStyles.presetContainer}>
                        {this.props.preset.map((data, index) => {
                            return (
                                <View key={RNKey()} style={settingsScreenStyles.presetInnerContainer}>
                                    <TouchableOpacity onPress={() => this.usePreset(data)} style={settingsScreenStyles.presetItem}>
                                        <View style={{ ...settingsScreenStyles.presetColorbar, backgroundColor: data.color }} />
                                        <View style={settingsScreenStyles.presetTextContainer}>
                                            <Text style={settingsScreenStyles.presetText}>
                                                {data.action.toUpperCase()}
                                            </Text>
                                            <Text style={settingsScreenStyles.presetText}>
                                                {'S:  ' + data.speed}
                                            </Text>
                                            <Text style={settingsScreenStyles.presetText}>
                                                {'B:  ' + data.brightness}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.savePreset(index, this.props.activity)} style={settingsScreenStyles.presetBtn}>
                                        <Icon
                                            color={white}
                                            name={'chevron-left'}
                                            size={25}
                                        />
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                    <View style={settingsScreenStyles.sliderContainer}>
                        <View style={settingsScreenStyles.slider}>
                            <Slider
                                max={100}
                                onComplete={this.setSpeed}
                                onValueChange={this.handleSpeed}
                                value={this.props.activity.speed}
                            />
                            <Text style={settingsScreenStyles.verticalText}>
                                {stretch('MOTION SPEED', 2)}
                            </Text>
                        </View>
                        <View style={settingsScreenStyles.slider}>
                            <Slider
                                onComplete={this.setBrightness}
                                onValueChange={this.handleBrightness}
                                value={this.props.activity.brightness}
                            />
                            <Text style={settingsScreenStyles.verticalText}>
                                {stretch('BRIGHTNESS', 2)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    activity: state.activity,
    ip: state.ip,
    preset: state.preset,
});

export default connect(mapStateToProps)(Screen);