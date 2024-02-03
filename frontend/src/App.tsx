import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import LoggedOutHeader from './components/LoggedOutHeader';
import Registration from './pages/Registration'
import Landing from './pages/Landing'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    // Perform login logic and set isLoggedIn state to true
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Landing />
      ) : (
        <LoggedOutHeader onLogin={handleLogin} />
      )}
      {/* Render other components based on user authentication */}
    </div>
  );
};

export default App;