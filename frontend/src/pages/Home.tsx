import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';

const Home: React.FC = () => {
  const [isDriver, setIsDriver] = useState(true);
  const [isActivated, setIsActivated] = useState(false);
  const [activatedText, setActivatedText] = useState("");


  const handleRideRequest = () => {
    setIsActivated(true);
    setActivatedText("Ride Requested!");
    console.log("Initiating ride request...");
  };

  const handleOfferDrive = () => {
    setIsActivated(true);
    setActivatedText("Driving!")
    console.log("Offering to drive...");
  };

  const handleCancel = () => {
    setIsActivated(false);
    console.log("Cancelling...");
  }

  const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    padding: "0 500px",
  };

  return (
    <Flex gap="middle" align="start" vertical>
      <Flex 
        style={boxStyle} 
        justify="center" 
        align="center" 
        vertical gap="small"
      >
        {
          !isActivated ?
            <>
              <Button 
                onClick={handleRideRequest}
                block 
                style={{ width: "100%", height: 100, fontSize: 25 }}
              >
                I need a Ride!
              </Button>
              <Button 
                onClick={handleOfferDrive} 
                block 
                style={{ width: "100%", height: 100, fontSize: 25 }}
                disabled={!isDriver}
              >
                I can Drive!
              </Button>
            </>
          :
            <>
              <Title>{activatedText}</Title>
              <Button 
                onClick={handleCancel} 
                block 
                style={{ width: "100%", height: 100, fontSize: 25 }}
              >
                Cancel
              </Button>
            </>
        }
      </Flex>
    </Flex>
  );
};

export default Home;