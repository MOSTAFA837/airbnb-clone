import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>

          <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/search" element={<SearchPage />} />
          </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
