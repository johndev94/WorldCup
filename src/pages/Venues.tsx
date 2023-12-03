import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const Venues: React.FC = () => {

    interface Venue {
        id: number; 
        name: string;
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
                    </tr>
                </thead>
                <tbody>
                    {venues.map((venue, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{venue.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Venues;
