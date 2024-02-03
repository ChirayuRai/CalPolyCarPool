// App.tsx
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className='w-full h-full bg-gray-300'>
        {/* <p>THIS IS THE APP PAGE</p> */}
        <Home /> {/* Render the Login component */}
      </div>
    </>
  );
}

export default App;
