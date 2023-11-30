import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default Root