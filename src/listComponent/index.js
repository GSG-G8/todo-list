import React from 'react';
import useState from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { List, Skeleton, Checkbox, Button } from 'antd';

const fakeData = [
  {
    id: 0,
    title: 'update financial report',
    description: 'do your magic to finish your work',
    done: false,
    tags: ['work'],
  },
  {
    id: 1,
    title: 'doing dishes',
    description: 'play in kitchen with dirty dishes',
    done: true,
    tags: ['homework'],
  },
];

const ListData = ({ data }) => {
 if (!data){data=fakeData}
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              pop={item.id}
              onClick={(e) => {
                console.log(e.pop);
              }}
              danger
            >
              delete
            </Button>,
          ]}
        >
          <Skeleton title={false} loading={false} active>
            <Checkbox defaultChecked={item.done} />
            <List.Item.Meta title={item.title} />
            <div>{item.description}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default ListData;
