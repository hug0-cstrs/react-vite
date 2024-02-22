import './App.css'
import { ThemeProvider } from './themeProvider'
import Navbar from './components/Navbar';
import Home from './views/Home';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from "react";
import Contact from './views/Contact';
import Projects from './views/Projects';
import About from './views/About';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <ThemeProvider>
      <>
      {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />  
            <Projects />
            <Contact />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;

