import image from "../../assets/AshleyNord_Resume.png"
import pdf from "../../assets/AshleyNord_Resume.pdf";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

export default function resume() {
    return (
        <Container className="resumePage">
            <div className="btn">
            <Button href={pdf} target="_blank" style={{ maxWidth: "250px" }} className="link" >
                <AiOutlineDownload />&nbsp;Download Resume
            </Button>
            </div>
        
            <img src={ image } alt="resume" className="resume" />

            <div className="btn2">
            <Button href={pdf} target="_blank" style={{ maxWidth: "250px" }} className="link">
                <AiOutlineDownload />&nbsp;Download Resume
            </Button>
            </div>
        </Container>
    );
    }

// import React from 'react';

// const PDFViewer = () => {
//  return (
//  <div className='resume'>
//  <iframe src="../../assets/AshleyNord_Resume.pdf" width="1000px" height="100px"  />
//  </div>
//  );
// };
// export default PDFViewer;
