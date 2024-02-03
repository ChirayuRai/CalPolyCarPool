// Registration.tsx
import React, { useState } from 'react';
import { Layout, Typography, Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AppHeader from '../components/AppHeader'; // Import the AppHeader component
import './styles.css'; // Import the external CSS file


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

const Registration: React.FC = () => {
  const [interestFields, setInterestFields] = useState<string[]>(['']); // State to manage interest fields

  // Function to handle adding interest field
  const handleAddInterestField = () => {
    setInterestFields([...interestFields, '']);
  };

  // Function to handle removing interest field
  const handleRemoveInterestField = (index: number) => {
    const newInterestFields = [...interestFields];
    newInterestFields.splice(index, 1);
    setInterestFields(newInterestFields);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Content style={contentStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '350px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '-4.5rem' }}>Let's get you Registered</h2>
            <p style={{ textAlign: 'center', marginBottom: '1px', fontSize: '1rem' }}>Enter your information</p>
            <Form
              name="registration"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <b className='flex justify-start'>Email</b>
              <Form.Item
                
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Email" />
              </Form.Item>

              <b className='flex justify-start'>Name</b>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Name" />
              </Form.Item>
              
              <b className='flex justify-start'>College Year</b>
              <Form.Item
                name="College Year"
                rules={[{ required: true, message: 'Please input your College year!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="College Year" />
              </Form.Item>

              <b className='flex justify-start'>Major</b>
              <Form.Item
                name="Major"
                rules={[{ required: true, message: 'Please input your Major!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Major" />
              </Form.Item>

              <b className='flex justify-start'>Gender</b>
              <Form.Item
                name="Gender"
                rules={[{ required: true, message: 'Please input your Gender!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Gender" />
              </Form.Item>

              <b className='flex justify-start'>Date of Birth</b>
              <Form.Item
                name="DOB"
                rules={[{ required: true, message: 'Please input your Date of Birth!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Date of Birth (MM/DD/YYYY)" />
              </Form.Item>

              <b className='flex justify-start'>Interest</b>
              <Form.Item>
                {interestFields.map((field, index) => (
                  <div key={index}>
                    <Form.Item
                      name={`interest-${index}`}
                      rules={[{ required: true, message: 'Please input your interest!' }]}
                      style={{ display: 'inline-block', width: 'calc(100% - 40px)' }}
                    >
                      <Input placeholder="Interest" />
                    </Form.Item>
                    <button className="custom-button" style={{marginLeft: '2px'}} onClick={() => handleRemoveInterestField(index)}>-</button>
                  </div>
                ))}
                <button className="custom-button" style={{ paddingInline: '15%' }} onClick={handleAddInterestField}>+</button>
              </Form.Item>

              <Form.Item
                name="Address"
                rules={[{ required: true, message: 'Please input your Address!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Address" />
              </Form.Item>



              <Form.Item>
                <button className='custom-button' style={{ width: '100%' }}>
                  Sign up
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Registration;