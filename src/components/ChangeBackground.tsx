import React, { ChangeEvent, useState } from "react";

function ChangeBackground() {
    const colours = ["Red", "Green", "Blue"];
    const [backgroundColor, setBackgroundColor] = useState("");

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedColour = event.target.value;
        setBackgroundColor(selectedColour);
    };

    return (
        <>
            <select onChange={handleChange}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>

            <div style={{ marginTop: "20px", padding: "20px", backgroundColor: backgroundColor }}>
                Background Color: {backgroundColor}
            </div>
        </>
    );
}

export default ChangeBackground;
