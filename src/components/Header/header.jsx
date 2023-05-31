import React from "react";
import ReactDOM from "react-dom/client";
import styles from './header.module.css';
import Login from "./Login/login";


 function ShowLogin() {
   return new Login()
 }

class Header extends React.Component{
  render(){
    return (
      <header className={styles.mainHeader}>
        <div>
          <ul className={styles.headerUl}>
            <li>Prod 12</li>
            <li>TEAM</li>
            <li onClick={ShowLogin}>Login</li>
            <li>Options</li>
          </ul>
        </div>
      </header>
    );
  }


}

export default Header;
