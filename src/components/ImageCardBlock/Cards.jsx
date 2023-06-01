import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";

class Cards extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div >
        <Card/>
      </div>
    )
  }
}

export default Cards;