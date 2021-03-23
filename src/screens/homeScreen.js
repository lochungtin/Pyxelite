import React from 'react';
import { TextInput, View } from 'react-native';
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

    tryConnect = () => {
        
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
                            color={white}
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
                    color={white}
                    icon={'label-outline'}
                    style={homeScreenStyles.displayItem}
                    text={this.props.activity.action}
                    width={320}
                />
                <Bullet
                    color={white}
                    icon={'power'}
                    style={homeScreenStyles.displayItem}
                    text={this.props.power ? 'ON' : 'OFF'}
                    width={320}
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
    ip: state.ip,
    power: state.power,
});

export default connect(mapStateToProps)(Screen);