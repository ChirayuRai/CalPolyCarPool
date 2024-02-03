// Home.tsx
import React from 'react';
import { Button, Row, Col } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const handleSignIn = () => {
    console.log('Sign In clicked'); // Add your sign-in logic here
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked'); // Add your sign-up logic here
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#52c41a', padding: '1rem', marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="./src/assets/CalPolyCarPoolLogo.jpg" alt="Car Pool Logo" style={{ width: '10%', height: 'auto', marginRight: '10px' }} />
        <div>
          <Button type="default" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button type="default" icon={<UserAddOutlined />} onClick={handleSignUp} style={{ marginLeft: '10px' }}>
            Sign Up
          </Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
      </div>
    </div>
  );
};

export default Home;
