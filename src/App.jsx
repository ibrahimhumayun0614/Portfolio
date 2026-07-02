import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ScrollToHash from './components/ScrollToHash'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Placeholder from './pages/Placeholder'
import './App.css'

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__main">
        <ScrollToHash />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Navigate to="/#skills" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          </Routes>
        </PageTransition>
      </div>
    </div>
  )
}

export default App
