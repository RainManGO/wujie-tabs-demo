import React from 'react';
import { Outlet } from 'react-router-dom';
const IndexPage: React.FC<{}> = (props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default IndexPage;
