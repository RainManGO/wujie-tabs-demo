/*
 * @Author: ZY
 * @Date: 2023-01-28 11:16:11
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-29 13:52:20
 * @FilePath: /wujie-apps/react18/src/pages/app.tsx
 * @Description: 文件描述
 */
import React,{useEffect} from 'react'; 
import { RouterProvider } from 'react-router-dom';
import router from '../routes/router';

 const IndexPage:React.FC<{}> =  (props)=>{ 
  const routerJump = (path:string) =>  router.navigate(path)
  // 主应用告诉子应用跳转路由
  // useEffect(() => {
  //   window.$wujie?.bus.$on("react18-router-change", routerJump);
  //   // eslint-disable-next-line 
  // }, [])

  // 在 react18-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
  // const location = useLocation()
  // useEffect(() => {
  //   window.$wujie?.bus.$emit('sub-route-change', "react18", location.pathname)
  // }, [location])

 return (
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
  ); 
 } 
 export default IndexPage