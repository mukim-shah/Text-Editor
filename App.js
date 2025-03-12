import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  
  const [mode, setMode] = useState('light') /// whter our mode is light or dark
  const [alert, setAlert] = useState(null)

  /// For Alert Msg
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    });
    
 }
 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has been Enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has been Enabled","success")
    }
  }
  return (
    <>
      <Navbar title="Mukim Shah" aboutus="About Us" mode={mode} toggleMode={toggleMode} />
      {/* for title change direct */}
      <Alert alert = {alert} />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
