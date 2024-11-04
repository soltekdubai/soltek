import Image from "next/image";
import { FC } from "react";
import "./globals.css";

const Home: FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#1b2a49] via-[#2a3b65] to-[#0e1b34] p-8 sm:p-20 space-y-20">

      {/* Banner Section */}
      <header className="relative flex flex-col items-center justify-center text-center min-h-[450px] mb-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b2a49] to-[#0e1b34] opacity-90"></div>
        <Image
          src="/background-image.jpg"
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="relative z-10 p-8 bg-opacity-90 backdrop-blur-sm rounded-lg">
          <Image src="/soltek-logo.png" alt="SolTek Logo" width={300} height={80} priority />
          <h1 className="text-4xl font-bold mt-4 text-[#e2952e]">Sustainable Energy Solutions for the UAE</h1>
          <p className="text-lg mt-4 max-w-xl mx-auto text-[#f5f5f5]">
            Empowering sustainable energy initiatives through innovative solar technology and field services.
          </p>
        </div>
      </header>

      {/* Mission and Vision Sections in CSS Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Mission Section */}
        <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg space-y-4">
          <Image src="/mission.jpg" alt="Mission Image" width={400} height={300} className="rounded-lg object-cover w-full" />
          <h2 className="text-3xl font-bold text-[#e2952e]">Our Mission</h2>
          <p className="text-lg text-[#f5f5f5]">
            Our mission is to drive sustainable energy adoption by delivering reliable, efficient, and innovative solar solutions for individuals and businesses alike.
          </p>
        </div>

        {/* Vision Section */}
        <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg space-y-4">
          <Image src="/vision.jpg" alt="Vision Image" width={400} height={300} className="rounded-lg object-cover w-full" />
          <h2 className="text-3xl font-bold text-[#e2952e]">Our Vision</h2>
          <p className="text-lg text-[#f5f5f5]">
            We envision a world where sustainable energy solutions are accessible, efficient, and affordable. SolTek is committed to advancing renewable energy through innovation and excellence.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="text-center space-y-8 mb-20">
        <h2 className="text-4xl font-bold text-[#e2952e]">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#1b2a49] mb-4">Integrity</h3>
            <p className="text-lg text-[#f5f5f5]">
              We prioritize honesty and transparency, building trust with our clients and partners.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#1b2a49] mb-4">Innovation</h3>
            <p className="text-lg text-[#f5f5f5]">
              We constantly push boundaries to create advanced and sustainable energy solutions.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-[#1b2a49] mb-4">Excellence</h3>
            <p className="text-lg text-[#f5f5f5]">
              We hold ourselves to the highest standards, ensuring exceptional results in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center space-y-4 mt-16 mb-8">
        <a href="/contact" className="primary-button">
          Contact Us to Learn More
        </a>
        <a href="/investors" className="primary-button text-sm font-semibold text-[#e2952e]">
          Investor Information
        </a>
      </div>
    </div>
  );
};

export default Home;
