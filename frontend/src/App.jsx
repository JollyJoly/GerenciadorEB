import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/page.jsx';
import Militares from './pages/militares/page.jsx';
import Secoes from './pages/secoes/secoes.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/militares" element={<Militares />} />
                <Route path="/secoes" element={<Secoes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;