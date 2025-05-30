import React, { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(true);

  const toggleMessage = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <div className="App">
      <h1>React Toggle </h1>
      <button onClick={toggleMessage}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <h1>Welcome to React!</h1>}
    </div>
  );
}

export default App;
