import axios from 'axios';
import React from 'react';
import { ScrollView, Text, View, } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { connect } from 'react-redux';

import Bubble from '../components/Bubble';
import Bullet from '../components/Bullet';
import { deleteColor, setActiveColor, } from '../redux/action';
import { store } from '../redux/store';

import { generalStyles, libraryScreenStyles, } from '../styles';

import { accent, white } from '../data/color';
import { RNKey } from '../utils/randomKey';

class Screen extends React.Component {

    deleteColor = color => {
        if (this.props.activity.color === color)
            this.setColor(accent.substring(1).toUpperCase());
        store.dispatch(deleteColor(color));
    }

    setColor = payload => {
        store.dispatch(setActiveColor(payload));
        axios
            .post(`http://${this.props.ip}/color`, { payload })
            .then(() => {})
            .catch(() => showMessage({
                description: 'Unable to set color',
                message: 'Error',
                type: 'danger',
            }));
    }

    render() {
        return (
            <View style={generalStyles.screen}>
                <View />
                <View style={libraryScreenStyles.titlePanel}>
                    <Text style={libraryScreenStyles.headerText}>
                        COLOR LIBRARY
                    </Text>
                </View>
                <ScrollView style={libraryScreenStyles.scrollView}>
                    {this.props.library.map(color => {
                        return (
                            <View key={RNKey()} style={libraryScreenStyles.itemContainer}>
                                <Bullet
                                    color={color}
                                    icon={'circle'}
                                    text={color.toUpperCase()}
                                    width={275}
                                />
                                <Bubble
                                    color={this.props.activity.color === color ? accent : white}
                                    icon={'check'}
                                    onPress={() => this.setColor(color)}
                                />
                                <Bubble
                                    icon={'trash-can-outline'}
                                    onPress={() => this.deleteColor(color)}
                                />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    activity: state.activity,
    ip: state.ip,
    library: state.library,
});

export default connect(mapStateToProps)(Screen);