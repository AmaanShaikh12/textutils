//import logo from './logo.svg';
import Textform from './components/Textform';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enabled");
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="textutils2" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Textform heading="enter the text to analyze" mode={mode} showalert={showalert}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
