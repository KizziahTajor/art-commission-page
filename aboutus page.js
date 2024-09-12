'use client'

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';

const AboutUs = () => {
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
          <h1 className="mb-4">ABOUT US</h1>
          <p>Welcome to Kizziah's Art Commissions!</p>
          <p>At Kizziah's, we believe in the power of creativity and the magic of personalized art. 
            Our mission is to bring your unique visions to life through custom artwork that speaks to your heart and soul.</p>
          <h3>Who We Are</h3>
          <p>Kizziah's Art Commissions is a passionate team of artists led by Kizziah,
             a talented and dedicated creator with a love for turning ideas into beautiful, tangible pieces.
             With years of experience in various art forms and styles, Kizziah and the team are committed to delivering high-quality,
              custom art that reflects your individuality and style.</p>
          <h3>What We Offer</h3>
          <p>We specialize in a wide range of art commissions, including:</p>
          <ul className="text-left">
            <li>Portraits: Capturing the essence of your loved ones, pets, or even your favorite fictional characters.</li>
            <li>Fan Art: Bringing your favorite fandoms to life with unique and personalized interpretations.</li>
            <li>Original Designs: Crafting one-of-a-kind pieces that are tailor-made to your specifications.</li>
            <li>Digital and Traditional Media: Whether you prefer the crisp lines of digital art or the tactile beauty of traditional mediums, we've got you covered.</li>
          </ul>
          <h3>Why Choose Us</h3>
          <p>At Kizziah's Art Commissions, we pride ourselves on our attention to detail, creativity, and commitment to customer satisfaction.
             We work closely with each client to ensure that every piece of art we create is a true reflection of their vision and passion.
              Our goal is to make the process as enjoyable and fulfilling as possible, from the initial concept to the final masterpiece.</p>
          <p>Thank you for considering Kizziah's Art Commissions. We can't wait to work with you and bring your artistic dreams to life!</p>

          <Link href="/" passHref>
            <Button variant="primary" className="mt-3">Back to Main</Button>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;
