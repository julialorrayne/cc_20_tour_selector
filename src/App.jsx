//task 1
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import DestinationSelector from "./DestinationSelector";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState("all");

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
  }

const handleRemoveTour = (id) => {
  setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
};

return (
  <div className="app">
    <h1>Tour Destination</h1>
    <DestinationSelector
      selectedDestination={selectedDestination}
      onDestinationChange={handleDestinationChange}
      tours={tours}

    />
      <Gallery
        tours={tours}
        selectedDestination={selectedDestination}
        loading={loading}
        error={error}
        onRemoveTour={handleRemoveTour}
        onRefresh={fetchTours}  
      />
     </div> 
   );
};

export default App;