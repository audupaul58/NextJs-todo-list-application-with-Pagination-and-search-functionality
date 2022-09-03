import React, { useState } from 'react';
import {AiFillTrademarkCircle, AiFillCloseCircle} from 'react-icons/ai'
import styles from './Navbat.module.scss'
import {GiHamburgerMenu} from 'react-icons/gi'



const navbat = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <div className={styles.navbar}>
        <div className={styles.navlogo}>
        <h4 className={styles.icon}><AiFillTrademarkCircle/><strong>TODO LIST</strong></h4>
       
        </div>
       
           
       

        
    </div>
  )
}

export default navbat