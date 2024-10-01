import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App