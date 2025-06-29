import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Users, Award, Zap, Shield, Code, Smartphone, Globe, Server, Database, Cloud } from 'lucide-react';

const TatvaTechSolutions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'solutions', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Startup team",
      description: "Agile startup team with a strong vision to scale into an enterprise-level IT provider."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "GOvernment & PSU Projects",
      description: "Focused on executing government and PSU IT projects through the GeM portal."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "IT Services",
      description: "Combination of IT services and a proprietary time management app for added value."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Hardware & Networking",
      description: "Partnerships with top OEMs like HPE, Dell, and Cisco for trusted, high-quality solutions."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cost-Effective Solutions",
      description: "Competitive pricing strategy aligned with GeM’s L1 bidder model and smart negotiation."
    },
  ];

  const solutions = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive software solutions for large-scale businesses with complex requirements.",
      features: ["ERP Systems", "CRM Integration", "Business Intelligence", "Workflow Automation"]
    },
    {
      title: "Small Business Solutions",
      description: "Cost-effective solutions designed specifically for small and medium businesses.",
      features: ["Point of Sale", "Inventory Management", "Customer Management", "Financial Reporting"]
    },
    {
      title: "Digital Transformation",
      description: "Transform your traditional business processes with modern digital solutions.",
      features: ["Process Automation", "Digital Analytics", "Cloud Migration", "API Integration"]
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                Optifusion<span className="text-gray-800"></span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'solutions', label: 'Solutions' },
                  { id: 'contact', label: 'Contact' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Solution for <span className="text-blue-600">Large & Small</span> Businesses
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tailored hardware and software solutions to meet the demands of your growing business.
                We deliver exceptional IT-enabled solutions with our versatile team of professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
                >
                  Explore Services
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-blue-100">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99%</div>
                    <div className="text-blue-100">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Optifusion IT Solutions Pvt. Ltd.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optifusion IT Solutions Pvt. Ltd. is a tech-driven
              startup offering end-to-end IT services, including
              strategy, hardware/software solutions, networking,
              and support. We specialize in executing government
              and PSU projects through the GeM portal, backed by
              partnerships with top OEMs like HPE, Dell, and Cisco.
              Focused on innovation, reliability, and scalability, we
              deliver high-performance solutions tailored to client
              needs. Our core values—innovation, integrity,
              excellence, and empowerment—drive our mission to
              enable digital transformation and create new
              opportunities in the IT sector.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Optifusion IT Solutions Pvt. Ltd.?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Partnering with top OEMs (e.g.HPE, Dell, Cisco to offer trusted,Make in India - compliant solutions.",
                    "Launching with a lean, scalable model focused on government and PSU IT projects via the GeM portal",
                    "Offering a user-friendly time management app to improve productivity and workflow efficiency.",
                    "24/7 technical support and maintenance",
                    "Providing cost-effective,customized IT services in hardware, networking, software, and AMC.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth,
                  enhance efficiency, and create lasting competitive advantages in the digital age.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h4>
                <p className="text-gray-600">
                  To be the leading technology partner for businesses worldwide, known for our
                  exceptional service quality and innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unique Selling points
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet the unique challenges of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group hover:-translate-y-2 duration-300">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for businesses of all sizes, from startups to large enterprises
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? Let's discuss your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-blue-200" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">9871727319</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-blue-200" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">shalusharma543@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-blue-200" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">KH NO 256, Plot No. 6A, Raj Associates
                      Chaprola, Ghaziabad, UP – 201009</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
                <button
                  type="button"
                  onClick={() => alert('Message sent successfully! We will get back to you soon.')}
                  className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">
                Optifusion IT Solutions Pvt. Ltd.
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering IT innovation for a Smarter Tomorrow.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Solutions', 'Contact'].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Software Development</li>
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Cloud Services</li>
                <li>IT Consulting</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Optifusion IT Solutions Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TatvaTechSolutions;