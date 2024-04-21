import React from "react";
import { Container} from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer(){  
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container className="footer">          
            <div className="credit">
              <h3>by Ashley Nord</h3>
            </div>

            <div className="copywright">
              <h3>Copyright © {year}</h3>
            </div>

            <div className="links">              
                <div className="social">
                  <a
                    href="https://github.com/a-nord"
                    target="_blank" className="link" 
                  >
                    <AiFillGithub />
                  </a>
                </div>

                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/ashleynord/"
                    target="_blank" className="link"                 
                  >
                    <FaLinkedinIn />
                  </a>
                </div>

                <div className="social">
                  <a
                    href="https://www.instagram.com/ashley.s.l.n"
                    target="_blank" className="link" 
                  >
                    <AiFillInstagram />
                  </a>
                </div>              
            </div>          
        </Container>
      );
    }
    