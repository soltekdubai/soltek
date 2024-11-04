import { FC } from "react";

const About: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b2a49] via-[#2a3b65] to-[#0e1b34] text-white p-8 sm:p-20">
      <h1 className="text-4xl font-bold text-center text-[#e2952e] mb-8">About Us</h1>
      <p className="text-lg text-center max-w-3xl mx-auto leading-8 text-[#f5f5f5]">
        SolTek is a leader in sustainable energy solutions, dedicated to providing top-notch
        consulting, maintenance, and repair services for solar power installations. Based in the UAE,
        our mission is to support the region&apos;s transition to renewable energy through reliable and
        innovative services.
      </p>

      <div className="mt-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#e2952e] mb-4">Our Vision</h2>
        <p className="text-sm leading-7 text-[#f5f5f5]">
          We envision a world where sustainable energy solutions are accessible, efficient, and
          reliable. Through our commitment to innovation and excellence, SolTek strives to make a
          positive impact on the environment and the communities we serve.
        </p>
      </div>

      <div className="mt-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#e2952e] mb-4">Our Team</h2>
        <p className="text-sm leading-7 text-[#f5f5f5]">
          Our team comprises skilled professionals and experts in the field of renewable energy.
          From consulting to field services, we are dedicated to delivering exceptional results for
          every client and project.
        </p>
      </div>
    </div>
  );
};

export default About;
