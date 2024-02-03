import React from 'react';
import { Layout } from 'antd';
import LoggedOutHeader from '../components/LoggedOutHeader';

const { Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 128px)', // 128px for header and footer
  lineHeight: '120px',
  backgroundColor: '#FFFFFF',
};

const Landing: React.FC = () => {
  const handleLogin = () => {
    console.log('Logging in...');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LoggedOutHeader onLogin={handleLogin} />
      <Content style={contentStyle}>
        
      </Content>
    </Layout>
  );
};

export default Landing;
