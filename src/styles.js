import { StyleSheet } from 'react-native';

import { bgColor, white } from './data/color';

export const generalStyles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: bgColor,
        flex: 1,
    }
})

export const homeScreenStyles = StyleSheet.create({
    bullet: {
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        borderColor: '#3e3e3e',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around',
        marginBottom: 20,
        width: 300,
    },
    displayTitle: {
        color: white,
        fontSize: 15,
        marginBottom: 5,
        paddingLeft: 20,
    },
    displayValue: {
        color: white,
        width: 200,
    },
    logo: {
        marginTop: 70,
        marginBottom: 10,
    },
    toggleBtn: {
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        borderRadius: 37.5,
        display: 'flex',
        height: 75,
        justifyContent: 'center',
        marginTop: 20,
        width: 75,
    },
});