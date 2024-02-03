import React, { useState, useEffect } from 'react';
import { Row, Col, Avatar, Button, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    numericalRating: 0,
    starRating: 0,
    interests: [],
    gender: '',
    year: 0,
    birthday: '',
    role: '',
    address: '',
    email: '',
  });

  useEffect(() => {
    // Make an API call to fetch user profile data
    // Replace the following with your actual API endpoint
    fetch('https://example.com/api/user/profile')
      .then(response => response.json())
      .then(data => setUserProfile(data))
      .catch(error => console.error('Error fetching user profile:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <p>Rating: {userProfile.numericalRating}</p>
                  <Rate allowHalf disabled defaultValue={userProfile.starRating} style={{ fontSize: 16 }} />
                </div>
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
