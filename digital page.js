'use client'

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const digital = () => {
  return (
    <>
      <div style={{ 
        backgroundImage: 'url(/images/backg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Container className="text-center py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
          <h1 className="mb-4">MY DIGITAL ART COMMISSIONS</h1>
          <p>Welcome to my digital art commission service, where creativity meets precision with IBIS PAINT. 
            I specialize in creating personalized and vibrant digital artwork, tailored to bring your ideas to life. 
            Whether you're looking for custom portraits, character designs, illustrations, or concept art,
             I use IBIS PAINT's versatile tools to deliver high-quality, detailed pieces that capture your vision with artistic flair.</p>
          <Row className="mb-4">
            <Col md={3}>
              <img src="/images/cy.jpg" alt="Artwork 1" className="img-fluid rounded"/>
            </Col>
            <Col md={3}>
              <img src="/images/babs.jpg" alt="Artwork 2" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/grad.jpg" alt="Artwork 3" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/heart.jpg" alt="Artwork 4" className="img-fluid rounded" />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={3}>
              <img src="/images/riz.jpg" alt="Artwork 5" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/tajor1.jpg" alt="Artwork 6" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/tajor2.jpg" alt="Artwork 7" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/digital.jpg" alt="Artwork 8" className="img-fluid rounded" />
            </Col>
          </Row>

          <Link href="/" passHref>
            <Button variant="primary" className="mt-3">Back to Main</Button>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default digital;
