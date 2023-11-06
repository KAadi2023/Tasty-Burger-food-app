import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

const Section4 = () => {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} alt="Promotion" className="img-fluid" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                doloribus voluptatibus ex accusamus aperiam, necessitatibus
                tempora autem unde explicabo quasi
                numquam provident!
              </p>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum consequuntur, magnam alias pariatur facere.
                  </p>
                </li>
                <li>
                  <p>
                    Harum consequuntur, magnam alias pariatur byruh facere
                    perferendis.
                  </p>
                </li>
                <li>
                  <p>
                    dolor sit amet consectetur adipisicing elit.
                    Harum consequuntur, magnam alias pariatur facere.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll">
      </section>
    </>
  );
};

export default Section4;
