import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import {styles} from "../styles/style";
var Sound = require('react-native-sound');
var whoosh;
export default class PlayButtonComponent extends Component<{}> {

    onPressButton(text, sound) {
        console.log("SOUND" , sound);
        this.playSound(sound);
    }

    playSound(sound){
        var whoosh = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            whoosh.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                    whoosh.reset();
                }
            });
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.onPressButton(this.props.text, this.props.sound)} style={styles.playButton}>
                <Image source={this.props.icon} style={styles.playButtonIcon} />
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
