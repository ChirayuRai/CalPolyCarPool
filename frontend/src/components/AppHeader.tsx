import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader: React.FC = () => {
  return (
    <Header style={{ backgroundColor: '#004F0D', color: '#FFFFFF' }}>
      <Row justify="center" align="middle">
        {/* <Col>
          <img src="/path/to/your/logo.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        </Col> */}
        <Col>
          <Title level={3} style={{ margin: 15, color: 'white', textAlign: 'center' }}>CalPolyCarPool</Title>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
