import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {

  const[dark,setDark]= useState(false);
  
  return (
    <div className="navigation">
      
<Navbar title="MyApp"></Navbar>
    <TextForm></TextForm>
    <About></About>
    </div>
  );
}

export default App;
