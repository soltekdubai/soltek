import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-[#1b2a49] via-[#2a3b65] to-[#0e1b34] text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <Image
          src="/soltek-logo.png"
          alt="SolTek Logo"
          width={300}
          height={64}
          priority
        />

        <p className="text-2xl font-semibold text-[#e2952e]">
          Sustainable Energy Solutions for the UAE
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
            <Image src="/solar-panel.svg" alt="Solar Panel Icon" width={40} height={40} />
            <h3 className="text-lg font-bold mt-4 text-[#e2952e]">Consulting Services</h3>
            <p className="text-sm mt-2 text-[#f5f5f5]">
              Discover our solar consulting services tailored for sustainable growth in the UAE.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
            <Image src="/field-service.svg" alt="Field Service Icon" width={40} height={40} />
            <h3 className="text-lg font-bold mt-4 text-[#e2952e]">Field Services</h3>
            <p className="text-sm mt-2 text-[#f5f5f5]">
              Benefit from our field services, offering maintenance and repair for solar systems.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
            <Image src="/innovation.svg" alt="Innovation Icon" width={40} height={40} />
            <h3 className="text-lg font-bold mt-4 text-[#e2952e]">Innovative Solutions</h3>
            <p className="text-sm mt-2 text-[#f5f5f5]">
              Learn how SolTek supports innovative energy solutions across the region.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link href="/services" 
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-[#e2952e] text-[#1b2a49] font-semibold hover:bg-[#ffb04d] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Explore Our Services
          </Link>
          <Link href="/about" 
            className="rounded-full border border-solid border-[#e2952e] transition-colors flex items-center justify-center bg-transparent text-[#e2952e] font-semibold hover:bg-[#ffb04d] hover:text-[#1b2a49] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            About Us
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-[#e0e0e0] mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/contact-icon.svg"
            alt="Contact icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/investors"
        >
          <Image
            aria-hidden
            src="/investor-icon.svg"
            alt="Investor icon"
            width={16}
            height={16}
          />
          Investor Information
        </a>
      </footer>
    </div>
  );
}
