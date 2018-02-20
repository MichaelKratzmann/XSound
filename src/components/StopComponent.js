import React, {Component} from 'react';
import {styles} from '../styles/style';
import {
    View,
    Image,
} from 'react-native';
import StopButtonComponent from '../components/StopButtonComponent';

export default class StopComponent extends Component<{}> {
        render() {
        return (
            <View style={[styles.stopComponent, {width: (this.props.width-30)}]}>
                <Image style={styles.textImg} source={require('../img/SoundmachineText.png')}/>
                <StopButtonComponent stopSound={this.props.stopSound} />
            </View>
        );
    }
}


