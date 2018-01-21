import React, {Component} from 'react';
import {styles} from '../styles/style';
import {
    Text,
    View,
} from 'react-native';
import PlayButtonComponent from './PlayButtonComponent';


export default class ButtonList extends Component<{}> {
     clearArray(array) {
        while (array.length) {
            array.pop();
        }
    }

    renderButtons() {
        let items = [];
        this.clearArray(items);
        this.props.data.forEach(function (item) {
            items.push(<PlayButtonComponent key={item.text} text={item.text} sound={item.sound} icon={item.icon}/>);
        })
        return (<View style={{
            alignItems: 'flex-start',
            padding: 0,
            width: this.props.width - 30,
            height: this.props.height,
            flexWrap: 'wrap',
            backgroundColor: 'orange',
        }}>{items}</View>);
    }

    render() {
        return (
            <View style={[styles.buttonList, {width: this.props.width, height: this.props.height}]}>
                {this.renderButtons()}
                <Text>test</Text>
            </View>
        );
    }
}


