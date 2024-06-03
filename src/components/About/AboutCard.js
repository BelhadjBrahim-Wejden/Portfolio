import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("Hi Everyone, I am")}{" "}
            <span className="purple">Wejden Belhadj Brahim </span>
            {t("from")} <span className="purple"> {t("Tunisia")}.</span>
            <br />
            {t(
              "I am currently employed as a software developer at Aures group."
            )}
            <br />
            <br />
            {t("Apart from coding, some other activities that I love to do!")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              {t("Travelling")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {t("Strive to build things that make a difference!")}{" "}
          </p>
          <footer className="blockquote-footer">Wejden</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
