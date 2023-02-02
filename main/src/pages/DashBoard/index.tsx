/*
 * @Author: ZY
 * @Date: 2022-12-08 15:17:18
 * @LastEditors: ZY
 * @LastEditTime: 2023-02-02 09:44:00
 * @FilePath: /wujie-apps/main/src/pages/DashBoard/index.tsx
 * @Description: 文件描述
 */
import React, { useRef, useState } from 'react';
import { Button, Tabs } from 'antd';
import WujieReact from 'wujie-react';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const defaultPanes = [
  { label: `Tab 1`, children:<WujieReact width="100%" height="100%" name='react18' url='//localhost:8001/dashboard'   alive={true}/>, key: "1" },
  { label: `Tab 2`, children:<WujieReact width="100%" height="100%" name='react18-1' url='//localhost:8001/state'   alive={true}/>, key: "2"},
]

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setItems([...items, { label: 'New Tab', children: <WujieReact width="100%" height="100%" name={`react${newActiveKey}`} url='//localhost:8001/dashboard'   alive={true}/>, key: newActiveKey }]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};

export default App;