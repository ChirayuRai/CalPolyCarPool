// Login.tsx
import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // Add your authentication logic here
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div style={{ backgroundColor: '#52c41a', padding: '1rem', marginBottom: '2rem', width: '100%'}}>
        <h1 style={{ color: '#fff', fontSize: '2rem', margin: 0, textAlign: 'center'}}>CalPolyCarPool</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem' }}>Let's get you logged in</h2>
          <p style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1rem' }}>Enter your information</p>
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
  );
};

export default Login;
