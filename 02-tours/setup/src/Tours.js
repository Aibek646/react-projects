import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="title">
                <h2>ours tours</h2>
                <div className="underline"></div>
                <div>
                    {tours.map((tour) => {
                        return (
                            <Tour
                                removeTour={removeTour}
                                key={tour.id}
                                {...tour}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Tours;
