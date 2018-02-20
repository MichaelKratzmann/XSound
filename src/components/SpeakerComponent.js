import React, {Component} from 'react';
import {styles} from '../styles/style';
import {
    View,
    Image,
} from 'react-native';

export default class SpeakerComponent extends Component<{}> {
        render() {
        return (
            <View style={[styles.speaker, {width: this.props.width}]}>
                <Image style={[styles.speakerImg, {width: this.props.width}]} source={require('../img/speaker.png')}/>
            </View>
        );
    }
}


