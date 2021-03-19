import { StyleSheet } from 'react-native';

import { bgColor, darkGrey, white } from './data/color';

export const generalStyles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: bgColor,
        flex: 1,
    }
})

export const colorScreenStyles = StyleSheet.create({
    hexInput: {
        color: white,
        fontSize: 20,
        textAlign: 'center',
        width: 100
    },
    hexPreview: {
        alignItems: 'center',
        backgroundColor: darkGrey,
        borderRadius: 10, 
        display: 'flex',
        justifyContent: 'center',
        height: 50,
        marginBottom: 20,
        width: 350,
    },
    preview: {
        borderRadius: 10,
        marginVertical: 30,
        height: 300,
        width: 350,
    },
    slider: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 32,
    },
    sliderContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    },
    sliderText: {
        color: white,
        backgroundColor: darkGrey,
        borderRadius: 5,
        height: 30,
        marginBottom: 10,
        paddingTop: 4,
        textAlign: 'center',
        width: 32,
    }
});

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