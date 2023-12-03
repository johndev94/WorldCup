import React from "react";

function ListGroupSimple() {
    const items = [
        'New York',
        'Paris',
        'London',
        'Tokyo',
        'Dublin'
    ];

    //items.length = 0; 

    return (
        <>
            <h5>List</h5>
            {items.length === 0 && <p>No items in list</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li
                        className="list-group-item"
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroupSimple;
