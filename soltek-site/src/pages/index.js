import React from "react"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const IndexPage = () => (
  <Parallax pages={3}>
    <ParallaxLayer offset={0} speed={0.5}>
      <h1>Welcome to SolTek</h1>
      <p>Your trusted partner in solar energy solutions</p>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.5}>
      <h2>Our Services</h2>
      <p>We offer solar maintenance, consulting, and optimization services</p>
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={0.5}>
      <h2>Contact Us</h2>
      <p>soltekdubai@protonmail.ch</p>
    </ParallaxLayer>
  </Parallax>
)

export default IndexPage
