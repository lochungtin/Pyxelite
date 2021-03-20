import React from 'react';
import { Switch, TextInput, View, } from 'react-native';
import { connect } from 'react-redux';

import ColorSlider from '../components/ColorSlider';
import { darkGrey, grey, white } from '../data/color';

import { colorScreenStyles, generalStyles } from '../styles';
import { hex2Ints, ints2hex, mix, rand } from '../utils/color';

class Screen extends React.Component {

    constructor(props) {
        super(props);

        const randomColor = rand();

        this.state = {
            black: 'b',
            hex: ints2hex(randomColor[0], randomColor[1], randomColor[2]),
            r: randomColor[0],
            g: randomColor[1],
            b: randomColor[2],
            a: 100,
        }

        console.log(randomColor)
        console.log(ints2hex(randomColor[0], randomColor[1], randomColor[2]));
    }

    handleSliderA = val => {
        const bg = this.state.black ? [0, 0, 0] : [255, 255, 255];
        const mixed = mix(
            this.state.r,
            this.state.g,
            this.state.b,
            bg[0],
            bg[1],
            bg[2],
            val / 100,
        );
        this.setState({ a: val, hex: ints2hex(mixed[0], mixed[1], mixed[2]) });
    }

    handleSliderB = b => {
        const bg = this.state.black ? [0, 0, 0] : [255, 255, 255];
        const mixed = mix(
            this.state.r,
            this.state.g,
            b,
            bg[0],
            bg[1],
            bg[2],
            this.state.a / 100,
        );
        this.setState({ b, hex: ints2hex(mixed[0], mixed[1], mixed[2]) });
    }

    handleSliderG = g => {
        const bg = this.state.black ? [0, 0, 0] : [255, 255, 255];
        const mixed = mix(
            this.state.r,
            g,
            this.state.b,
            bg[0],
            bg[1],
            bg[2],
            this.state.a / 100,
        );
        this.setState({ g, hex: ints2hex(mixed[0], mixed[1], mixed[2]) });
    }

    handleSliderR = r => {
        const bg = this.state.black ? [0, 0, 0] : [255, 255, 255];
        const mixed = mix(
            r,
            this.state.g,
            this.state.b,
            bg[0],
            bg[1],
            bg[2],
            this.state.a / 100,
        );
        this.setState({ r, hex: ints2hex(mixed[0], mixed[1], mixed[2]) });
    }

    handleSwitch = black => {
        const bg = black ? [0, 0, 0] : [255, 255, 255];
        const mixed = mix(
            this.state.r,
            this.state.g,
            this.state.b,
            bg[0],
            bg[1],
            bg[2],
            this.state.a / 100,
        );
        this.setState({ hex: ints2hex(mixed[0], mixed[1], mixed[2]), black });
    }

    handleTextInput = hex => {
        if (hex.length > this.state.hex.length) {
            const rgx = /[0-9A-F]/;
            const char = hex[hex.length - 1].toUpperCase();
            if (rgx.test(char))
                this.setState({ hex: this.state.hex + char });
        }
        else
            this.setState({ hex });

        if (hex.length === 6) {
            const splt = hex2Ints(hex);
            this.setState({ r: splt[0], g: splt[1], b: splt[2], a: 100 });
        }
    }

    render() {
        return (
            <View style={generalStyles.screen}>
                <View style={{ ...colorScreenStyles.preview, backgroundColor: '#' + (this.state.hex.length === 6 ? this.state.hex : "333") }} />
                <View style={colorScreenStyles.inputContainer}>
                    <View style={colorScreenStyles.hexPreview}>
                        <TextInput
                            onChangeText={this.handleTextInput}
                            maxLength={6}
                            value={this.state.hex}
                            style={colorScreenStyles.hexInput}
                        />
                    </View>
                    <Switch
                        onValueChange={this.handleSwitch}
                        style={colorScreenStyles.switch}
                        trackColor={{ false: grey, true: grey }}
                        thumbColor={white}
                        value={this.state.black}
                    />
                </View>
                <View style={colorScreenStyles.sliderContainer}>
                    <ColorSlider
                        onValueChange={this.handleSliderR}
                        value={this.state.r}
                    />
                    <ColorSlider
                        onValueChange={this.handleSliderG}
                        value={this.state.g}
                    />
                    <ColorSlider
                        onValueChange={this.handleSliderB}
                        value={this.state.b}
                    />
                    <ColorSlider
                        max={100}
                        onValueChange={this.handleSliderA}
                        value={this.state.a}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Screen);