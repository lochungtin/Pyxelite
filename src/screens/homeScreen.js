import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux';

class Screen extends React.Component {
    render() {
        return (
            <View>
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