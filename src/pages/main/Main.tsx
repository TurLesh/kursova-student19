import React from 'react';
import HorizontalCheckV2 from '../horizontal-v2/Horizontal-v2';
import VerticalCheck from '../vertical-check/VerticalCheck';
import Noise from '../noise/Noise';
import './MainStyle.css';
import Cycle from '../cycle/Cycle';
// import Decode from '../decode/Decode';

const Main = () => {
    return (
        <div className="main-wrapper">
            <HorizontalCheckV2 />
            <VerticalCheck />
            <Noise />
            <Cycle />
            {/* <Decode /> */}
        </div>
    );
};

export default Main;
