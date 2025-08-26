import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header - copied from Landing.jsx */}
      <header className="bg-[#EEEFF1] backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src="/lassa-icon.png" alt="Lassa Lens" className="w-6 h-6" />
            <span className="text-[22px] font-semibold text-gray-800">
              LassaLens
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 transition-colors no-underline"
            >
              Home
            </Link>
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
              className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors no-underline items-center gap-2"
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
              <Link
                to="/"
                className="block text-gray-600 hover:text-gray-800 transition-colors no-underline"
              >
                Home
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

      {/* About LassaLens Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex align-top ">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">
                About LassaLens
              </h1>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lassa fever continues to challenge Nigeria’s public health
                system, with thousands of suspected cases every year.
                Traditional reporting systems are effective but often face
                delays, especially in rural and underserved areas.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lassalens adds a digital layer of surveillance. By analyzing
                patterns in online discussions and news reports, our AI system
                can highlight unusual activity that may point to an emerging
                outbreak. This gives authorities, researchers, and communities
                an extra head start in responding.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors no-underline text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/dashboard"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium transition-colors no-underline text-center"
                >
                  View Dashboard
                </Link>
              </div> */}
            </div>
          </div>
          {/* Bottom Banner */}
          <div className="mt-5 ">
            <img
              src="/about/about-img.png"
              alt="LassaLens Banner"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="flex justify-center">
              <img
                src="/about/about-card1.png"
                alt="Innovation"
                className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/about/about-card2.png"
                alt="Accuracy"
                className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/about/about-card3.png"
                alt="Accessibility"
                className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/about/about-card4.png"
                alt="Collaboration"
                className="w-full max-w-xs md:max-w-sm h-48 md:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/about/icon-1.png"
                    alt="Multi-Source Data Aggregation"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Multi-Source Data Aggregation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We Bring Together Signals From Social Media, News Outlets,
                    And Official Health Sources In One Dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/about/icon-2.png"
                    alt="Real-Time Outbreak Map"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Outbreak Map
                  </h3>
                  <p className="text-gray-600 text-sm">
                    An Interactive Map That Shows Where Cases And Outbreak
                    Signals Are Emerging Across Nigeria.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/about/icon-3.png"
                    alt="Incidence & Prevalence Stats"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Incidence & Prevalence Stats
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Stay Updated With The Latest Numbers On Suspected,
                    Confirmed, And Recovered Cases.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/about/icon-4.png"
                    alt="AI-Powered Report Scanning"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    AI-Powered Report Scanning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our AI Scans Thousands Of Posts And Articles Daily To Detect
                    Early Warnings Of Possible Outbreaks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/about/icon-5.png"
                    alt="Trend Analysis"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Trend Analysis
                  </h3>
                  <p className="text-gray-600 text-sm">
                    See How Cases, Symptoms, And Reports Are Changing Over Time,
                    Spotting Hotspots Before They Spread.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/about/icon-6.png"
                    alt="Geo-Tagged Alerts"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Geo-Tagged Alerts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Pinpoint Reports Down To State And Local Levels, Helping
                    Communities And Health Workers Act Faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Sources Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Sources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our data comes from
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/about/ncdc-logo.png"
                alt="NCDC Logo"
                className="h-12 object-contain  transition-all"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/about/who-logo.png"
                alt="WHO Logo"
                className="h-12 object-contain "
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/about/africaCdc-logo.png"
                alt="Africa CDC Logo"
                className="h-12 object-contain "
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/about/vanguard-logo.png"
                alt="Vanguard Logo"
                className="h-12 object-contain "
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/about/punch-logo.png"
                alt="Punch Logo"
                className="h-12 object-contain "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="ml-9 mr-9">
        <div className="w-full">
          <img
            src="/about/about-large-card.png"
            alt="LassaLens Mission"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Footer - copied from Landing.jsx */}
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
                    <Link
                      to="/about"
                      className="hover:text-gray-900 transition-colors no-underline"
                    >
                      About LassaLens
                    </Link>
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

export default About;
