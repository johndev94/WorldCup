import React from 'react';

interface DropdownProps {
    options: string[];
}

function Dropdown({ options }: DropdownProps) {
    return (
        <select>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}


export default Dropdown;
