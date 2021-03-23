import { Dimensions, StatusBar, StyleSheet, } from 'react-native';

import { accent, bgColor, darkGrey, grey, lightGrey, white, } from './data/color';

const CenterRowSpaceBetween = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
};

const CenterCenter = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
};

const BRBorder = {
    borderBottomWidth: 3,
    borderColor: grey,
    borderRightWidth: 3,
};

const taller = Dimensions.get('screen').height / Dimensions.get('screen').width > 2.12;

export const sliderStyles = StyleSheet.create({
    slider: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 325,
        justifyContent: 'space-between',
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
        ...BRBorder,
        alignItems: 'center',
        backgroundColor: darkGrey,
        borderRadius: 25,
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
        paddingTop: StatusBar.currentHeight,
    }
})

export const colorScreenStyles = StyleSheet.create({
    actionContainer: {
        ...CenterRowSpaceBetween,
        marginBottom: 20,
        marginTop: 30,
        width: 300,
    },
    actionSave: {
        ...CenterCenter,
        ...BRBorder,
        backgroundColor: grey,
        borderColor: lightGrey,
        borderRadius: 25,
        height: 50,
        width: 90,
    },
    actionSet: {
        ...CenterCenter,
        ...BRBorder,
        backgroundColor: accent,
        borderColor: lightGrey,
        borderRadius: 25,
        height: 50,
        width: 190,
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
    inputContainer: {
        ...CenterRowSpaceBetween,
        height: 55,
        marginBottom: 20,
        width: 350,
    },
    preview: {
        borderRadius: 10,
        display: 'flex',
        flex: 1,
        marginBottom: 30,
        marginTop: 30,
        width: 350,
    },
    sliderContainer: {
        ...CenterRowSpaceBetween,
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
        marginBottom: 10,
        marginTop: 40,
    },
    toggleBtn: {
        backgroundColor: darkGrey,
        marginVertical: 20,
    },
});

export const libraryScreenStyles = StyleSheet.create({
    itemContainer: {
        ...CenterRowSpaceBetween,
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
    titlePanel: {
        ...CenterCenter,
        backgroundColor: darkGrey,
        marginTop: 20,
        height: 60,
        width: '100%',
    },
});

export const settingsScreenStyles = StyleSheet.create({
    bottomControls: {
        ...CenterRowSpaceBetween,
        width: 360,
    },
    currentColorBullet: {
        borderRadius: 10,
        height: 20,
        width: 80,
    },
    currentColorText: {
        color: white,
        fontSize: 20,
    },
    midSection: {
        ...CenterRowSpaceBetween,
        height: taller ? 120 : 55,
        width: 280,
    },
    planItem: {
        ...CenterRowSpaceBetween,
        marginTop: 15,
        width: 360,
    },
    presetBtn: {
        ...CenterCenter,
        backgroundColor: darkGrey,
        borderRadius: 10,
        height: 100,
        width: 40,
    },
    presetColorbar: {
        borderRadius: 5,
        height: 80,
        marginHorizontal: 10,
        width: 10,
    },
    presetContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 325,
        justifyContent: 'space-between',
    },
    presetInnerContainer: {
        ...CenterRowSpaceBetween,
        width: 180,
    },
    presetItem: {
        ...BRBorder,
        alignItems: 'center',
        backgroundColor: darkGrey,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 100,
        width: 120,
    },
    presetText: {
        color: white,
    },
    presetTextContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        height: 80,
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    slider: {
        ...CenterRowSpaceBetween,
        width: 70,
    },
    sliderContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 325,
        width: 160,
    },
    topControls: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 300,
        paddingTop: taller ? 30 : 0,
    },
    verticalText: {
        color: white,
        transform: [{ rotate: '90deg' }, { translateY: 80 }],
        width: 200,
    }
});
