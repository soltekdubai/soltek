import Image from "next/image";
import { FC } from "react";

const Services: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b2a49] via-[#2a3b65] to-[#0e1b34] text-white p-8 sm:p-20">
      <h1 className="text-4xl font-bold text-center text-[#e2952e] mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <Image src="/solar-panel.svg" alt="Solar Panel Icon" width={60} height={60} />
          <h2 className="text-2xl font-bold mt-4 text-[#e2952e]">Consulting</h2>
          <p className="text-sm mt-2 text-[#f5f5f5]">
            Professional consulting services tailored for sustainable energy projects.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <Image src="/field-service.svg" alt="Field Service Icon" width={60} height={60} />
          <h2 className="text-2xl font-bold mt-4 text-[#e2952e]">Field Services</h2>
          <p className="text-sm mt-2 text-[#f5f5f5]">
            Maintenance and repair services to ensure optimal performance of solar installations.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <Image src="/innovation.svg" alt="Innovation Icon" width={60} height={60} />
          <h2 className="text-2xl font-bold mt-4 text-[#e2952e]">Innovation</h2>
          <p className="text-sm mt-2 text-[#f5f5f5]">
            Cutting-edge solutions and technology to drive renewable energy forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
