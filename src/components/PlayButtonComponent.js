import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
} from 'react-native';
import {styles} from "../styles/style";


export default class PlayButtonComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.playSound(this.props.text, this.props.sound)}
                style={styles.playButton}
            >
                <Image source={require('../img/soundmachine_button.png')}
                       style={styles.playButtonBG}>
                    <Image source={this.props.icon} style={styles.playButtonIcon}/>
                </Image>
            </TouchableOpacity>
        );
    }
}
