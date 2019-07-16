import React from 'react'


export const SetStationButton = (props) => {
    let handleClick = () => {
        props.setStationButtonClick(props.stationType);
    };

    return (
        <button onClick={handleClick}>
            {props.children}
        </button>
    )
};