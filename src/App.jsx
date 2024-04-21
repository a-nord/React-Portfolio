import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
  <>    
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />      
        <Route path="/aboutme" element={<AboutMe />} />
        {/* <Route path="/aboutme/book-of-month" element={<Book />} /> */}
        {/* <Route path="/aboutme/show-of-month" element={<Show />} /> */}
        {/* <Route path="/aboutme/song-of-month" element={<Song />} /> */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
    <Footer />
  </>
 );
}

export default App;
