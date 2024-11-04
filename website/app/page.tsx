import Image from "next/image";
import { FC } from "react";
import "./globals.css";

const Home: FC = () => {
  return (
    <div className="min-h-screen text-white space-y-20 bg-gradient-to-br from-[#1b2a49] via-[#2a3b65] to-[#0e1b34] p-8 sm:p-20">
      {/* Banner Section with Gradient Overlay and Background Image */}
      <header className="banner min-h-[400px] flex flex-col items-center justify-center text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b2a49] to-[#0e1b34] opacity-90"></div>
        <Image
          src="/background-image.jpg" // Replace with your actual banner image
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="relative z-10">
          <Image src="/soltek-logo.png" alt="SolTek Logo" width={300} height={80} priority />
          <h1 className="text-4xl font-bold mt-4 text-[#e2952e]">Sustainable Energy Solutions for the UAE</h1>
          <p className="text-lg mt-4 max-w-xl mx-auto text-[#f5f5f5]">
            Empowering sustainable energy initiatives through innovative solar technology and field services.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="text-center space-y-6">
        <h2 className="text-5xl font-bold text-[#e2952e]">About SolTek</h2>
        <p className="text-lg max-w-2xl mx-auto text-[#f5f5f5]">
          SolTek is a leader in sustainable energy solutions, offering consulting, field services, and innovative technology to drive renewable energy adoption across the UAE.
        </p>
      </section>

      {/* Mission Section */}
      <section className="section-card flex flex-col md:flex-row items-center gap-8 p-8">
        <Image src="/mission-stock.jpg" alt="Mission Image" width={400} height={300} className="rounded-lg object-cover" />
        <div>
          <h2 className="text-4xl font-bold text-[#e2952e]">Our Mission</h2>
          <p className="text-lg text-[#f5f5f5] mt-4">
            Our mission is to drive sustainable energy adoption by delivering reliable, efficient, and innovative solar solutions for individuals and businesses alike.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-card flex flex-col md:flex-row items-center gap-8 p-8">
        <Image src="/vision-stock.jpg" alt="Vision Image" width={400} height={300} className="rounded-lg object-cover" />
        <div>
          <h2 className="text-4xl font-bold text-[#e2952e]">Our Vision</h2>
          <p className="text-lg text-[#f5f5f5] mt-4">
            We envision a world where sustainable energy solutions are accessible, efficient, and affordable. SolTek is committed to advancing renewable energy through innovation and excellence.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="text-center space-y-8 mb-16"> {/* Added mb-16 for extra bottom margin */}
        <h2 className="text-4xl font-bold text-[#e2952e]">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="section-card p-6 text-center">
            <h3 className="text-2xl font-bold text-[#1b2a49] mb-4">Integrity</h3>
            <p className="text-lg text-[#f5f5f5]">
              We prioritize honesty and transparency, building trust with our clients and partners.
            </p>
          </div>
          <div className="section-card p-6 text-center">
            <h3 className="text-2xl font-bold text-[#1b2a49] mb-4">Innovation</h3>
            <p className="text-lg text-[#f5f5f5]">
              We constantly push boundaries to create advanced and sustainable energy solutions.
            </p>
          </div>
          <div className="section-card p-6 text-center">
            <h3 className="text-2xl font-bold text-[#1b2a49] mb-4">Excellence</h3>
            <p className="text-lg text-[#f5f5f5]">
              We hold ourselves to the highest standards, ensuring exceptional results in every project.
            </p>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <div className="text-center mt-16">
        <a href="/contact" className="primary-button">
          Contact Us to Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;
