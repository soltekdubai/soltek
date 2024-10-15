import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../styles/global.css';

const Layout = () => (
  <Parallax pages={3}>
    <ParallaxLayer offset={0} speed={0.5}>
      <h1 className="text-4xl text-blue-800">Welcome to SolTek</h1>
      <p>Empowering Solar Energy Solutions</p>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.5}>
      <h2 className="text-3xl text-orange-500">Our Services</h2>
      <p>We offer solar maintenance, consulting, and optimization services</p>
    </ParallaxLayer>
  </Parallax>
);

export default Layout;
