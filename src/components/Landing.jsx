import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is LassaLens?",
      answer:
        " Lassalens is an AI-powered web platform that tracks social media and news reports to detect early warning signs of Lassa fever outbreaks in Nigeria.",
    },
    {
      question: "Why focus on Lassa fever?",
      answer:
        "Nigeria reports thousands of suspected cases each year. Early detection can save lives, reduce spread, and strengthen public health response.",
    },
    {
      question: " How does Lassalens work?",
      answer:
        "It collects online data, analyzes trends with AI, and highlights unusual mentions, clusters, or reports linked to Lassa fever.",
    },
    {
      question: "Who can use Lassalens?",
      answer:
        " Public health officials, researchers, NGOs, journalists, and community responders who want real-time insights on lassa fever outbreaks in Nigeria",
    },
    {
      question: " Does Lassalens replace official surveillance systems?",
      answer:
        " No. It complements existing systems like NCDC’s IDSR by providing faster, real-time digital signals.",
    },
    {
      question: "How reliable is the information?",
      answer:
        "Lassalens highlights signals that may suggest outbreaks. These insights should guide further verification by health authorities.",
    },
    {
      question: "Which sources does Lassalens scan?",
      answer:
        " It pulls data from Nigerian social media platforms, online news outlets, and public reports.",
    },
    {
      question: "Is Lassalens free to use?",
      answer:
        "Yes. Lassalens is publicly accessible to encourage awareness and early action.",
    },
    {
      question: "How Often Is The Data Updated?",
      answer:
        "The platform scans and refreshes information continuously, providing near real-time updates.",
    },
    {
      question: "Can Lassalens track other diseases?",
      answer:
        " Currently, it is focused on Lassa fever in Nigeria, but the technology can be adapted for other infectious diseases in the future.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#EEEFF1]  backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src="/lassa-icon.png" alt="Lassa Lens" className="w-6 h-6" />
            <span className="text-[22px] font-semibold text-gray-800">
              LassaLens
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Feature
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              FAQs
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors no-underline  items-center gap-2"
            >
              <div className="flex gap-2">
                <img src="/rocket.svg" alt="" className="w-4 h-4 mt-1" />
                Launch App
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    mobileMenuOpen
                      ? "rotate-45 translate-y-1"
                      : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    mobileMenuOpen
                      ? "-rotate-45 -translate-y-1"
                      : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-6 py-4 space-y-4">
              <Link
                to="/dashboard"
                className="block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors no-underline text-center"
              >
                Launch App
              </Link>
              <a
                href="#"
                className="block text-gray-600 hover:text-gray-800 transition-colors"
              >
                About
              </a>
              <a
                href="#features"
                className="block text-gray-600 hover:text-gray-800 transition-colors"
              >
                Feature
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-gray-800 transition-colors"
              >
                FAQs
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="w-full px-6 pt-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/bg-colored.svg)",
        }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Lassa Fever Surveillance <br /> for Nigeria
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Real-time reports, verified data, and community signals on lassa
            fever all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2  rounded-full flex items-center gap-2 font-medium transition-colors no-underline"
            >
              Launch App
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="/arrow-up.svg" alt="Arrow" className="w-2.5 h-2.5" />
              </div>
            </Link>
            <Link
              to="/signup"
              className="bg-black  text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium transition-colors no-underline"
            >
              About LassaLens
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="/arrow-up.svg" alt="Arrow" className="w-2.5 h-2.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-4xl mx-auto">
          <img
            src="/landingpage-updated.png"
            alt="Lassa Lens Dashboard Preview"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className=" bg-white w-full mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Track. Detect. Stay Safe.
          </h2>
          <p className="text-xl text-gray-600">
            Live Intelligence on Lassa Fever Outbreaks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {/* Multi-Source Data Aggregation */}
          <div className="flex justify-center">
            <img
              src="/image1.svg"
              alt="Data aggregation"
              className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
            />
          </div>

          {/* Real-Time Outbreak Map */}
          <div className="flex justify-center">
            <img
              src="/image2.svg"
              alt="Outbreak map"
              className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
            />
          </div>

          {/* Incidence & Prevalence Stats */}
          <div className="flex justify-center">
            <img
              src="/image3.svg"
              alt="Statistics"
              className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
            />
          </div>

          {/* AI-Powered Report Scanning */}
          <div className="flex justify-center">
            <img
              src="/image4.svg"
              alt="AI scanning"
              className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
            />
          </div>
        </div>

        {/* Second row with images 5 and 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-6xl mx-auto px-4">
          {/* Geo-Tagged Alerts */}
          <div className="flex justify-center">
            <img
              src="/image5.png"
              alt="Geo-tagged alerts"
              className="w-full max-w-md md:max-w-lg h-auto object-contain"
            />
          </div>

          {/* Trend Analysis */}
          <div className="flex justify-center">
            <img
              src="/image6.png"
              alt="Trend analysis"
              className="w-full max-w-md md:max-w-lg h-auto object-contain"
            />
          </div>
        </div>

        {/* Map Visualization */}
        <div className="text-center mb-8 mt-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore The Spread Visually
          </h2>
          <p className="text-xl text-gray-600">
            Live Intelligence on Lassa Fever Outbreaks
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-5">
          <img
            src="/map-orange.png"
            alt="Interactive Map Visualization"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="bg-black ml-2 mr-2 text-white py-16 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Outbreak Data At A Glance
            </h2>
            <p className="text-gray-400">
              Real-time insights to help you stay informed and prepared
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,248</div>
              <div className="text-gray-400">Total Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">37</div>
              <div className="text-gray-400">New Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.3</div>
              <div className="text-gray-400">Incidence Rate / 1,000</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">78%</div>
              <div className="text-gray-400">Recovery Rate</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">214</div>
              <div className="text-gray-400">Fatalities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">9</div>
              <div className="text-gray-400">Active States Affected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">-5%</div>
              <div className="text-gray-400">Daily Case Change</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-gray-400">Data Sources Tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to the things people ask most
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <FaChevronUp className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <FaChevronDown className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16">
            <img
              src="/blue-card.png"
              alt="LassaLens Banner"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Social Media Icons */}
            <div className="flex items-start gap-2 mb-8 md:mb-0">
              <img src="/lassa-icon.png" alt="Lassa Lens" className="w-8 h-8" />
              <span className="text-[22px] font-semibold text-gray-800">
                LassaLens
              </span>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">LassaLens</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <Link
                      to="/"
                      className="hover:text-gray-900 transition-colors no-underline"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="hover:text-gray-900 transition-colors no-underline"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      About LassaLens
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Africa CDC Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Academic Research Papers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Public Health Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      WHO Lassa Fever Reports
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Privacy and policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Terms And Condition
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
