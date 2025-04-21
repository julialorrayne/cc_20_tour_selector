//task 3: Render Tour Cards
import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, selectedDestination, loading, error, onRemoveTour, onRefresh }) => {
    if (loading) {
        return <p>Loading tours</p>
    }
    
    if (error) {
        return (
        <div className="error">
            <p>Error: {error.message}</p>
            <button onClick={onRefresh}>Retry</button>
        </div>
        );
    }
    
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