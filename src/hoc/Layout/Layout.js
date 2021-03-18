// library
import React from 'react'
import classes from './Layout.module.css'

// Component
import Header from '../../Components/Header/Header'

function Layout(props) {
  return (
      <>
        <Header />
        {props.children}
      </>
  );
}

export default Layout;