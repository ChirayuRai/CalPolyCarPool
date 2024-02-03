import { Button, Flex, Radio, RadioChangeEvent } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import AppHeader from '../components/AppHeader'; // Import the AppHeader component

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

  const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '80vh',
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
              <Radio.Group defaultValue={destination} size="large" onChange={handleDestinationChange}>
                <Radio.Button value="Campus">Campus</Radio.Button>
                <Radio.Button value="Home">Home</Radio.Button>
              </Radio.Group>
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