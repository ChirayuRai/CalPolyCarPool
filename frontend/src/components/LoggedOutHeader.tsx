// LoggedOutHeader.tsx
import React, {useState} from 'react';
import { Layout, Typography, Button, Row, Col, Flex } from 'antd';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './styles.css'; // Import the external CSS file

const { Header } = Layout;
const { Title } = Typography;

const LoggedOutHeader: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <Header style={{ backgroundColor: '#004F0D' }} className='text-white'>
      <Row className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        <Col flex="auto">
          <Title level={3} style={{ margin: '15px 0', color: '#FFFFFF', textAlign: 'left' }}>CalPolyCarPool</Title>
        </Col>
        {/* Show the buttons only on screens larger than md */}
        <Col className='hidden md:flex'>
          <Button className="custom-button" style={{marginRight: '10px'}}>Login</Button>
          <Button className="custom-button">Sign up</Button>
        </Col>
        {/* Toggle button for smaller screens */}
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
        </div>
        {/* Sidebar */}
        <div className={`md:hidden ${nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#004F0D] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
          <Title level={3} style={{ margin: '15px 0', color: '#FFFFFF', textAlign: 'left', marginLeft: '16px' }}>CalPolyCarPool</Title>
          <div>
            <button className='w-full p-4 border-b border-white-600 uppercase'>Login</button>
          </div>
          <div>
            <button className='w-full p-4 uppercase'>Signup</button>
          </div>
        </div>
      </Row>
    </Header>
  );
};

export default LoggedOutHeader;