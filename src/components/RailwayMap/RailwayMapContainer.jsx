import React from 'react'
import {connect} from "react-redux";
import RailwayMap from "./RailwayMap";
import {
    setSelectedStationActionCreator,
    setStationsActionCreator
} from "../../redux/MainPageReducer";
import * as axios from "axios";


class RailwayMapContainer extends React.Component {
    componentDidMount() {
        axios.get("http://0.0.0.0:8000/api/railways/stations")
            .then(response => {
                this.props.setStations(response.data)
            });
    }

    render() {
        return <RailwayMap
            defaultZoom={this.props.defaultZoom}
            defaultCenter={this.props.defaultCenter}
            stations={this.props.stations}
            selectedStation={this.props.selectedStation}
            googleMapURL={this.props.googleMapURL}
            loadingElement={this.props.loadingElement}
            containerElement={this.props.containerElement}
            mapElement={this.props.mapElement}
            setSelectedStation={this.props.setSelectedStation}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        defaultZoom: state.mainPage.map.defaultZoom,
        defaultCenter: state.mainPage.map.defaultCenter,
        stations: state.mainPage.map.stations,
        selectedStation: state.mainPage.map.selectedStation,
        googleMapURL: state.mainPage.map.googleMapURL,
        loadingElement: state.mainPage.map.loadingElement,
        containerElement: state.mainPage.map.containerElement,
        mapElement: state.mainPage.map.mapElement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedStation: (station) => {
            dispatch(setSelectedStationActionCreator(station))
        },
        setStations: (stations) => {
            dispatch(setStationsActionCreator(stations))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RailwayMapContainer);

