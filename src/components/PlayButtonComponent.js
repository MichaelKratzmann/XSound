import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from 'react-native';
import {styles} from "../styles/style";


export default class PlayButtonComponent extends Component<{}> {
    render() {
        return (
            <View style={styles.playButton}>
                <Text>{this.props.text}</Text>
                <Image style={styles.playButtonIcon} resizeMode={'cover'} source={{uri: this.props.icon}}/>
            </View>
        );
    }
}
