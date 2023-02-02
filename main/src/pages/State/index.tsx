/*
 * @Author: ZY
 * @Date: 2023-01-29 10:00:03
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-29 10:11:30
 * @FilePath: /wujie-apps/main/src/pages/State/index.tsx
 * @Description: 文件描述
 */
import { Button } from 'antd';
import React, { useState } from 'react';
const IndexPage: React.FC<{}> = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button
        onClick={() => {
          setCount((c) => {
            return c - 1;
          });
        }}
      >
        -
      </Button>

      <span style={{ margin: '0 16px' }}>{count}</span>
      <Button
        onClick={() => {
          setCount((c) => {
            return c + 1;
          });
        }}
      >
        +
      </Button>
    </div>
  );
};
export default IndexPage;
