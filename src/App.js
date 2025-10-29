import React, { useState } from 'react';
import Homepage from './Components/Homepage.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Homepage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;
