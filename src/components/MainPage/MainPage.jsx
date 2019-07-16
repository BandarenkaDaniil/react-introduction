import React from 'react';
import styleClasses from './MainPage.module.css'
import RailwayMapContainer from "../RailwayMap/RailwayMapContainer";
import AvailableRidesTableContainer from "../AvailableRidesTable/AvailableRidesTableContainer";
import SearchFormContainer from "../SearchForm/SearchFormContainer";

export const MainPage = () => {
    return (
        <div className={styleClasses.mainPage}>
            <RailwayMapContainer/>
            <SearchFormContainer/>
            <AvailableRidesTableContainer/>
        </div>
    );
};

