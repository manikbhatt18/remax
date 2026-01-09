import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Award, 
  Zap,
  Globe,
  
  Home,
  ChevronRight
} from 'lucide-react';

const CareerPage = () => {
  // Data for "Why Choose Remax"
  const whyUsGrid = [
    {
      icon: <TrendingUp size={32} />,
      title: "Accelerated Growth",
      description: "We don't just offer jobs; we build careers. Our mentorship programs and clear promotion paths ensure you never stop moving forward."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Safety First Culture",
      description: "Your well-being is our priority. We maintain rigorous ISO 45001 safety standards to ensure a secure environment for every team member."
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Teams",
      description: "Work alongside industry experts in a culture that values diverse perspectives, open communication, and shared success."
    },
    {
      icon: <Award size={32} />,
      title: "Competitive Rewards",
      description: "Enjoy top-tier compensation packages, performance bonuses, and comprehensive benefits that reward your hard work and dedication."
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation Led",
      description: "Work with cutting-edge CNC technology and advanced manufacturing processes that are setting new standards in the industry."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Impact",
      description: "See your work power industries around the world. From oil & gas to aerospace, our components are trusted globally."
    },
    
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 font-sans">
      
      {/* Breadcrumb Header - Matching AlloySteel reference */}
      <div className="bg-[#0F172A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-[#D71920] transition-colors"><Home size={14} /></a>
            <ChevronRight size={14} />
            <span className="text-[#D71920] font-medium">Careers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Careers at Remax</h1>
        </div>
      </div>

      {/* Why Choose Us Grid Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider uppercase text-sm mb-2 block" style={{ color: '#D71920' }}>
              Grow with us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">
              Engineering Your Future
            </h2>
            <div className="h-1 w-20 mx-auto rounded" style={{ backgroundColor: '#D71920' }}></div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsGrid.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg border-t-4 border-[#D71920] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-slate-100"
              >
                <div 
                  className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors duration-300"
                >
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>

    </div>
  );
};
export default CareerPage;