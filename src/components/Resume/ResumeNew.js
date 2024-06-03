import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

import Particle from "../Particle";
import pdf from "../../Assets/../Assets/wejden-cv-2024-en.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { t } = useTranslation();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ height: "690px" }}>
      <Container fluid className="resume-section h-100">
        <Particle />
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="mt-5 pt-5 mb-5 pb-5"
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t("Download Resume")}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
