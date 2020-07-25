import React from "react";
import "./cards.css";

function Cards(props) {
    return(
        <div className="cards">
            <h2>{props.name}</h2>
            <img src={props.pic} alt="avatar"/>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Cards;