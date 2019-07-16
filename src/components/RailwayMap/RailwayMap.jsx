import React from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
    withScriptjs,
    withGoogleMap
} from "react-google-maps";
import {SetStationButtonContainer} from "../SetStationButton/SetStationButtonContainer";
import mapStyles from './mapStyles'


const RailwayMap = (props) => {
    let setSelectedStation = (station) => {
        props.setSelectedStation(station);
    };

    return (
        <div>
            <GoogleMap
                defaultZoom={props.defaultZoom}
                defaultCenter={props.defaultCenter}
                defaultOptions={{styles: mapStyles}}
            >
                {
                    props.stations.map(
                        (station) => (
                            <Marker
                                icon={{
                                    url: '/station_icon.png',
                                    scaledSize: new window.google.maps.Size(40, 40)
                                }}
                                key={station.id}
                                position={{
                                    lat: station.latitude,
                                    lng: station.longitude
                                }}
                                onClick={() => {
                                    setSelectedStation(station)
                                }}
                            />
                        )
                    )
                }

                {
                    props.selectedStation && (
                        <InfoWindow
                            position={{
                                lat: props.selectedStation.latitude,
                                lng: props.selectedStation.longitude
                            }}
                            onCloseClick={() => {
                                setSelectedStation(null)
                            }}
                        >
                            <div>
                                <h2>{props.selectedStation.title}</h2>

                                <SetStationButtonContainer stationType={"dep"}>
                                    Set as departure
                                </SetStationButtonContainer>

                                <SetStationButtonContainer stationType={"arr"}>
                                    Set as arrival
                                </SetStationButtonContainer>
                            </div>
                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </div>
    )
};

const WrappedMap = withScriptjs(withGoogleMap(
    RailwayMap
));

export default WrappedMap


