import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Amit_Chaudhary_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 786 ? 1.7 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex flex-column align-items-center"
            onLoadSuccess={({ numPages: nextNumPages }) =>
              setNumPages(nextNumPages)
            }
            loading={
              <p style={{ color: "white", paddingTop: "2rem" }}>
                Loading resume…
              </p>
            }
            error={
              <p style={{ color: "white", paddingTop: "2rem" }}>
                Could not load the PDF. Check that the file exists under{" "}
                <code>src/Assets/</code> and rebuild.
              </p>
            }
          >
            {numPages != null &&
              Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={index + 1}
                  pageNumber={index + 1}
                  scale={scale}
                  style={{ marginBottom: index < numPages - 1 ? 28 : 0 }}
                />
              ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
