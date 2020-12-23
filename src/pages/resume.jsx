import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col } from 'antd';
import SEO from '../components/Seo';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    const pageToggle = () => {
      if (pageNumber === 1) {
        this.setState({ pageNumber: 2 });
      } else {
        this.setState({ pageNumber: 1 });
      }
      return 1;
    };

    return (
      <div>
        <SEO
          title="Resume"
          description="Hi, I'm Tushar, I like learning new things and solving challenging problems.
           I'm interested in remote based software engineering positions. Have a look at my resume for details related to my past projects."
          path="resume"
        />
        <Document
          file="../resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page width={1024} pageNumber={pageNumber} />
        </Document>
        { numPages > 1 && (
        <Row justify="center" style={{ background: 'lightslategray' }}>
          <Col span={2}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={pageToggle}>{pageNumber === 1 ? 'Next Page' : 'Previous Page'}</Button>
          </Col>
        </Row>
        ) }
        <Row justify="center" style={{ background: 'lightslategray' }}>
          <Col span={2}>
            <a href="../resume.pdf" target="_blank"><h3 style={{ color: 'black' }}>Download</h3></a>
          </Col>
        </Row>
      </div>
    );
  }
}
