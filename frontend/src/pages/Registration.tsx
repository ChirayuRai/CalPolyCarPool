import React from 'react';
import { Layout, Typography } from 'antd';
import AppHeader from '../components/AppHeader'; // Import the AppHeader component

const { Content } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 128px)', // 128px for header and footer
  lineHeight: '120px',
  backgroundColor: '#FFFFFF',
};

const RegistrationPage: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <AppHeader />
    <Content style={contentStyle}>
      Content
    </Content>
  </Layout>
);

export default RegistrationPage;