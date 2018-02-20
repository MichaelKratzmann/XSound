import React, {Component} from 'react';
import {styles} from '../styles/style';
import {
    View,
} from 'react-native';
import GridView from 'react-native-super-grid';
import {data} from '@assets/assets';
import PlayButtonComponent from './PlayButtonComponent'


export default class ButtonList extends Component<{}> {
    constructor(props) {
        super(props);
    }


    clearArray(array) {
        while (array.length) {
            array.pop();
        }
    }


    renderButtons() {
        let items = [];
        this.clearArray(items);
        data.forEach(function (item) {
            items.push({
                "text": item.text,
                "sound": item.sound,
                "icon": item.icon,
                "isRecordButton": false
            })
        });
        return (
            <GridView
                itemDimension={70}
                items={items}
                spacing={2}
                renderItem={item => (
                    <PlayButtonComponent playSound={this.props.playSound}
                                         stopSound={this.props.stopSound}
                                         isRecordButton={item.isRecordButton}
                                         text={item.text}
                                         sound={item.sound}
                                         icon={item.icon}/>
                )}
            />
        );
    }

    render() {
        return (
            <View style={[styles.buttonList, {width: this.props.width, height: this.props.height}]}>
                {this.renderButtons()}
            </View>
        );
    }
}


