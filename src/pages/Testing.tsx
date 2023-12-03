import React from 'react';
import ListGroup from '../components/ListGroup';
import ListGroupSimple from '../components/ListGroupSimple';
import Colours from '../components/Colours';
import ChangeBackground from '../components/ChangeBackground';
import Radio from '../components/Radio';
import ClickedButton from '../components/ClickedButton';
import Message from '../components/Message';
import getCurrentTime from '../components/GetTime';
import Dropdown from '../components/Dropdown';
import Table from '../components/Table';
import Stopwatch from '../components/Stopwatch';

const Testing: React.FC = () => {
    // FOR DROPDOWN
    const dropdownOptions = ['Apple', 'Banana', 'Cherry', 'Date'];

    return (
        <div>
            <h1><u>Testing</u></h1>
            <Dropdown options={dropdownOptions} />
            <Table/>
            <Stopwatch/>

            
            <Message name="john" time={getCurrentTime()} message="Hi" />
        </div>
    );
};

export default Testing;