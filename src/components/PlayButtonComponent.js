import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import {styles} from "../styles/style";
import SoundRecorder from 'react-native-sound-recorder';
var Sound = require('react-native-sound');
export default class PlayButtonComponent extends Component<{}> {

    onPressButton(text, sound) {
        this.playSound(sound);
    }

    recordFile(){
        console.log("record");
        let PATH_CACHE ="../styles/";
        SoundRecorder.start(PATH_CACHE + '/test.mp4')
            .then(function() {
                console.log('started recording');
            });


    }

    playSound(sound) {
        console.log(sound)
        var file = new Sound(sound, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            file.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                    file.reset();
                }
            });
        });
        SoundRecorder.stop()
            .then(function(path) {
                console.log('stopped recording, audio file saved at: ' + path);
            });
    }


    renderRecordButton() {
        return (
            <TouchableOpacity
                onPress={() => this.recordFile()}
                style={styles.playButton}
            >
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }


    render() {
        if (this.props.isRecordButton) {
            return(
                this.renderRecordButton()
            )

        } else {
            return (
                <TouchableOpacity
                    onPress={() => this.onPressButton(this.props.text, this.props.sound)}
                    style={styles.playButton}
                >
                    <Image source={this.props.icon} style={styles.playButtonIcon}/>
                    <Text>{this.props.text}</Text>
                </TouchableOpacity>
            );
        }
    }
}
