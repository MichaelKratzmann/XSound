import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
       // height: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(60,0,0)',
        alignSelf: 'stretch',
    },
    speaker: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    speakerImg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        resizeMode: 'stretch',
    },
    stopComponent:{
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-between',
    },
    textImg: {
        resizeMode: 'center',
        width: 250,
        height: 75,
        opacity: 0.7,
    },

    buttonList: {
        flex: 1,
        backgroundColor: 'rgb(60,0,0)',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    hole: {
        width: 20,
        height: 20,
        margin: 2,
        alignItems: 'flex-start',
    },
    playButtonIcon: {
        width: 30,
        height: 30,
    },
    stopButton: {
        width: 20,
        height: 20,
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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    playButtonBG:{
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
        width: 70,
        height: 70,
    },  stopButtonBG:{
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
        width: 65,
        height: 65,
    },
});