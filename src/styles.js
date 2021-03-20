import { StyleSheet } from 'react-native';

import { accent, bgColor, darkGrey, grey, lightGrey, white } from './data/color';

export const generalStyles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: bgColor,
        flex: 1,
    }
})

export const colorScreenStyles = StyleSheet.create({
    actionContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        width: 350,
    },
    actionSave: {
        alignItems: 'center',
        backgroundColor: grey,
        borderBottomWidth: 3,
        borderColor: lightGrey,
        borderRadius: 25, 
        borderRightWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        height: 50,
        width: 100,
    },
    actionSet: {
        alignItems: 'center',
        backgroundColor: accent,
        borderBottomWidth: 3,
        borderColor: lightGrey,
        borderRadius: 25, 
        borderRightWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        height: 50,
        width: 200,
    },
    actionText: {
        color: white,
        fontSize: 15,
    },
    hexInput: {
        color: white,
        fontSize: 20,
        textAlign: 'center',
        width: 275
    },
    hexPreview: {
        alignItems: 'center',
        backgroundColor: darkGrey,
        borderBottomWidth: 3,
        borderColor: grey,
        borderRadius: 25, 
        borderRightWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        height: 50,
        width: 275,
    }, 
    inputContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-between',
        marginBottom: 20,
        width: 350,
    },
    preview: {
        borderRadius: 10,
        marginVertical: 30,
        height: 200,
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
        borderBottomWidth: 2,
        borderColor: grey,
        borderRadius: 5, 
        borderRightWidth: 2,
        height: 30,
        marginBottom: 10,
        paddingTop: 4,
        textAlign: 'center',
        width: 32,
    },
    switch: {
        marginRight: 10,
    }
});

export const homeScreenStyles = StyleSheet.create({
    bullet: {
        alignItems: 'center',
        backgroundColor: darkGrey,
        borderBottomWidth: 3,
        borderColor: grey,
        borderRadius: 25,
        borderRightWidth: 3,
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
        backgroundColor: darkGrey,
        borderRadius: 37.5,
        display: 'flex',
        height: 75,
        justifyContent: 'center',
        marginTop: 20,
        width: 75,
    },
});