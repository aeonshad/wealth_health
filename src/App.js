import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Employees from './pages/employees';
import Home from './pages/home';
import CreateEmployee from './pages/employees/CreateEmployee';

function App() {
    return (
        <Router>
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employees/create" element={<CreateEmployee />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;

