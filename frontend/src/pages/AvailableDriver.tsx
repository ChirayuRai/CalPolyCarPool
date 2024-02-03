import InfiniteTable from '../components/InfiniteTable';
import { Button } from 'antd';

const AvailableDriver: React.FC = () => {
  return (
    <>
      <InfiniteTable ActionButton={() => <Button>Join Ride</Button>}/>
    </>
  );
};

export default AvailableDriver;