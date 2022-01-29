import Data from './Data';
import './App.css'
import Nav from './Nav';
import { useState, useEffect } from 'react';
import img1 from './R.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import LoginRegister from './Pages/LoginRegister';
import Contact from './Pages/Contact';
import Error from './Pages/Error'
import Footer from './Footer';
import AuthState from './AuthState';
import ChatMain from './ChatMain'


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
    loadData();
  }, [])

  // If page is in loading state, display 
  // loading message. Modify it as per your 
  // requirement.
  if (loading) {
    return <div className='loading'><img src={img1} /><span className='white'>Please be patient while the website loads</span></div>
  }

  // If page is not in loading state, display page.
  else {
    return (
      <div className="App">
        <AuthState>
          <Nav />
          <Routes>
            <Route exact path='/' element={<Data />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/chat' element={<ChatMain/>} />
            <Route element={<Error/>} />
            
          </Routes>
          <Footer />
        </AuthState>
      </div>
    );
  }
}

export default App;
