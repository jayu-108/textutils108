import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "Textutils - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils - Light Mode"
    }
  }

  const toggleModeRed = () => {
    setMode('dark')
    document.body.style.backgroundColor = '#dc3545'
    showAlert("Red Theme has been enabled", "success")
  }

  const toggleModeYel = () => {
    setMode('dark')
    document.body.style.backgroundColor = '#ffc107'
    showAlert("Yellow Theme has been enabled", "success")
  }

  const toggleModeGreen = () => {
    setMode('dark')
    document.body.style.backgroundColor = '#198754'
    showAlert("Green Theme has been enabled", "success")
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed}
          toggleModeYel={toggleModeYel} toggleModeGreen={toggleModeGreen} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About aboutText="About Us"/>} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />} /> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
