import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const Venues: React.FC = () => {
    // State to store the data

    interface Venue {
        id: number; // or string, depending on your data
        name: string;
        // include other properties that a venue might have
    }
    const [venues, setVenues] = useState<Venue[]>([]);

    useEffect(() => {
        const url = `http://localhost:3000/venues`;
        $.get(url, function (data: Venue[]) {
            setVenues(data);
        }, 'json');
    }, []);

    return (
        <div>
            <h1>Venues</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {/* Add other table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {venues.map((venue, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{venue.name}</td>
                            {/* Add other table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Venues;
