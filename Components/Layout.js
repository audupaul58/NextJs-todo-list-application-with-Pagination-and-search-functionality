import React from 'react'
import Navbat from './TopHead/Navbat';

const Layout = ({children}) => {
  return (
    <div style={{width: '100vw'}}>
        <Navbat/>
        <main>{children}</main>
    </div>
  )
}

export default Layout