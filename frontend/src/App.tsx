import React, { useState } from 'react';
import './App.css'; // Assuming you have some CSS file for global styles
import { Flex, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Home from './pages/Home';
import AppHeader from './components/AppHeader';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#004F0D',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#FFFF',
};

// const siderStyle: React.CSSProperties = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#1677ff',
// };

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  overflow: 'hidden',
  height: '100vh'
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};


const App: React.FC = () => {
  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="App">
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <AppHeader />
          <Content style={contentStyle}>
            <Home />
          </Content>
          { 
            isAuthenticated ? 
              <Footer style={footerStyle}>
                Footer
              </Footer>
            : 
              <></>
          }
        </Layout>
      </Flex>
    </div>
  );
};

export default App;

