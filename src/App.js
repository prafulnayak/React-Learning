import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
      <div>
        <NavBar title="NavigationBar"/>
        <Routes>
          <Route path="/features" element={<About/>} />
          <Route path="/forms" element={<TextForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
