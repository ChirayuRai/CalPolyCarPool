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
        <Col className='hidden md:flex'>
          <Button className="custom-button" style={{marginRight: '10px'}}>Login</Button>
          <Button className="custom-button">Sign up</Button>
        </Col>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
          
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#004F0D] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <Title level={3} style={{ margin: '15px 0', color: '#FFFFFF', textAlign: 'left', marginLeft: '16px' }}>CalPolyCarPool</Title>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-white-600'>Login</li>
            <li className='p-4'>Signup</li>
          </ul>
        </div>
      </Row>
    </Header>
  );
};

export default LoggedOutHeader;