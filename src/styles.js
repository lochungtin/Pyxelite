import { StyleSheet } from 'react-native';

import { accent, bgColor, darkGrey, grey, lightGrey, white, } from './data/color';

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
    bubble: {
        alignItems: 'center',
        backgroundColor: darkGrey,
        display: 'flex',
        justifyContent: 'center',
    },
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
    },
    bulletIcon: {
        marginLeft: 20,
    },
    bulletText: {
        color: white,
        marginLeft: 40,
    },
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
    displayItem: {
        marginVertical: 12,
    },  
    displayTitle: {
        color: white,
        fontSize: 15,
        marginBottom: 5,
        paddingLeft: 20,
    },
    logo: {
        display: 'flex',
        flex: 1,
        marginTop: 70,
        marginBottom: 10,
    },
    toggleBtn: {
        backgroundColor: darkGrey,
        marginVertical: 20,
    },
});

export const libraryScreenStyles = StyleSheet.create({
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
    planContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: 360,
    },
    sliderContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 120,
    },
});
