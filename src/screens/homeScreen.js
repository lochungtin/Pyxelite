import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import DisplayItem from '../components/DisplayItem';
import Logo from '../components/Logo';
import { toggle } from '../redux/action';
import { store } from '../redux/store';

import { accent, white, } from '../data/color';
import { generalStyles, homeScreenStyles, } from '../styles';


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
                <TouchableOpacity style={homeScreenStyles.toggleBtn} onPress={() => store.dispatch(toggle())}>
                    <Icon
                        color={this.props.power ? accent : white}
                        name={'power'}
                        size={50}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    activity: state.activity,
    power: state.power,
});

export default connect(mapStateToProps)(Screen);