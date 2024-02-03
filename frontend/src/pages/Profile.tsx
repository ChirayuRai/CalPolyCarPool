// Profile.tsx
import React from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Profile: React.FC = () => {
  // Dummy data (replace with actual user data)
  const userProfile = {
    name: 'John Doe',
    rating: 4.5,
    interests: ['Carpooling', 'Technology'],
    gender: 'Male',
    year: 4,
    birthday: '1990-01-01',
    role: 'Driver',
    address: '123 Main St, City',
    email: 'john.doe@example.com',
    // Add more user details as needed
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#52c41a', padding: '1rem', marginBottom: '2rem', width: '100%' }}>
        <h1 style={{ color: '#fff', fontSize: '2rem', margin: 0, textAlign: 'center' }}>Profile</h1>
      </div>
      <Row justify="center">
        <Col span={12}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Row gutter={16} align="middle">
              <Col span={8}>
                <Avatar size={100} icon={<UserOutlined />} />
                <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>{userProfile.name}</h2>
                <p style={{ textAlign: 'center' }}>Rating: {userProfile.rating}</p>
              </Col>
              <Col span={16}>
                <p><strong>Interests:</strong> {userProfile.interests.join(', ')}</p>
                <p><strong>Gender:</strong> {userProfile.gender}</p>
                <p><strong>Year:</strong> {userProfile.year}</p>
                <p><strong>Birthday:</strong> {userProfile.birthday}</p>
                <p><strong>Role:</strong> {userProfile.role}</p>
                <p><strong>Address:</strong> {userProfile.address}</p>
                <p><strong>Email:</strong> {userProfile.email}</p>
                {/* Add more user details as needed */}
              </Col>
            </Row>
          </div>
          <Row justify="end" style={{ marginTop: '1rem' }}>
            <Col>
              <Button
                type="primary"
                style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#52c41a')}
              >
                Become a Driver
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
