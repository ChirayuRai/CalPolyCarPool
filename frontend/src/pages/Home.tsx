import { Button, Flex, Radio, RadioChangeEvent } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import './styles.css'; // Import the external CSS file

const Home: React.FC = () => {
  const [isDriver, setIsDriver] = useState(true);
  const [isActivated, setIsActivated] = useState(false);
  const [activatedText, setActivatedText] = useState("");
  const [destination, setDestination] = useState("Campus");


  const handleRideRequest = () => {
    setIsActivated(true);
    setActivatedText(`Ride requested to ${destination}!`);
    console.log("Initiating ride request...");
  };

  const handleOfferDrive = () => {
    setIsActivated(true);
    setActivatedText(`Driving to ${destination}!`)
    console.log("Offering to drive...");
  };

  const handleCancel = () => {
    setIsActivated(false);
    console.log("Cancelling...");
  }

  const handleDestinationChange = (e: RadioChangeEvent) => {
    setDestination(e.target.value);
  }

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  };
  
  const boxStyle: React.CSSProperties = {
    padding: '20px',
    borderRadius: '8px',
    width: '350px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
    {
      !isActivated ?
        <div style={boxStyle}>
          <Radio.Group defaultValue={destination} size="large" onChange={handleDestinationChange}>
            <Radio.Button value="Campus">Campus</Radio.Button>
            <Radio.Button value="Home">Home</Radio.Button>
          </Radio.Group>
          <div>
          <button onClick={handleRideRequest} className='custom-button2'>
            I need a Ride!
          </button>
          </div>
          <div style={{ marginTop: '10px' }}>
          <button onClick={handleOfferDrive} className='custom-button2' style={{ paddingInline: '37%' }} disabled={!isDriver}>
            I can Drive!
          </button>
          </div>
        </div>
      :
        <div style={boxStyle}>
          <Title>{activatedText}</Title>
          <Button onClick={handleCancel} block>
            Cancel
          </Button>
        </div>
    }
    </div>
  );
};

export default Home;