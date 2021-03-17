import React from 'react';
import { Image, Text, View, } from 'react-native';
import { connect } from 'react-redux';

import { generalStyles } from '../styles';

class Screen extends React.Component {
    render() {
        return (
            <View style={generalStyles.screen}>
                <Image  />
                <Text>
                    
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Screen);