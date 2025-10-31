import React, { useState } from 'react';
import Dashboard from './Components/Dashboard.jsx';
import Home from './Components/Homepage.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
   // <Dashboard/>
    <Home/>
  );
}

export default App;
