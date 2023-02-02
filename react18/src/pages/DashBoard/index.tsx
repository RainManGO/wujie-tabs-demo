/*
 * @Author: ZY
 * @Date: 2022-12-08 15:17:18
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-31 21:00:05
 * @FilePath: /wujie-apps/react18/src/pages/DashBoard/index.tsx
 * @Description: 文件描述
 */
import React,{useState} from 'react';
import { Button } from 'antd';
import styles from './index.module.less';

const IndexPage: React.FC<{}> = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.bg}>
      react 18 子应用 
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
    </div>
  );
};
export default IndexPage;
