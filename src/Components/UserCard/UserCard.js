import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card border="danger" style={{ width: "18rem" , display:'flex' , flexWrap:"wrap"}}>
        <Card.Header style={{backgroundColor:'#E2C2B9' , fontStyle:"italic"}}>name: {user.name}</Card.Header>
        <Card.Body 
        style={{backgroundColor:'#F2DDC1' , color:'#99A799' , fontStyle:"italic"}}
        >
          <Card.Title> email: {user.email}</Card.Title>
          <Card.Text> Geo:{user.address.geo.lat} : {user.address.geo.lng}</Card.Text>
          
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default UserCard;