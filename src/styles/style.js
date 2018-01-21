import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header:{
      height: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8cff5f',
        alignSelf: 'stretch',
    },
    speaker:{
        backgroundColor: 'red',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonList:{
        backgroundColor: 'blue',
        alignSelf: 'stretch',
        padding: 10,
    },
    hole:{
        width: 20,
        height: 20,
        margin: 2,
        alignItems: 'flex-start',
    },
    playButtonIcon:{
        width: 50,
        height: 50,
        margin: 2,
        borderWidth: 2,
        borderColor: '#ff778c',
        alignItems: 'flex-start',
    },
    playButton:{
        width: 80,
        height: 80,
        margin: 2,
        borderWidth: 2,
        borderColor: '#51ff43',
        alignItems: 'flex-start',
    }
});