import React, { useEffect, useState } from 'react';
import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface Props {
  ActionButton: React.FC
} 

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 600;

const InfiniteTable: React.FC<Props> = ({ ActionButton }) => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        // message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  return (
    <div>
    <List bordered style={{ margin: 100 }}>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />}
              title={<b>{item.name.last}</b>}
              description={item.email}
            />
            <ActionButton />
          </List.Item>
        )}
      </VirtualList>
    </List>
    </div>
  );
};

export default InfiniteTable;