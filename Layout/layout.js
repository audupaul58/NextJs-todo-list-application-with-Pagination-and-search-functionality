import React from 'react'
import TopHead from './../Components/TopHead/TopHead';
import Footers from './../Components/Footerr/footers';

const layout = ({children}) => {
  return (
    <div>
        <TopHead/>
        <main>{children}</main>
        <Footers/>
    </div>
  )
}

export default layout