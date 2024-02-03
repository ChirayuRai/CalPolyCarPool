// Registration.tsx
import React, { useState } from 'react';
import { Layout, Typography, Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoggedOutHeader from '../components/LoggedOutHeader'; // Import the AppHeader component
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

const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0]; // Get the first file from the selected files
  const fileSizeLimit = 5 * 1024 * 1024; // 5 MB

  // Check if a file was selected
  if (file) {
    // Check if the file size exceeds the limit
    if (file.size > fileSizeLimit) {
      alert('File size exceeds the limit of 5 MB');
      return; // Don't proceed further
    }

    // You can perform additional checks or operations here
    // For example, validate the file type, display a preview, etc.

    // Do something with the file, such as upload it to a server or store it in state
    console.log('Selected file:', file);
  } else {
    // No file selected
    console.log('No file selected');
  }
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

  const handleLogin = () => {
    console.log('Logging in...');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LoggedOutHeader onLogin={handleLogin}/>
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

              <b className='flex justify-start'>Address</b>
              <Form.Item
                name="Address"
                rules={[{ required: true, message: 'Please input your Address!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Address" />
              </Form.Item>
              
              <Form.Item label={<b>Profile Picture</b>}>
                <input type="file" accept=".png, .jpg, .jpeg, .svg" onChange={handleFileUpload} />
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