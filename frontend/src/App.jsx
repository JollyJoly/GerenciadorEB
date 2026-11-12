import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/page.jsx';
import Militares from './pages/militares/page.jsx';
import Secoes from './pages/secoes/page.jsx';
import Registro from './pages/registro/page.jsx';
import Update from './pages/registro/update.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/militares" element={<Militares />} />
                <Route path="/secoes" element={<Secoes />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/update/:id" element={<Update />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;