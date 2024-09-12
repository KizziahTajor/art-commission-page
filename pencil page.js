'use client'

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const Pencil = () => {
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
          <h1 className="mb-4">MY PENCIL ART COMMISSIONS</h1>
          <p>Welcome to my pencil art commission service, where I bring realism and detail to life on paper.
             With a focus on capturing emotions and nuances, I create custom pencil artworks that resonate with your vision.
             Whether portraits, landscapes, or intricate designs, each piece is crafted with passion and precision.</p>
          <Row className="mb-4">
            <Col md={3}>
              <img src="/images/girl.jpg" alt="Artwork 1" className="img-fluid rounded"/>
            </Col>
            <Col md={3}>
              <img src="/images/get.jpg" alt="Artwork 2" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/eye.jpg" alt="Artwork 3" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/cup.jpg" alt="Artwork 4" className="img-fluid rounded" />
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

export default Pencil;
