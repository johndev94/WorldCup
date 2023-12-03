import { ChangeEvent } from "react";

function Colours() {
    const colours = ["Red", "Green", "Blue"];

    const handleChange = (event: ChangeEvent) => {
        console.log(event);
    };

    return (
        <>
            <select onChange={handleChange}>
                <option value={1}>Red</option>
                <option value={2}>Green</option>
                <option value={3}>Blue</option>
            </select>
        </>
    );
}

export default Colours;