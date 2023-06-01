import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./Card.module.css";

class Card extends React.Component{

  render(){
    return(
      <div className={styles.cardDiv}>
        <div className={styles.label}>Some label</div>
        <div className={styles.btnkeeper}>
          <button className={styles.btn}>Hover</button>
        </div>
      </div>
    )
  }
}

export default Card;