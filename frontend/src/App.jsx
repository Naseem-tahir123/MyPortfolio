import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-dark flex flex-col justify-between selection:bg-primary selection:text-dark">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App