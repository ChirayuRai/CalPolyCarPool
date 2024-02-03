import React, { useState } from 'react';
import './App.css'; // Assuming you have some CSS file for global styles
import { Flex, Layout, Radio, RadioChangeEvent } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Home from './pages/Home';
import AppHeader from './components/AppHeader';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import AvailableDriver from './pages/AvailableDriver';
import RideRequest from './pages/RideRequest';
import Profile from './pages/Profile';
import Connect from './pages/Connect';

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
  // backgroundColor: '#4096ff',
};

const layoutStyle = {
  //overflow: 'hidden',
  height: '100vh'
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};


const App: React.FC = () => {
  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [selectedView, setSelectedView] = useState(<Home />); 

  const handleSelectedViewChange = (e: RadioChangeEvent) => {
    setSelectedView(e.target.value);
  }

  return (
    <div className="App">
      {/* <Flex gap="middle" wrap="wrap"> */}
        <Layout style={layoutStyle}>
          <AppHeader />
          <Content style={contentStyle}>
            {selectedView}
          </Content>
          { 
            isAuthenticated ? 
              <Footer style={footerStyle}>
              <Radio.Group defaultValue={<Home />} size="large" onChange={handleSelectedViewChange}>
                <Radio.Button value={<Home />}>Home</Radio.Button>
                <Radio.Button value={<AvailableDriver />}>Available Drivers</Radio.Button>
                <Radio.Button value={<RideRequest />}>Rider Requests</Radio.Button>
                <Radio.Button value={<Connect />}>Connect</Radio.Button>
                <Radio.Button value={<Profile />}>Profile</Radio.Button>
              </Radio.Group>
              </Footer>
            : 
              <></>
          }
        </Layout>
      {/* </Flex> */}
    </div>
  );
};

export default App;

