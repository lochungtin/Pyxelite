import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Bubble from '../components/Bubble';
import DisplayItem from '../components/DisplayItem';
import Logo from '../components/Logo';
import { toggle } from '../redux/action';
import { store } from '../redux/store';

import { generalStyles, homeScreenStyles, } from '../styles';

import { accent, white, } from '../data/color';

class Screen extends React.Component {
    render() {
        return (
            <View style={{ ...generalStyles.screen, ...homeScreenStyles.screen }}>
                <Logo dim={250} style={homeScreenStyles.logo} />
                <DisplayItem
                    color={'#' + this.props.activity.color}
                    icon={'circle'}
                    text={'#' + this.props.activity.color}
                    title={'COLOR'}
                />
                <DisplayItem
                    color={white}
                    icon={'label-outline'}
                    text={this.props.activity.action}
                    title={'ACTION'}
                />
                <DisplayItem
                    color={white}
                    icon={'power'}
                    text={this.props.power ? 'ON' : 'OFF'}
                    title={'POWER'}
                />
                <Bubble
                    color={this.props.power ? accent : white}
                    icon={'power'}
                    dim={75}
                    onPress={() => store.dispatch(toggle())}
                    size={50}
                    style={homeScreenStyles.toggleBtn}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    activity: state.activity,
    power: state.power,
});

export default connect(mapStateToProps)(Screen);