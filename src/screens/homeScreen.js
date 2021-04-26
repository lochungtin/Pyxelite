import axios from 'axios';
import React from 'react';
import { TextInput, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import Bubble from '../components/Bubble';
import Bullet from '../components/Bullet';
import Logo from '../components/Logo';
import { setIP, toggle } from '../redux/action';
import { store } from '../redux/store';

import { generalStyles, homeScreenStyles, } from '../styles';

import { accent, lightGrey, white, } from '../data/color';

class Screen extends React.Component {

    handleTextChange = text => store.dispatch(setIP(text));

    tryConnect = () => axios
        .get(`http://${this.props.ip}/ping`)
        .then(() => showMessage({
            description: 'Connection to server established',
            message: 'Success',
            type: 'success',
        }))
        .catch(() => showMessage({
            description: 'Unable to reach server',
            message: 'Error',
            type: 'danger',
        }));

    toggleLights = () => {
        store.dispatch(toggle());
        axios
            .get(`http://${this.props.ip}/${this.props.power ? 'off' : 'on'}`)
            .then(() => {})
            .catch(() => showMessage({
                description: 'Unable to toggle lights',
                message: 'Error',
                type: 'danger',
            }));
    }

    render() {
        return (
            <View style={{ ...generalStyles.screen, ...homeScreenStyles.screen }}>
                <Logo dim={250} style={homeScreenStyles.logo} />
                <Bullet
                    style={homeScreenStyles.displayItem}
                    width={320}
                >
                    <View style={homeScreenStyles.ipInputContainer}>
                        <Icon
                            color={accent}
                            name={'wifi'}
                            size={25}
                        />
                        <TextInput
                            keyboardType={'decimal-pad'}
                            onChangeText={this.handleTextChange}
                            placeholder={'ip address'}
                            placeholderTextColor={lightGrey}
                            style={homeScreenStyles.ipInput}
                            value={this.props.ip}
                        />
                        <Bubble
                            icon={'chevron-right'}
                            onPress={this.tryConnect}
                        />
                    </View>
                </Bullet>
                <Bullet
                    color={this.props.activity.color}
                    icon={'circle'}
                    style={homeScreenStyles.displayItem}
                    text={this.props.activity.color.toUpperCase()}
                    width={320}
                />
                <Bullet
                    color={accent}
                    icon={'label-outline'}
                    style={homeScreenStyles.displayItem}
                    text={this.props.activity.action}
                    width={320}
                />
                <Bullet
                    color={accent}
                    icon={'power'}
                    style={homeScreenStyles.displayItem}
                    text={this.props.power ? 'ON' : 'OFF'}
                    width={320}
                />
                <Bubble
                    color={this.props.power ? accent : white}
                    icon={'power'}
                    dim={75}
                    onPress={this.toggleLights}
                    size={50}
                    style={homeScreenStyles.toggleBtn}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    activity: state.activity,
    ip: state.ip,
    power: state.power,
});

export default connect(mapStateToProps)(Screen);