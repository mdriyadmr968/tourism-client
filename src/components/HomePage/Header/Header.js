import React from 'react';
import Bg from "../../../images/background.jpg";
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
      <div className="headerWrapper">
        <div
          className="img-fluid"
          style={{
            background: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <Container>
            <div className="img-fluid d-flex justify-content-center align-items-center ">
              <div className="text-center my-5 py-5">
                <div>
                  <h1 className="fw-bold" style={{ color: "Brown" }}>
                    Welcome to Exploriana
                  </h1>
                  <p className="my-4  fs-5 text-primary fw-bold">
                    “The world is a book and those who do not travel read only
                    one page” – St. Augustine of Hippo
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Header;