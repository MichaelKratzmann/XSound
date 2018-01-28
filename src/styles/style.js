import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8cff5f',
        alignSelf: 'stretch',
    },
    speaker: {
        backgroundColor: 'red',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonList: {
        backgroundColor: 'orange',
        height: 100000,
        borderColor: 'green',
        borderWidth: 2,
        margin: 10,
        padding: 2,
    },
    hole: {
        width: 20,
        height: 20,
        margin: 2,
        alignItems: 'flex-start',
    },
    playButtonIcon: {
        borderColor: '#000',
        width: 20,
        height: 20,
    },
    disabled: {
        backgroundColor: 'red',
    },
    enabled: {
        backgroundColor: 'green',
    },
    playButton: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b3b3b',
        margin: 0,
    },
    playButtonPressed: {
        borderWidth: 0,
        borderColor: '#fff',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 0,
    }
});