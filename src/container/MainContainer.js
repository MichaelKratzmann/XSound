import MainComponent from '../components/MainComponent';
import {connect} from 'react-redux';
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';

var p;

function playSound(text, sound) {
    console.log("play: ", text, sound);
    let soundFile = text + ".mp3";
    p = new Player(soundFile, {
        autoDestroy: true
    }).play();

}

function stopSound() {
    if (p !== undefined) {
        p.stop();
    }
}

function recordSound() {

}

function addSound() {

}


function mapDispatchToProps(dispatch, ownProps) {
    return {
        playSound: (text, sound) => playSound(text, sound),
        stopSound: () => stopSound(),
        recordSound: () => recordSound(),
        addSound: () => addSound(),
        //  handleDamageSelect: (vin, damageId) => dispatch(handleDamageSelect(vin, damageId)),
    };
}

function mapStateToProps(state) {
    return {
        //  queryString: state.reducers.damageReducer.queryString,
    };
}

export {mapStateToProps, mapDispatchToProps};
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
