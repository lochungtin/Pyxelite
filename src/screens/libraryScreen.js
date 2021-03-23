import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import Bullet from '../components/Bullet';
import { deleteColor, setActiveColor } from '../redux/action';
import { store } from '../redux/store';

import { generalStyles, libraryScreenStyles } from '../styles';
import { accent, white } from '../data/color';
import { RNKey } from '../utils/randomKey';
import Bubble from '../components/Bubble';

class Screen extends React.Component {

    deleteColor = color => {
        if (this.props.activity.color === color)
            this.setColor(accent.substring(1).toUpperCase());
        store.dispatch(deleteColor(color))
    }

    setColor = color => store.dispatch(setActiveColor(color));

    render() {
        return (
            <View style={generalStyles.screen}>
                <View />
                <View style={libraryScreenStyles.selectionPanel}>
                    <Text style={libraryScreenStyles.headerText}>
                        COLOR LIBRARY
                    </Text>
                </View>
                <ScrollView style={libraryScreenStyles.scrollView}>
                    {this.props.library.map(color => {
                        return (
                            <View key={RNKey()} style={libraryScreenStyles.itemContainer}>
                                <Bullet
                                    color={'#' + color}
                                    icon={'circle'}
                                    text={'#' + color.toUpperCase()}
                                    width={275}
                                />
                                <Bubble 
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
    library: state.library,
});

export default connect(mapStateToProps)(Screen);