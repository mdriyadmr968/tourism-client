import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {
  const { deatilsId } = useParams();
  const [service, setService] = useState({});
  // console.log(service);
  // console.log(deatilsId);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${deatilsId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <Card>
        <Card.Header>post Details:</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>Showing post details for: {deatilsId} </p>
            <p>{service.name}</p>
            <p>{service.description}</p>
            <p>{service.img}</p>
          </blockquote>
        </Card.Body>
      </Card>
      <button className="btn-primary">Place Order</button>
    </div>
  );
};

export default Details;
