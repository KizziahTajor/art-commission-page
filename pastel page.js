'use client'

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const Pastel = () => {
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
          <h1 className="mb-4">MY PASTEL ART COMMISSIONS</h1>
          <p>Welcome to my pastel art commission service, where soft hues and textures create a delicate and expressive artwork.
             With a focus on blending colors and creating depth, I specialize in producing pastel artworks that evoke emotions and beauty. Whether portraits, landscapes, or abstract compositions, each piece is crafted to captivate and inspire.</p>
          <Row className="mb-4">
            <Col md={3}>
              <img src="/images/fish.jpg" alt="Artwork 1" className="img-fluid rounded"/>
            </Col>
            <Col md={3}>
              <img src="/images/flower.jpg" alt="Artwork 2" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/grass.jpg" alt="Artwork 3" className="img-fluid rounded" />
            </Col>
            <Col md={3}>
              <img src="/images/rose.jpg" alt="Artwork 4" className="img-fluid rounded" />
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

export default Pastel;
