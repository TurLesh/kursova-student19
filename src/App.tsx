import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import PageV1 from './pages/v1/PageV1';
import HorizontalCheck from './pages/horizontal-check/HorizontalCheck';
import HorizontalCheckV2 from './pages/horizontal-v2/Horizontal-v2';
import VerticalCheck from './pages/vertical-check/VerticalCheck';
import Noise from './pages/noise/Noise';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Main />} />
                <Route path="/v1" element={<PageV1 />} />
                <Route path="horizontal-check" element={<HorizontalCheck />} />
                <Route path="horizontal-v2" element={<HorizontalCheckV2 />} />
                <Route path="vertical-check" element={<VerticalCheck />} />
                <Route path="noise" element={<Noise />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
