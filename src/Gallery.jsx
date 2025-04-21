//task 3: Render Tour Cards
import React from "react";
import TourCard from "./TourCard";


// Gallery displays a list of tours based on the selected destination
const Gallery = ({ tours, selectedDestination, loading, error, onRemoveTour, onRefresh }) => {
    if (loading) {
        return <p>Loading tours</p>
    }
// If there's an error fetching data, show error message and a retry button
    if (error) {
        return (
        <div className="error">
            <p>Error: {error.message}</p>
            <button onClick={onRefresh}>Retry</button>
        </div>
        );
    }
    // Filter tours based on selected destination
    const filteredTours = selectedDestination === "all"
        ? tours
        : tours.filter((tour) => tour.name === selectedDestination);

    if (filteredTours.length === 0) {
        return (
        <div className = "no-tours" >
            <h2>No tours left. Please, refresh to reload.</h2>
            <button onClick={onRefresh}>Refresh</button>
        </div>    
    );
}
// Render each tour as a TourCard component
return(
    <section className="gallery">
        {filteredTours.map((tour) => (
            <TourCard
                key={tour.id}
                {...tour}
                onRemoveTour={onRemoveTour}
            />
        ))}
    </section>
    );
}

export default Gallery;