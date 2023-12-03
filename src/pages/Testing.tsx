import React from 'react';
import ListGroup from '../components/ListGroup';
import ListGroupSimple from '../components/ListGroupSimple';
import Colours from '../components/Colours';
import ChangeBackground from '../components/ChangeBackground';
import Radio from '../components/Radio';
import ClickedButton from '../components/ClickedButton';
import Message from '../components/Message';
import getCurrentTime from '../components/GetTime';

const Testing: React.FC = () => {
    return (
        <div>
            <h1><u>Testing</u></h1>

            <Message name="john" time={getCurrentTime()} message="Hi" />
        </div>
    );
};

export default Testing;