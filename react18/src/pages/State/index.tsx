/*
 * @Author: ZY
 * @Date: 2023-01-15 15:57:36
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-31 21:00:15
 * @FilePath: /wujie-apps/react18/src/pages/State/index.tsx
 * @Description: 状态保持
 */
import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
 const IndexPage:React.FC<{}> =  (props)=>{

  const navigation = useNavigate();

 return (
  <div> 
    <h1>状态保存</h1>
  </div> 
  ); 
 } 
 export default IndexPage