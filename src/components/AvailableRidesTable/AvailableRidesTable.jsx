import React from "react"


export const AvailableRidesTable = (props) => {
    if (props.rides.length === 0) {
        return <></>
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        props.rides.map(
                            (ride) => (
                                <>
                                    <td>{ride.departure_time}</td>
                                    <td>{ride.arrival_time + ' ' + ride.arrival_date}</td>
                                    <td>{ride.cost}</td>
                                    <td>
                                        <button>Buy</button>
                                    </td>
                                </>
                            )
                        )
                    }
                </tr>
                </tbody>
            </table>
        </div>
    )
};
