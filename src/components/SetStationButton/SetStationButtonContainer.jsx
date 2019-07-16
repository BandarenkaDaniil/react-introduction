import {connect} from "react-redux";
import {SetStationButton} from "./SetStationButton";
import {setStationActionCreator} from "../../redux/MainPageReducer";


const mapStateToProps = (state) => {
    return {
        stationTitle: state.mainPage.map.selectedStation.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStationButtonClick: (stationType) => {
            let action = setStationActionCreator(stationType);
            dispatch(action);
        }
    }
};

export const SetStationButtonContainer = connect(mapStateToProps, mapDispatchToProps)(SetStationButton);

