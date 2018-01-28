import React, {Component} from 'react';
import {styles} from '../styles/style';
import {
    View,
    Dimensions
} from 'react-native';
import SpeakerComponent from './SpeakerComponent';
import ButtonList from './ButtonList';


export default class MainComponent extends Component<{}> {
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <View style={styles.container}>
            <View style={styles.header}/>
                <SpeakerComponent width={width} height={height*(1/3)}/>
                <ButtonList width={width} height={height*(2/3)}/>
            </View>
        );
    }
}