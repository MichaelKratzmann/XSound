import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        alignSelf: 'stretch',
    },
    speaker: {
        backgroundColor: 'red',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonList: {
        flex: 1,
        backgroundColor: 'red',
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
    speakerLine: {
        shadowColor: '#4e4e4e',
        shadowOffset: {width: 1,height: 1},
        shadowOpacity: 0.3,
        backgroundColor: '#4e4e4e',
        height: 5,
        width: 400,
    },

    playButton: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 2,
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