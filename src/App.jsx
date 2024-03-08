import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import {Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [load, upadateLoad] = useState(true);
  return (
  <>
    <Navbar />
    <Routes>
    <Route path="/" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    <Footer />
  </>
 );
}

export default App;
