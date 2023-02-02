/*
 * @Author: ZY
 * @Date: 2023-01-13 17:19:24
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-15 13:50:40
 * @FilePath: /wujie-apps/main/src/microApp/lifecycle.ts
 * @Description: 文件描述
 */
declare global{
  interface Window{
    __WUJIE:any
  }
}

const lifecycles = {
  beforeLoad: (appWindow:Window) => console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`),
  beforeMount: (appWindow:Window) => console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`),
  afterMount: (appWindow:Window) => console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`),
  beforeUnmount: (appWindow:Window) => console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`),
  afterUnmount: (appWindow:Window) => console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`),
  activated: (appWindow:Window) => console.log(`${appWindow.__WUJIE.id} activated 生命周期`),
  deactivated: (appWindow:Window) => console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`),
  loadError: (url: string, e: Error) => console.log(`${url} 加载失败`, e),
};
 
export default lifecycles;
