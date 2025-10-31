import React, { useState } from 'react';
import Homepage from './Components/Homepage.jsx';
import Dashboard from './Components/Dashboard.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
     <Dashboard></Dashboard>
   // <Homepage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;
