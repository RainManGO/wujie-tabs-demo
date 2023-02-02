/*
 * @Author: ZY
 * @Date: 2022-12-08 15:17:18
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-31 16:29:50
 * @FilePath: /wujie-apps/main/src/pages/react18/index.tsx
 * @Description: 文件描述
 */
import React from 'react';
import styles from './index.module.less';
import WujieReact from 'wujie-react';
import { useNavigate, useLocation } from "react-router-dom";

const IndexPage: React.FC<{name:string}> = (props) => {
  const navigation = useNavigate();
  const location = useLocation();
  const react18Url = "//localhost:8001/";
  // const path = location.pathname.replace("/react18-sub", "").replace("/sreact18", "");

  
  // path && WujieReact.bus.$emit("react18-router-change", path);
  const wjProps = {
    jump: (path:string) => {
      navigation(`/${path}`);
    },
    name:props.name
  };

  return (
    <div className={styles.bg}>
      <WujieReact width="100%" height="100%" name={props.name} url={react18Url} props={wjProps}  alive={true}/>
    </div>
  );
};
export default IndexPage;
