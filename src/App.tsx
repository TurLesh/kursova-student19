import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import PageV1 from './pages/v1/PageV1';
import HorizontalCheckV2 from './pages/horizontal-v2/Horizontal-v2';
import VerticalCheck from './pages/vertical-check/VerticalCheck';
import Noise from './pages/noise/Noise';
import Decode from './pages/decode-monkey/Decode';
import Cycle from './pages/decode/Cycle';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Main />} />
                <Route path="/v1" element={<PageV1 />} />
                <Route path="horizontal-check" element={<HorizontalCheckV2 />} />
                <Route path="vertical-check" element={<VerticalCheck />} />
                <Route path="noise" element={<Noise />} />
                <Route path="decode" element={<Decode />} />
                <Route path="cycle" element={<Cycle />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
