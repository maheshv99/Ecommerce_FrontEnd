import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../index.css";

function Items(props) {
  return (
    <>
      <Card key={props.id} style={{ width: "18rem", margin:"1rem"}} className="cardhover"><br/>
        <Card.Img style={{width:"10rem",height:"13rem",margin:"0 20%"}} variant="top" src={props.img} />
        <Card.Body className="text-center">
          <Card.Title>{props.name}</Card.Title>
          {props.rating}<br/>
          <h5><strike style={{color:"grey"}}>{props.original}</strike></h5>
          <Button variant="primary">💵 {props.offer} </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Items;
