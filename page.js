'use client'
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";

const Home = () => {
  return (
    <>
      <div style={{ 
        backgroundImage: 'url(/images/backg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Container className="text-center mt-5" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '100px', borderRadius: '50px' }}>
           <h1><strong>KIZZIAH'S ART COMMISSION PAGE</strong></h1>
          <Row>
            <Col sm={6} className="text-center mt-4">
            </Col>
            <Row className="mt-4">
              <Col>
                <Link href="/profile" passHref>
                  <Button variant="primary" className="m-2">My Profile</Button>
                </Link>
                <Link href="/digital" passHref>
                  <Button variant="primary" className="m-2">Digital Art</Button>
                </Link>
                <Link href="/pencil" passHref>
                  <Button variant="primary" className="m-2">Pencil Art</Button>
                </Link>
                <Link href="/pastel" passHref>
                  <Button variant="primary" className="m-2">Pastel Art</Button>
                </Link>
                <Link href="/aboutus" passHref>
                  <Button variant="primary" className="m-2">About Us</Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home;
