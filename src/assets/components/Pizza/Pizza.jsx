import React, { useState, useEffect } from "react";
import CardPizza from "../CardPizza/CardPizza";

const Pizza = () => {
    const [pizza, setPizza] = useState([]);
    
    const consultarApi = async () => {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    };

    useEffect(() =>{
        consultarApi()
    },[])

    
    return (
      <div className="container">
        <CardPizza pizza={pizza}/>
      </div>
    );
  };
  
  export default Pizza;