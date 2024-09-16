import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import NavBar from './components/NavBar'
import Alert from './components/Alert';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
  const handlerDark = () => {
   if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enable', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enable', 'success');
    };
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  };
  
  return (
    <>
    <NavBar mode={mode} handler={handlerDark}/>
    <Alert alert={alert}/>
    <div className='container'>
    <Routes>
          <Route path="/" element={ <Container heading="Try TextUtils - Words counter, Character counter, Uppercase, Lowercase" mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About  heading="About us" mode={mode}/>} />
        </Routes>
   
      
   
    </div>
    
    </>
  )
}

export default App
