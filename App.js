import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import reducer from './src/reducers';
import {createLogger} from 'redux-logger';
import {applyMiddleware, compose, createStore} from 'redux';
import MainContainer from "./src/container/MainContainer";
import stateManager from 'redux-persist-state-manager';
import AppProvider from './AppProvider';
import {NativeRouter, Link} from 'react-router-native';
import {Navigation, Card} from 'react-router-navigation';
import Menu from './src/components/MenuComponent';

const SideMenu = require('react-native-side-menu');

const loggerMiddleware = createLogger({predicate: () => __DEV__}); // eslint-disable-line no-undef
const VERSION = 1;


export const stateMigrations = {
    1: () => ({}),
};

const stateManagedReducer = stateManager(reducer, {version: VERSION}, stateMigrations);


function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            loggerMiddleware,
        ),
    );
    return createStore(stateManagedReducer, initialState, enhancer);
}

const store = configureStore({});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: 'About',
            rehydrationDone: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({isOpen});
    }

    onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });

    callbackRehydrationDone() {
        this.setState({
            rehydrationDone: true,
        });
    }


    render() {
        return (
            <AppProvider store={store} callback={this.callbackRehydrationDone.bind(this)}>

                <View style={styles.container}>
                    <MainContainer/>
                </View>

            </AppProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
