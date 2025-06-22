import { useState } from 'react';
import iphone15pro from './assets/iphone15pro.jpg';
import macbookair from './assets/macbookair.jpg';
import macbookpro from './assets/macbookpro.jpg';
import visionpro from './assets/visionpro.jpg';
import airpods from './assets/airpods.jpg';
import applebackground from './assets/applebackground.jpg';

import './App.css';


import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx'; 



function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Section
        title="IPhone 15 Series"
        subtitle="New camera. New design. New era."
        image={iphone15pro}
      />
      <Section
        title="MacBook Air"
        subtitle="Supercharged by M3 chip."
        image={macbookair}
        reverse
      />
      <Section
        title="Vision Pro"
        subtitle="Welcome to the era of spatial computing."
        image={visionpro}
      />
       <Section
        title="Airpods Pro"
        subtitle="Iconic.Now Available with Active Noise Cancellation."
        image={airpods}
        reverse
      />
      <Section
        title="macbook Pro"
        subtitle="Supercharged by M3 chip"
        image={macbookpro}
      />
      
      <Footer />
    </div>
  );
}

export default App;

