import InfiniteTable from '../components/InfiniteTable';
import { Button } from 'antd';

const RideRequest: React.FC = () => {
  return (
    <>
      <InfiniteTable ActionButton={() => <Button>Ping Rider</Button>}/>
    </>
  );
};

export default RideRequest;