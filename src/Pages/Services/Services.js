import "./Services.css";

import { useEffect, useState } from "react";

import { Row } from "react-bootstrap";

import Service from "../Services/Service";

const Services = () => {
  const [serv, setServ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServ(data.services));
    // .then((data) => console.log(data.services));
  }, []);

  return (
    <div>
      <h2 className="text-success mt-5">Hospital Services</h2>
      <div className="service-container">
        <Row className="justify-content-md-center mx-5">
          {serv.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
