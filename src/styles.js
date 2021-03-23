import { StyleSheet } from 'react-native';

import { accent, bgColor, darkGrey, grey, lightGrey, white } from './data/color';

export const sliderStyles = StyleSheet.create({
    slider: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 40,
    },
    sliderText: {
        color: white,
        backgroundColor: darkGrey,
        borderBottomWidth: 2,
        borderColor: grey,
        borderRadius: 10,
        borderRightWidth: 2,
        height: 30,
        marginBottom: 10,
        paddingTop: 4,
        textAlign: 'center',
        width: 40,
    },
});

export const generalStyles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: bgColor,
        display: 'flex',
        flex: 1,
    }
})

export const colorScreenStyles = StyleSheet.create({
    actionContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
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
        display: 'flex',
        flex: 1,
        marginBottom: 30,
        marginTop: 70,
        width: 350,
    },
    sliderContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
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
        display: 'flex',
        flex: 1,
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
        marginBottom: 20,
        width: 75,
    },
});

export const libraryScreenStyles = StyleSheet.create({
    bullet: {
        alignItems: 'center',
        display: 'flex',
        backgroundColor: darkGrey,
        borderBottomWidth: 3,
        borderColor: grey,
        borderRadius: 25,
        borderRightWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: 275,
    },
    button: {
        alignItems: 'center',
        backgroundColor: darkGrey,
        borderRadius: 20,
        display: 'flex',
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
    colorLabel: {
        borderRadius: 10,
        height: 20,
        marginLeft: 20,
        width: 80,
    },
    colorText: {
        color: lightGrey,
        marginRight: 60,
    },
    itemContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        width: 390,
    },
    headerText: {
        color: white,
        fontSize: 20
    },
    scrollView: {
        display: 'flex',
        flex: 1,
        width: 390,
    },
    selectionPanel: {
        alignItems: 'center',
        backgroundColor: darkGrey,
        display: 'flex',
        marginTop: 50,
        height: 60,
        justifyContent: 'center',
        width: '100%',
    },
});

export const settingsScreenStyles = StyleSheet.create({
    planBullet: {
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
        width: 300,
    },
    planBtn: {
        alignItems: 'center',
        backgroundColor: darkGrey,
        borderRadius: 20,
        display: 'flex',
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
    planContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: 360,
    },
    planText: {
        color: white,
        width: 180
    },
    sliderContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
