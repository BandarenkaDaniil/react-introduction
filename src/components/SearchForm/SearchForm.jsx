import React from "react"
import styleClasses from './SearchForm.module.css'

export const SearchForm = (props) => {
    const searchButtonClick = (e) => {
        e.preventDefault();
        props.searchButtonClick();
    };

    return (
        <div className={styleClasses.sidenav}>
            <form>
                <label htmlFor="departure_station">
                    Departure station:
                </label>
                <input
                    type="text"
                    name="departure_station"
                    value={props.departureStation}
                />

                <label htmlFor="arrival_station">
                    Arrival station:
                </label>
                <input
                    type="text"
                    name="arrival_station"
                    value={props.arrivalStation}
                />

                <label htmlFor="departure_date">
                    Departure date:
                </label>
                <input
                    type="date"
                    id="departure_date"
                    name="departure_date"
                    value={props.date}
                />

                <button type="submit" onClick={searchButtonClick}>
                    Search
                </button>
            </form>
        </div>
    );
};
