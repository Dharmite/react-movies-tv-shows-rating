import {BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import MovieDetails from './pages/movies/MovieDetails'
import TvShowDetails from './pages/tv/TvShowDetails'
import Rated from './pages/rated/Rated'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<Rated />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TvShowDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
