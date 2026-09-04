import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
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
      <ChatWidget />
    </Router>
  )
}

export default App