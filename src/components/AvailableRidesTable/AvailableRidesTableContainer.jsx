import {connect} from "react-redux";
import {AvailableRidesTable} from "./AvailableRidesTable";


const mapStateToProps = (state) => {
    return {
        rides: state.mainPage.availableRidesTable.rides,
    }
};

export default connect(mapStateToProps, {})(AvailableRidesTable);

