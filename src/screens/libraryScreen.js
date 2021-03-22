import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { deleteColor, setActiveColor } from '../redux/action';
import { store } from '../redux/store';

import { generalStyles, libraryScreenStyles } from '../styles';
import { accent, white } from '../data/color';
import { RNKey } from '../utils/randomKey';

class Screen extends React.Component {

    deleteColor = color => {
        if (this.props.activity.color === color)
            this.setColor(accent.substring(1));
        store.dispatch(deleteColor(color))
    }

    setColor = color => store.dispatch(setActiveColor(color));

    render() {
        return (
            <View style={generalStyles.screen}>
                <View />
                <View style={libraryScreenStyles.selectionPanel}>
                    <Text style={libraryScreenStyles.headerText}>
                        Color Library
                    </Text>
                </View>
                <ScrollView style={libraryScreenStyles.scrollView}>
                    {this.props.library.map(color => {
                        return (
                            <View key={RNKey()} style={libraryScreenStyles.itemContainer}>
                                <View style={libraryScreenStyles.bullet}>
                                    <View style={{ ...libraryScreenStyles.colorLabel, backgroundColor: '#' + color }} />
                                    <Text style={libraryScreenStyles.colorText}>
                                        {'#' + color}
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => this.setColor(color)} style={libraryScreenStyles.button}>
                                    <Icon
                                        color={white}
                                        name={'check'}
                                        size={25}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.deleteColor(color)} style={libraryScreenStyles.button}>
                                    <Icon
                                        color={white}
                                        name={'trash-can-outline'}
                                        size={25}
                                    />
                                </TouchableOpacity>
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
    library: state.library,
});

export default connect(mapStateToProps)(Screen);