/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, MapPin, Wrench, ChevronRight, Star, CheckCircle2, Calendar } from 'lucide-react';
import React from 'react';

// --- Shared Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; 
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95",
    secondary: "bg-gray-900 text-white hover:bg-black shadow-lg shadow-gray-900/10 active:scale-95",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 active:scale-95",
    ghost: "text-gray-600 hover:text-blue-600 active:scale-95",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
      {title}
    </h2>
  </div>
);

// --- Page Sections ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Wrench size={20} />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg tracking-tighter block leading-none">BERATLIS</span>
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Automotive</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
          <a href="#location" className="hover:text-blue-600 transition-colors">Location</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:9258465700" className="hidden sm:flex items-center gap-2 text-gray-700 font-semibold text-sm hover:text-blue-600 transition-colors">
            <Phone size={16} />
            (925) 846-5700
          </a>
          <Button variant="secondary" className="!py-2 !px-5 text-sm" onClick={() => window.location.href='tel:9258465700'}>
            Call Now: (925) 846-5700
          </Button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-bold text-gray-900 underline underline-offset-4 decoration-blue-600/30">
              5.0 Rating (13 Reviews)
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-950 leading-[0.95] tracking-tight mb-8 text-balance">
            Honest Auto Repair You Can <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">Actually Trust.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
            5-star rated service in Pleasanton, known for expert diagnostics, fair pricing, and real transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="h-14 px-8" onClick={() => window.location.href='tel:9258465700'}>
              <Phone size={18} />
              Call Now: (925) 846-5700
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Experience</span>
              <span className="text-gray-900 font-bold">Independent Mechanic</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Location</span>
              <span className="text-gray-900 font-bold">Pleasanton, CA</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200" 
              alt="Honest Auto Repair Workshop" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          
          {/* Trust Badge Float */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg leading-tight tracking-tight">Verified Expert</div>
                <div className="text-sm text-gray-500">Master Diagnostics</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 -right-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  const props = [
    {
      title: "Honest Recommendations",
      desc: "Only pay for what you actually need. No surprises, no pressure.",
      icon: <CheckCircle2 className="text-blue-600" size={28} />
    },
    {
      title: "Expert Diagnostics",
      desc: "Accurate problem-solving that saves you time and money.",
      icon: <Wrench className="text-blue-600" size={28} />
    },
    {
      title: "Fast Turnaround",
      desc: "Efficient service without sacrificing the quality of work.",
      icon: <Calendar className="text-blue-600" size={28} />
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {props.map((p, i) => (
          <div key={i} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
            <div className="mb-6 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center">
              {p.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{p.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    "Engine Diagnostics", "Brake Repair", "Oil Changes & Maintenance",
    "Suspension & Steering", "Cooling Systems", "Electrical Diagnostics",
    "General Auto Repair (All Makes & Models)"
  ];

  return (
    <section id="services" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Precision Care"
          title="Complete Auto Repair Services"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex items-center justify-between"
            >
              <span className="font-bold text-gray-800">{s}</span>
              <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { text: "Gran is a rare mechanic — honest, affordable, and fast.", author: "Local Client" },
    { text: "Best experience in auto repair ever.", author: "Tesla Owner" },
    { text: "Very knowledgeable and fair. Highly recommend.", author: "Pleasanton Resident" },
    { text: "Fixed my car exactly when promised at the quoted price.", author: "Commuter" },
    { text: "Amazing experience — fast, friendly, and easy solutions.", author: "Long-time Customer" }
  ];

  return (
    <section className="py-24 px-6 bg-gray-900 text-white overflow-hidden rounded-[4rem] mx-4 my-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionHeading centered title="Real Customer Experiences" subtitle="TRUSTED BY THE COMMUNITY" />
          <div className="flex items-center gap-1 text-yellow-400 text-2xl -mt-6">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-blue-500/50 transition-colors">
              <p className="text-xl font-medium mb-6 leading-relaxed">“{r.text}”</p>
              <div className="h-px w-10 bg-blue-600 mb-4"></div>
              <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">{r.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { name: "Schedule Visit", desc: "Book online or call us." },
    { name: "Inspection & Diagnosis", desc: "We pinpoint the exactly issue." },
    { name: "Clear Explanation", desc: "No jargon, just the facts." },
    { name: "Repair at Fair Price", desc: "Quality parts, expert labor." },
    { name: "Back on the Road", desc: "Safe, reliable, and guaranteed." }
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="HOW WE WORK" title="Simple & Transparent Process" centered />
        
        <div className="relative flex flex-col md:flex-row gap-8 justify-between">
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-100 hidden md:block"></div>
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center md:flex-1">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center mb-6 font-display font-extrabold text-2xl text-blue-600">
                0{i + 1}
              </div>
              <h4 className="text-lg font-extrabold mb-2 text-gray-900">{s.name}</h4>
              <p className="text-gray-500 text-sm px-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 px-6 bg-gray-50">
       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading subtitle="VISIT OUR SHOP" title="Find Us in Pleasanton" />
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-2xl shrink-0 h-fit">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Our Address</h4>
                <p className="text-gray-600 text-lg">3597 Nevada St #A, Pleasanton, CA 94566</p>
                <p className="text-blue-600 font-semibold mt-1">Located inside Jay’s Auto Center</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-2xl shrink-0 h-fit">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Call Us</h4>
                <p className="text-gray-600 text-lg">(925) 846-5700</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="primary" className="h-14 px-8" onClick={() => window.open('https://www.google.com/maps/dir//3597+Nevada+St+%23A,+Pleasanton,+CA+94566/')}>
                Get Directions
              </Button>
            </div>
          </div>
        </div>
        
        <div className="rounded-[2.5rem] overflow-hidden h-[450px] shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
          {/* Placeholder for real map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.402434688849!2d-121.87979602344793!3d37.66358197268846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe9436e5f39e3%3A0x633856e7e407185e!2s3597+Nevada+St+%23A%2C+Pleasanton%2C+CA+94566!5e0!3m2!1sen!2sus!4v1713830000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 -z-10"></div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
          Stop Guessing. <br className="hidden sm:block" /> Get Honest Answers.
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Bring your vehicle to a mechanic who values transparency and quality work. Experience the Beratlis difference today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" className="h-16 px-10 text-lg" onClick={() => window.location.href='tel:9258465700'}>
            <Phone size={20} />
            Call Now: (925) 846-5700
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-xs">
           <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Wrench size={20} />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-tighter block leading-none">BERATLIS</span>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Automotive</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Pleasanton's premier independent auto repair shop, specializing in trustworthy diagnostics and fair, honest service since day one.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Explore</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-blue-600 transition-colors">Process</a></li>
              <li><a href="#location" className="hover:text-blue-600 transition-colors">Location</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Contact</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium whitespace-nowrap">
              <li>(925) 846-5700</li>
              <li>3597 Nevada St #A,<br /> Pleasanton, CA 94566</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Beratlis Automotive. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-600">Privacy Policy</a>
          <a href="#" className="hover:text-gray-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <Hero />
      <ValueProps />
      <Services />
      <Testimonials />
      <Process />
      <Location />
      <CTA />
      <Footer />
    </div>
  );
}
