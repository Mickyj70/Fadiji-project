import { Link } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src="/logo-lassa.svg" alt="Lassa Lens" className="w-6 h-6" />
            <span className="text-xl font-semibold text-gray-800">
              Lassa Lens
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
              href="#"
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
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Download
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors no-underline"
            >
              Launch App
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    mobileMenuOpen
                      ? "rotate-45 translate-y-1"
                      : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
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
              <a
                href="#"
                className="block text-gray-600 hover:text-gray-800 transition-colors"
              >
                About
              </a>
              <a
                href="#"
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
              <a
                href="#"
                className="block text-gray-600 hover:text-gray-800 transition-colors"
              >
                Download
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stay Ahead Of Lassa
            <br />
            Fever In Nigeria
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Real-time reports, verified data, and community signals on lassa
            <br />
            fever all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center gap-2 font-medium transition-colors no-underline"
            >
              Launch Map
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-2xl">→</span>
              </div>
            </Link>
            <Link
              to="/signup"
              className="bg-black  text-white px-8 py-3 rounded-full flex items-center gap-2 font-medium transition-colors no-underline"
            >
              About Lassa
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-2xl">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-4xl mx-auto">
          <img
            src="/landingpage-img.svg"
            alt="Lassa Lens Dashboard Preview"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </section>

      {/* Features Section */}
      <section className=" bg-white w-full mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Track. Detect. Stay Safe.
          </h2>
          <p className="text-xl text-gray-600">
            Live Intelligence on Lassa Fever Outbreaks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {/* Multi-Source Data Aggregation */}
          <div className="flex justify-center">
            <img
              src="/image1.svg"
              alt="Data aggregation"
              className="w-full h-auto max-w-xs"
            />
          </div>

          {/* Real-Time Outbreak Map */}
          <div className="flex justify-center">
            <img
              src="/image2.svg"
              alt="Outbreak map"
              className="w-full h-auto max-w-xs"
            />
          </div>

          {/* Incidence & Prevalence Stats */}
          <div className="flex justify-center">
            <img
              src="/image3.svg"
              alt="Statistics"
              className="w-full h-auto max-w-xs"
            />
          </div>

          {/* AI-Powered Report Scanning */}
          <div className="flex justify-center">
            <img
              src="/image4.svg"
              alt="AI scanning"
              className="w-full h-auto max-w-xs"
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

        <div className="relative max-w-4xl mx-auto mb-16">
          <img
            src="/map.svg"
            alt="Interactive Map Visualization"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="bg-black text-white py-16">
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

      {/* Footer */}
      <footer className="bg-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Social Media Icons */}
            <div className="flex items-start gap-4 mb-8 md:mb-0">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
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
                      Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Data Sources
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      About Flow
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

        {/* Large watermark logo */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none bg-amber-900">
          <img
            src="/logo-lassa.svg"
            alt="Lassa Lens Watermark"
            className="w-96 h-auto"
          />
          <div className="text-8xl font-bold text-gray-300 mt-4">
            Lassa Lens
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
