import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import {styles} from "../styles/style";


export default class StopButtonComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.stopSound()}
                style={styles.playButton}
            >
                <Image source={require('../img/soundmachine_button_dark.png')}
                       style={styles.stopButtonBG}>
                    <Image source={require('../img/icons/stop-64.png')} style={styles.stopButton}/>
                </Image>
            </TouchableOpacity>
        );
    }
}
