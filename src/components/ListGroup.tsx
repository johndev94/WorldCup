
import { MouseEvent, useState } from "react";
function ListGroup() {
    const items = [
        'New York',
        'Paris',
        'London',
        'Tokyo',
        'Dublin'
    ]


    const [selectedIndex, setSelectedIndex] = useState(-1);


    items.map(item => <li>{item}</li>)
    return (
        <>
            <h5>List</h5>

            {items.length === 0 && <p>No items in list</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index
                        ? 'list-group-item active'
                        : 'list-group-item'
                    }
                        key={item}
                        onClick={() => { setSelectedIndex(index); }}
                    >
                        {item}
                    </li>))}
            </ul>
        </>
    );
}

export default ListGroup;