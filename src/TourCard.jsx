//task 4: Reset View
import React, {useState} from "react";

const TourCard = ({ id, image, info, price, name, onRemoveTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-info">
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button className="remove-tour" onClick={() => onRemoveTour(id)}>
                    Not Interested
                </button>
            </div>
        </article>
    );

export default TourCard;