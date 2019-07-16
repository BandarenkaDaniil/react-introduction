import React from 'react';
import {connect} from "react-redux";
import {SearchForm} from "./SearchForm";
import * as axios from "axios";
import {getAvailableRidesActionCreator} from "../../redux/MainPageReducer";


class SearchFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.searchButtonClick = this.searchButtonClick.bind(this)
    }

    searchButtonClick = () => {
        axios.get(
            `http://localhost:8000/api/railways/rides/?` +
            `departure_station=${this.props.departureStation}&` +
            `arrival_station=${this.props.arrivalStation}&` +
            `departure_date=${this.props.date}`
        ).then(
            (response) => {
                this.props.getAvailableRides(response.data)
            }
        )
    };

    render() {
        return <SearchForm
            departureStation={this.props.departureStation}
            arrivalStation={this.props.arrivalStation}
            date={this.props.date}
            searchButtonClick={this.searchButtonClick}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        departureStation: state.mainPage.searchForm.departureStation,
        arrivalStation: state.mainPage.searchForm.arrivalStation,
        date: state.mainPage.searchForm.date,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAvailableRides: (rides) => {
            dispatch(getAvailableRidesActionCreator(rides))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer);

