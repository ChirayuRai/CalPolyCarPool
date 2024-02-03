import InfiniteTable from '../components/InfiniteTable';
import { Button } from 'antd';

const Connect: React.FC = () => {
  return (
    <>
      <InfiniteTable ActionButton={() => <Button>Connect</Button>}/>
    </>
  );
};

export default Connect;