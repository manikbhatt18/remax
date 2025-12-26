import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';

// Replaced local import with a placeholder URL for the environment to compile
const LogoImg = "https://placehold.co/150x50/D71920/FFFFFF/png?text=REMAX+LOGO";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  
  // State for the Mega Menu (Desktop)
  const [activeCategory, setActiveCategory] = useState(0);

  // State for Mobile Accordions
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- URL Creator / Slug Generator ---
  // Converts "Slip On Flange" -> "slip-on-flange"
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special chars
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Trim start/end hyphens
  };

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Quality', href: '/quality' },
    { name: 'Tech Info', href: '/tech-info' },
    { name: 'Contact Us', href: '/contact', isButton: true },
  ];

  // Complex Product Data
  const productData = [
    {
      category: "Flanges",
      subcategories: [
        "Slip On Flange", "Weld Neck Flange", "Blind Flange", "Socket Weld Flange", 
        "Threaded Flange", "Lap Joint Flange", "Long Weld Neck Flange", "Spectacle Blind Flange"
      ]
    },
    {
      category: "Buttweld Fittings",
      subcategories: [
        "Elbow 90°", "Elbow 45°", "Equal Tee", "Reducing Tee", 
        "Concentric Reducer", "Eccentric Reducer", "End Cap", "Stub End"
      ]
    },
    {
      category: "Forged Fittings",
      subcategories: [
        "Socket Weld Elbow", "Threaded Elbow", "Socket Weld Tee", "Threaded Tee", 
        "Coupling", "Union", "Plug", "Bush"
      ]
    },
    {
      category: "Pipes & Tubes",
      subcategories: [
        "Seamless Pipes", "Welded Pipes", "Heat Exchanger Tubes", 
        "Instrumentation Tubes", "Square & Rectangular Pipes"
      ]
    },
    {
      category: "Round Bar",
      subcategories: [
        "Stainless Steel Bar", "Carbon Steel Bar", "Alloy Steel Bar", 
        "Duplex Steel Bar", "Nickel Alloy Bar"
      ]
    },
    {
      category: "Sheets & Plates",
      subcategories: [
        "Stainless Steel Sheets", "Carbon Steel Plates", "Mild Steel Plates", "Chequered Plates"
      ]
    }
  ];

  const handleMobileCategoryClick = (index) => {
    setMobileActiveCategory(mobileActiveCategory === index ? null : index);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
      style={{ 
        backgroundColor: '#FFFFFF', 
        color: '#0F172A' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- LEFT: LOGO --- */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50">
            <a href="/">
              <img 
                src="/images/REMAX_FORGE_AND_FITTINGS-01.png"
                alt="Remax Logo" 
                className="h-14 w-auto object-contain"
              />
            </a>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider uppercase leading-none" style={{ color: '#0F172A' }}>REMAX</span>
              <span className="text-[10px] tracking-[0.2em] opacity-80 uppercase leading-none mt-1" style={{ color: '#334155' }}>Forge & Fittings</span>
            </div>
          </div>

          {/* --- CENTER: NAVIGATION LINKS (Desktop) --- */}
          <div className="hidden lg:flex flex-1 justify-center items-center h-full">
            <div className="flex items-center space-x-8 xl:space-x-12 h-full">
              {navLinks.filter(link => !link.isButton).map((link) => (
                <div key={link.name} className="relative group flex items-center h-full">
                  {link.hasDropdown ? (
                    <div 
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setProductDropdownOpen(true)}
                      onMouseLeave={() => setProductDropdownOpen(false)}
                    >
                      <button 
                        className="flex items-center transition-colors font-medium text-base hover:text-[#D71920]"
                      >
                        {link.name}
                        <ChevronDown size={18} className={`ml-1 transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* MEGA MENU DROPDOWN */}
                      <div 
                        className={`absolute left-1/2 top-full mt-4 w-[900px] xl:w-[950px] 
                          -translate-x-1/2 bg-white rounded-md shadow-2xl 
                          overflow-hidden transform transition-all duration-200 
                          origin-top border-t-4 border-[#D71920] ${
                            productDropdownOpen 
                              ? 'opacity-100 scale-100 visible' 
                              : 'opacity-0 scale-95 invisible'
                          }`}
                      >
                        <div className="flex">
                          {/* Left Side: Main Categories */}
                          <div className="w-1/3 bg-slate-50 border-r border-slate-100 py-6">
                            {productData.map((item, index) => (
                              <div 
                                key={index}
                                onMouseEnter={() => setActiveCategory(index)}
                                className={`px-8 py-4 cursor-pointer flex items-center justify-between text-base font-bold transition-colors ${
                                  activeCategory === index 
                                    ? 'bg-white text-[#D71920] border-l-4 border-[#D71920] shadow-sm' 
                                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                              >
                                {item.category}
                                {activeCategory === index && <ChevronRight size={18} />}
                              </div>
                            ))}
                          </div>

                          {/* Right Side: Subcategories */}
                          <div className="w-2/3 p-8 bg-white min-h-[400px]">
                            <h4 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-slate-100 pb-3">
                              {productData[activeCategory].category}
                            </h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                              {productData[activeCategory].subcategories.map((subItem, subIndex) => {
                                // Generate Dynamic Link: /products/category-slug/product-slug
                                const linkHref = `/products/${createSlug(productData[activeCategory].category)}/${createSlug(subItem)}`;
                                
                                return (
                                  <a 
                                    key={subIndex}
                                    href={linkHref}
                                    className="flex items-center group/item text-base text-slate-600 hover:text-[#D71920] transition-colors"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/item:bg-[#D71920] mr-3 transition-colors"></div>
                                    {subItem}
                                  </a>
                                );
                              })}
                            </div>
                            
                            <div className="mt-10 pt-6 border-t border-slate-100">
                               <a 
                                 href={`/products/${createSlug(productData[activeCategory].category)}`} 
                                 className="inline-flex items-center text-sm font-bold text-[#D71920] hover:underline"
                               >
                                 VIEW ALL {productData[activeCategory].category.toUpperCase()} <ArrowRight size={16} className="ml-2" />
                               </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={link.href} 
                      className="relative font-medium text-base transition-colors hover:text-[#D71920] flex items-center h-full"
                    >
                      {link.name}
                      <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-[#D71920] transition-all group-hover:w-full"></span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: CONTACT BUTTON & MOBILE MENU --- */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <a
                href="/contact"
                className="px-6 py-3 rounded font-bold transition-all transform hover:-translate-y-0.5 hover:shadow-lg text-sm whitespace-nowrap"
                style={{ backgroundColor: '#D71920', color: '#FFFFFF' }}
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
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
      </div>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <div 
        className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-white border-t border-slate-200 ${
          isOpen ? 'max-h-[85vh] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    className="w-full flex justify-between items-center px-3 py-3 text-base font-medium rounded-md hover:bg-slate-50 transition-colors text-slate-900"
                  >
                    {link.name}
                    <ChevronDown size={18} className={`transform transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Level 1: Categories */}
                  <div className={`pl-4 space-y-1 transition-all duration-300 ${productDropdownOpen ? 'block' : 'hidden'}`}>
                    {productData.map((item, index) => (
                      <div key={index}>
                        <button
                          onClick={() => handleMobileCategoryClick(index)}
                          className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#D71920]"
                        >
                          {item.category}
                          <ChevronDown size={14} className={`transform transition-transform ${mobileActiveCategory === index ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Mobile Level 2: Subcategories */}
                        <div className={`pl-4 border-l-2 border-slate-100 ml-3 mb-2 space-y-2 ${mobileActiveCategory === index ? 'block' : 'hidden'}`}>
                          {item.subcategories.map((sub, subIdx) => (
                            <a
                              key={subIdx}
                              href={`/products/${createSlug(item.category)}/${createSlug(sub)}`}
                              className="block py-1 text-sm text-slate-500 hover:text-[#D71920]"
                            >
                              {sub}
                            </a>
                          ))}
                          <a href={`/products/${createSlug(item.category)}`} className="block py-1 text-xs font-bold text-[#D71920] mt-2">
                            View All {item.category}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    link.isButton 
                      ? 'mt-4 text-center mx-3' 
                      : 'hover:bg-slate-50 text-slate-900'
                  }`}
                  style={link.isButton ? { backgroundColor: '#D71920', color: '#FFFFFF' } : {}}
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