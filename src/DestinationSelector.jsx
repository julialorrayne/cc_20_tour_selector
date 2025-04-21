//Task 2 Create the Dropdown Filter
import React, { useState } from 'react';

const DestinationSelector = ({ selectedDestination, onDestinationChange, tours }) => {
    const uniqueDestinations = [
        "all",
        ...new Set(tours.map((tour) => tour.name))
    ];

    return (
        <div className="destination-selector">
            <label htmlFor="destination">Select a destination:</label>
            <select
                id="destination"
                value={selectedDestination}
                onChange={(e) => onDestinationChange(e.target.value)}
            >
                {uniqueDestinations.map((name) => (
                    <option key={name} value={name}>
                        {name === "all" ? "All Destinations" : name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;