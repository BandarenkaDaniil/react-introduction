import React from "react";

export const GET_AVAILABLE_RIDES = 'GET_AVAILABLE_RIDES';
export const SET_ARRIVAL_STATION = 'SET_ARRIVAL_STATION';
export const SET_DEPARTURE_STATION = 'SET_DEPARTURE_STATION';
export const SET_SELECTED_STATION = 'SET_SELECTED_STATION';
export const SET_STATIONS = 'SET_STATIONS';


export const getAvailableRidesActionCreator = (rides) => ({
    type: GET_AVAILABLE_RIDES,
    rides
});

export const setStationActionCreator = (stationType) => ({
    type: (stationType === 'dep') ?
        SET_DEPARTURE_STATION :
        SET_ARRIVAL_STATION
});

export const setSelectedStationActionCreator = (selectedStation) => ({type: SET_SELECTED_STATION, selectedStation});
export const setStationsActionCreator = (stations) => ({type: SET_STATIONS, stations});

const initialState = {
    map: {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAoCUnuTuPN5oqHkCveS-aRRhsy_CywOc4&language=en",
        loadingElement: <div/>,
        containerElement: <div style={{height: "600px"}}/>,
        mapElement: <div style={{height: "100%"}}/>,
        defaultZoom: 7,
        defaultCenter: {
            lat: 53.90,
            lng: 27.56
        },
        stations: [],
        selectedStation: null
    },
    searchForm: {
        departureStation: '',
        arrivalStation: '',
        date: new Date().toJSON().slice(0, 10)
    },
    availableRidesTable: {
        rides: [
        ]
    },
};

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AVAILABLE_RIDES: {
            let stateCopy = {...state};

            stateCopy.availableRidesTable.rides = action.rides;

            return stateCopy;
        }

        case SET_SELECTED_STATION: {
            let stateCopy = {...state};
            stateCopy.map = {...state.map};
            stateCopy.map.selectedStation = action.selectedStation;
            return stateCopy;
        }

        case SET_STATIONS: {
            let stateCopy = {...state};
            stateCopy.map.stations = action.stations;
            return stateCopy;
        }

        case SET_DEPARTURE_STATION: {
            let stateCopy = {...state};
            stateCopy.searchForm = {...state.searchForm};
            stateCopy.searchForm.departureStation = state.map.selectedStation.title;
            return stateCopy;
        }

        case SET_ARRIVAL_STATION: {
            let stateCopy = {...state};
            stateCopy.searchForm = {...state.searchForm};
            stateCopy.searchForm.arrivalStation = state.map.selectedStation.title;
            return stateCopy;
        }

        default:
            return state;
    }
};