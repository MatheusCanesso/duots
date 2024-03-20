// Importações
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'
import Projects from './pages/Projects'
import Container from './layout/Container'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Project from './pages/Project'

// customClass="min-height" - A Classe do CSS vai ser ativada porque a customClass está sendo chamada no App

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
