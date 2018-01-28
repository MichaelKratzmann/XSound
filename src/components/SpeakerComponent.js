import React, {Component} from 'react';
import {styles} from '../styles/style';
import {
    View,
    Image,
} from 'react-native';


export default class SpeakerComponent extends Component<{}> {

    renderHoles() {
        var amount = (this.props.width * this.props.height) / (22 * 22);
        let items = [];
        for (let i = 1; i <= amount; i++) {
            items.push(<Image key={i} style={styles.hole} source={require('../img/icons/hole.png')}/>);
        }
        return (<View style={{
            width: this.props.width - 30,
            height: this.props.height,
            flexWrap: 'wrap',
            backgroundColor: 'yellow',
        }}>{items}</View>);
    }

    render() {
        console.log("w: ", this.props.width);
        return (
            <View style={[styles.speaker, {width: this.props.width, height: this.props.height}]}>
                {this.renderHoles()}
            </View>
        );
    }
}


