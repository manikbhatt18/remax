import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search, ArrowRight } from 'lucide-react';
import LogoImg from "../../images/REMAX_FORGE_AND_FITTINGS-01.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'Quality', href: '#' },
    { name: 'Tech Info', href: '#' },
    { name: 'Contact Us', href: '#', isButton: true },
  ];

  // Dummy Product Data for Dropdown
  const productCategories = [
    "Forged Fittings",
    "Flanges",
    "High Pressure Pipe Fittings",
    "Olets & Branch Connections",
    "Custom Forgings"
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
      style={{ 
        backgroundColor: '#FFFFFF', // White Navbar
        color: '#0F172A' // Dark Slate/Navy Text
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            {/* Logo Image Placeholder */}
            {/* Replace the src below with your imported image, e.g., src={logoImage} or src="/assets/logo.png" */}
            <img 
              src={LogoImg}
              alt="Remax Logo" 
              className="h-16 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider uppercase leading-none" style={{ color: '#0F172A' }}>REMAX</span>
              <span className="text-[10px] tracking-[0.2em] opacity-80 uppercase leading-none mt-1" style={{ color: '#334155' }}>Forge & Fittings</span>
            </div>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setProductDropdownOpen(true)}
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <button 
                      className="flex items-center transition-colors py-2 font-medium hover:text-[#D71920]"
                    >
                      {link.name}
                      <ChevronDown size={16} className={`ml-1 transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Desktop Dropdown Menu */}
                    <div 
                      className={`absolute left-0 mt-0 w-56 rounded-md shadow-xl py-2 transform transition-all duration-200 origin-top-left ${
                        productDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                      style={{ backgroundColor: '#FFFFFF', borderTop: '2px solid #D71920' }}
                    >
                      {productCategories.map((item, index) => (
                        <a 
                          key={index} 
                          href="#" 
                          className="block px-4 py-3 text-sm hover:bg-slate-50 transition-colors border-b border-gray-100 last:border-0"
                          style={{ color: '#334155' }}
                        >
                          <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                            {item}
                            <ArrowRight size={14} className="text-[#D71920] opacity-0 group-hover:opacity-100" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : link.isButton ? (
                  <a
                    href={link.href}
                    className="px-5 py-2.5 rounded font-bold transition-all transform hover:-translate-y-0.5 hover:shadow-lg text-sm"
                    style={{ backgroundColor: '#D71920', color: '#FFFFFF' }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <a 
                    href={link.href} 
                    className="relative font-medium transition-colors hover:text-[#D71920]"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D71920] transition-all group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-slate-100 transition-colors focus:outline-none"
              style={{ color: '#0F172A' }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    className="w-full flex justify-between items-center px-3 py-3 text-base font-medium rounded-md hover:bg-slate-50 transition-colors"
                    style={{ color: '#0F172A' }}
                  >
                    {link.name}
                    <ChevronDown size={18} className={`transform transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Mobile Dropdown Items */}
                  <div className={`pl-6 space-y-1 transition-all duration-300 ${productDropdownOpen ? 'block' : 'hidden'}`}>
                    {productCategories.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 text-sm hover:text-[#D71920] hover:bg-slate-50 rounded-md"
                        style={{ color: '#64748B' }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    link.isButton 
                      ? 'mt-4 text-center' 
                      : 'hover:bg-slate-50'
                  }`}
                  style={link.isButton ? { backgroundColor: '#D71920', color: '#FFFFFF' } : { color: '#0F172A' }}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;