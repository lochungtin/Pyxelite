import React from 'react';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux';

import { generalStyles } from '../styles';

class Screen extends React.Component {
    render() {
        return (
            <View style={generalStyles.screen}>
                <Text>
                    
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Screen);