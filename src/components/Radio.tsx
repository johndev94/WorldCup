import React, { ChangeEvent } from "react";

function Radio() {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    return (
        <>
            <label>
                <input type="radio" name="gender" onChange={handleChange} value="Male" />
                Male
            </label>
            <label>
                <input type="radio" name="gender" onChange={handleChange} value="Female" />
                Female
            </label>
        </>
    );
}

export default Radio;
