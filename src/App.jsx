import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Placeholder from './pages/Placeholder'
import './App.css'

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Placeholder title="Projects" />} />
          <Route path="/skills" element={<Placeholder title="Skills" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
