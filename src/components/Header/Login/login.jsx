import React from "react";
import ReactDOM from "react-dom/client";
import styles from './login.module.css'

class Login extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.userBox}>
            <input type="text" name="" required="" />
            <label> Username</label>
          </div>
          <div className={styles.userBox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    );
  }
}

export default Login;