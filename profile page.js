'use client'

import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
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
        <Container className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)'
          , padding: '20px', borderRadius: '10px', maxWidth: '600px' }}>
          <h1>MY PROFILE</h1>
          <Col sm={12} className="text-center mt-4 mx-auto">
            <div style={{ width: '250px', height: '200px', borderRadius: '50%',
               overflow: 'hidden', margin: '0 auto' }}>
              <Image
                src="/images/pfp.jpg"  
                alt="Profile Picture"
                width={250}
                height={230}
              />
            </div>
            <p>I am Kizziah Zandra F. Tajor, 21 years old.</p>
            <p>I have been an art commissioner for 3 years,
               creating unique and personalized art for clients around the world.</p>
            <h3>Contact Information</h3>
            <p>Email: kifr.tajor.coc@phinmaed.com</p>
            <p>Phone: 0139-239-2393</p>
            <h3>Social Media</h3>
            <p>Facebook: kzaiah tajor</p>
            <p>Instagram: @inday123</p>
            <p>Twitter: @kizzi</p>
            <Link href="/" passHref>
              <Button variant="primary" className="mt-3">Back to Main</Button>
            </Link>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default Profile;
