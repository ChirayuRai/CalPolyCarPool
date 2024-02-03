// App.tsx
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <div className='w-full h-full bg-gray-300'>
        {/* <p>THIS IS THE APP PAGE</p> */}
        <Profile /> {/* Render the Login component */}
      </div>
    </>
  );
}

export default App;
