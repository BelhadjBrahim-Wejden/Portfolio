import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import women from "../../Assets/women.PNG";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("LET ME")} <span className="purple"> {t("INTRODUCE")} </span>{" "}
              {t("MYSELF")}
            </h1>
            <p className="home-about-body">
              {t(
                "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks"
              )}
              🤷‍♂️
              <br />
              <br />
              {t("My field of Interest's are building new")} &nbsp;
              <i>
                <b className="purple">{t("Web Technologies and Products")} </b>
              </i>
              <br />
              <br />
              {t(
                "Whenever possible, I also apply my passion for developing products with"
              )}
              <b className="purple">Nest.js</b> {t("and")}
              <i>
                <b className="purple">
                  {" "}
                  {t("Modern Javascript Library and Frameworks")}
                </b>
              </i>
              &nbsp; {t("like")}
              <i>
                <b className="purple">Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={women} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("FIND ME ON")}</h1>
            <p>
              {t("Feel free to")} <span className="purple">{t("connect with me")}</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BelhadjBrahim-Wejden"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/belhadj-brahim-wejden-61882a16b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
