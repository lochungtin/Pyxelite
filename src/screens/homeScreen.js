import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux';

import { generalStyles } from '../styles';

class Screen extends React.Component {
    render() {
        return (
            <View style={generalStyles.screen}>
                <StatusBar />
                <Text>
                    Home Screen
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Screen);