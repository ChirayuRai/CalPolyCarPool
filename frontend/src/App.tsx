// App.tsx
import React from 'react';
import Login from './pages/Login';

function App() {
  return (
    <>
      <div className='w-full h-full bg-gray-300'>
        {/* <p>THIS IS THE APP PAGE</p> */}
        <Login /> {/* Render the Login component */}
      </div>
    </>
  );
}

export default App;
