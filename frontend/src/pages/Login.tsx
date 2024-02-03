// Login.tsx
import React from 'react';
import { Layout, Typography, Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AppHeader from '../components/AppHeader'; // Import the AppHeader component

const { Content } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 128px)', // 128px for header and footer
  lineHeight: '120px',
  backgroundColor: '#FFFFFF',
};

const onFinish = (values: any) => {
  console.log('Received values:', values);
  // Add your logic for handling form submission here
};

const Login: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <AppHeader />
    <Content style={contentStyle}>
    <div style={{ height: '1vh', display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '350px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '-4.5rem' }}>Let's get you logged in</h2>
          <p style={{ textAlign: 'center', marginBottom: '1px', fontSize: '1rem' }}>Enter your information</p>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Row justify="space-evenly">
                <Col>
                  <Button type="default" htmlType="submit" style={{ width: '100%' }}>
                    Log in
                  </Button>
                </Col>
                <Col>
                  <Button type="default" style={{ width: '100%' }}>
                    Sign up
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    </Content>
  </Layout>
);

export default Login;