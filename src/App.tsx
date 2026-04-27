import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus,
  ChevronLeft,
  ChevronRight, 
  MapPin, 
  Mail, 
  Phone,
  Clock,
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Shared Components ---

const SectionHeading = ({ children, subtitle, center = false }: { children: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={cn("mb-12", center && "text-center")}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-brand font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display italic font-bold leading-tight"
    >
      {children}
    </motion.h2>
  </div>
);

const Button = ({ 
  children, 
  variant = 'brand', 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'brand' | 'outline' | 'ghost' | 'white' }) => {
  const variants = {
    brand: "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black",
    ghost: "text-zinc-400 hover:text-white",
    white: "bg-white text-black hover:bg-zinc-100"
  };
  
  return (
    <button 
      className={cn(
        "px-8 py-3 rounded-md font-bold uppercase tracking-widest text-[11px] transition-all duration-300 active:scale-95 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Sections ---

const TopBar = () => (
  <div className="bg-[#050505] border-b border-white/5 px-4 md:px-8 py-3 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500 relative z-50 gap-2 md:gap-0">
    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
      <span className="flex items-center gap-2 hover:text-brand transition-colors cursor-pointer">
        <Phone size={10} className="text-brand" /> +91 98765 43210
      </span>
      <span className="flex items-center gap-2">
        <Clock size={10} className="text-brand" /> 09:00 AM — 08:00 PM
      </span>
    </div>
    <div className="flex gap-6">
      {[Instagram, Facebook, Twitter].map((Icon, i) => (
        <a key={i} href="#" className="hover:text-brand transition-colors"><Icon size={14} /></a>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="absolute top-16 md:top-12 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-8 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/5 px-6 md:px-10 py-4 md:py-5 rounded-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter uppercase text-brand">
            SHINY<span className="text-white ml-1">SHELL</span>
          </span>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand transition-colors">{link.name}</a>
          ))}
        </div>

        {/* Action */}
        <div className="hidden lg:block">
          <a href="#contact">
            <Button variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white">Book Now</Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-full left-8 right-8 bg-black border border-white/10 p-10 mt-2 shadow-2xl flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xs font-black uppercase tracking-[0.3em]">{link.name}</a>
            ))}
            <a href="#contact" className="w-full">
              <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>Book Appointment</Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-center pt-40 md:pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Salon" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-4xl px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-display font-medium text-white mb-8 leading-[1.1]"
        >
          Where Hair Dreams Meet <br />
          <span className="italic">Precision and Style.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-400 text-sm max-w-lg mx-auto mb-10 leading-relaxed font-medium"
        >
          Experience the perfect blend of creativity and technique at the hands of a dedicated stylist. Every strand is treated with care, ensuring a flawless finish tailored for you.
        </motion.p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a href="#contact">
            <Button className="h-14 px-10">Book Appointment</Button>
          </a>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-brand flex items-center justify-center text-white">
                <Plus size={16} />
              </div>
            </div>
            <div className="text-left">
              <div className="text-white text-xs font-black uppercase tracking-widest">3251 Clients</div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Every Month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-32 bg-black overflow-hidden px-4 md:px-8 border-b border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200" 
            alt="Shiny Shell Salon Interior" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-brand/20 -z-10 hidden md:block" />
        <div className="absolute -bottom-6 -right-6 bg-brand p-8 hidden md:block shadow-2xl">
          <span className="text-white font-display italic text-5xl font-black block leading-none">#1</span>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 mt-2">Kalyan's Finest</p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading subtitle="About Shiny Shell">
          Luxury Redefined in <br />
          <span className="italic text-brand font-display">Every Detail</span>
        </SectionHeading>
        <p className="text-zinc-400 text-base leading-relaxed mb-8 font-medium italic">
          Located in the heart of Kalyan, Shiny Shell is your ultimate destination for premium grooming. We believe that looking good is the first step to feeling great.
        </p>
        <p className="text-zinc-500 text-sm leading-relaxed mb-10">
          Our team of certified professionals is dedicated to providing you with an unparalleled salon experience, using only the world's best products and techniques.
        </p>
        <div className="grid grid-cols-2 gap-10 mb-12">
          <div className="border-l-2 border-brand pl-6">
            <span className="block text-white font-display italic text-3xl font-bold">12k+</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mt-1 block">Transformations</span>
          </div>
          <div className="border-l-2 border-brand pl-6">
            <span className="block text-white font-display italic text-3xl font-bold">15+</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mt-1 block">Expert Stylists</span>
          </div>
        </div>
        <a href="#contact">
          <Button variant="brand" className="h-14 px-12">Book Now</Button>
        </a>
      </motion.div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Expert Stylists",
      desc: "Internationally certified professionals with years of experience in transformational beauty."
    },
    {
      icon: ShieldCheck,
      title: "Hygiene First",
      desc: "Strict sterilization protocols and hospital-grade cleanliness for your safety and peace of mind."
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      desc: "We exclusively use the world's leading professional brands like L'Oréal, Wella, and Olaplex."
    },
    {
      icon: Award,
      title: "Personalized Care",
      desc: "Every service begins with a detailed consultation to tailor treatments exactly to your needs."
    }
  ];

  return (
    <section className="py-32 bg-[#050505] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading center subtitle="Excellence">Why Choose Us</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 border border-white/5 bg-black/40 hover:border-brand/30 transition-all group"
            >
              <div className="w-14 h-14 border border-brand/20 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-colors">
                <item.icon size={24} className="text-brand group-hover:text-white" />
              </div>
              <h4 className="text-xl font-display italic font-bold mb-4">{item.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const prices = [
    { name: "Haircut & Styling", price: "₹500", desc: "Precision cut with wash and style" },
    { name: "Global Hair Color", price: "₹2500+", desc: "Premium ammonia-free coloring" },
    { name: "Beard Sculpture", price: "₹300", desc: "Hot towel finish & beard spa" },
    { name: "Keratin Treatment", price: "₹4500+", desc: "Smooth, frizz-free transformation" },
    { name: "Luxury Facial", price: "₹1800", desc: "Deep cleansing and brightening" },
    { name: "Manicure & Spa", price: "₹800", desc: "Professional nail care & massage" }
  ];

  return (
    <section id="services" className="py-32 bg-surface px-4 md:px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading center subtitle="Menu">Services & Pricing</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
          {prices.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-2">
                <h4 className="text-xl font-display font-bold group-hover:text-brand transition-colors">{item.name}</h4>
                <span className="text-brand font-bold text-xl">{item.price}</span>
              </div>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      text: "The best salon experience in Kalyan! Shiny Shell completely transformed my hair. The precision and care they take is unmatched. Highly recommended!",
      image: "https://i.pravatar.cc/150?u=priya",
      rating: 5
    },
    {
      name: "Rahul Mehra",
      role: "Local Business Owner",
      text: "Professional service, premium atmosphere, and expert hands. I wouldn't trust anyone else with my grooming. Shiny Shell is a cut above the rest.",
      image: "https://i.pravatar.cc/150?u=rahul",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      role: "Bridal Client",
      text: "They did my bridal hair and makeup, and I couldn't be happier. The team is so passionate and skilled. Thank you for making my day special!",
      image: "https://i.pravatar.cc/150?u=anjali",
      rating: 5
    }
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-black px-4 md:px-8 border-b border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeading center subtitle="Testimonials">Client Success Stories</SectionHeading>
        
        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-display italic font-bold text-white leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-brand/20 p-1">
                    <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h4 className="text-white font-black uppercase tracking-widest text-xs">{testimonials[current].name}</h4>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">{testimonials[current].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-6 mt-16">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  
  const images = [
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800"
  ];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };
  
  return (
    <section id="gallery" className="py-32 bg-black px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Gallery">Portfolio Excellence</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIdx(i)}
              className="overflow-hidden bg-zinc-900 aspect-[3/4] border border-white/5 cursor-pointer group"
            >
              <div className="relative w-full h-full">
                <img src={img} alt="salon" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Plus className="text-white" size={40} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20 backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-50"
            >
              <X size={40} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all text-white z-50 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all text-white z-50 rounded-full"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIdx]} 
                alt="Selected" 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
                  {selectedIdx + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(0);
  const faqs = [
    { q: "Is booking required?", a: "We recommend booking in advance, as walk-ins are processed based on available slots." },
    { q: "Which products do you use?", a: "We exclusively use premium, vegan, and professional-grade organic solutions." },
    { q: "Cancellation policy?", a: "Please provide a 24-hour notice to avoid any potential late cancellation fees." }
  ];

  return (
    <section id="faq" className="py-32 bg-surface px-4 md:px-8 border-y border-white/5">
      <div className="max-w-3xl mx-auto">
        <SectionHeading center subtitle="Support">Your Questions</SectionHeading>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-sm overflow-hidden">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-black/20 hover:bg-black/40 transition-colors"
                id={`faq-btn-${i}`}
              >
                <span className="font-display italic text-lg font-bold">{faq.q}</span>
                <Plus size={16} className={cn("text-brand transition-transform", active === i && "rotate-45")} />
              </button>
              {active === i && (
                <div className="p-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-32 bg-black px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <SectionHeading subtitle="Location">Visit Our Lounge</SectionHeading>
        <div className="space-y-10 mb-12">
          <div className="flex gap-6">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-brand shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-xl font-display italic font-bold mb-2">Our Address</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Shop No2, Niraj Park, next to AMRUT PARK,<br />
                Wayle Nagar, Gandhar Nagar, Khadakpada,<br />
                Kalyan, Maharashtra 421301
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-brand shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="text-xl font-display italic font-bold mb-2">Message Us</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">hello@shinyshell.com<br />appointments@shinyshell.com</p>
            </div>
          </div>
        </div>
        <div className="h-80 w-full grayscale border border-white/10 rounded-sm overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.147805128795!2d73.136450!3d19.232320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958611111111%3A0x1111111111111111!2sNiraj%20Park!5e0!3m2!1sen!2sin!4v1714200000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="bg-surface p-10 md:p-16 border border-white/5 relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5" />
        <h3 className="text-3xl font-display italic font-bold mb-10">Send an Inquiry</h3>
        <form className="space-y-8">
          <div className="group">
            <label className="block text-[10px] font-black tracking-widest uppercase text-zinc-500 mb-2 group-focus-within:text-brand transition-colors">Your Name</label>
            <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-brand transition-colors text-sm font-medium" placeholder="E.G. ARJUN KAPOOR" />
          </div>
          <div className="group">
            <label className="block text-[10px] font-black tracking-widest uppercase text-zinc-500 mb-2 group-focus-within:text-brand transition-colors">Email Address</label>
            <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-brand transition-colors text-sm font-medium" placeholder="ARJUN@EXAMPLE.COM" />
          </div>
          <div className="group">
            <label className="block text-[10px] font-black tracking-widest uppercase text-zinc-500 mb-2 group-focus-within:text-brand transition-colors">Phone Number</label>
            <input type="tel" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-brand transition-colors text-sm font-medium" placeholder="+91 XXXXX XXXXX" />
          </div>
          <div className="group">
            <label className="block text-[10px] font-black tracking-widest uppercase text-zinc-500 mb-2 group-focus-within:text-brand transition-colors">Your Message</label>
            <textarea className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-brand transition-colors text-sm font-medium h-24 resize-none" placeholder="HOW CAN WE HELP YOU?" />
          </div>
          <Button variant="brand" className="w-full h-14">Send Inquiry</Button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-black text-white px-4 md:px-8 pt-32 pb-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
      <div className="space-y-8">
        <span className="text-2xl font-display font-black tracking-tighter uppercase text-brand">
          SHINY<span className="text-white ml-2">SHELL</span>
        </span>
        <p className="text-zinc-500 text-sm font-medium leading-relaxed italic">
          Experience the ultimate in grooming where style meets comfort. We are committed to providing top-notch services that leave you feeling your best.
        </p>
        <div className="flex gap-4">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-sm hover:bg-brand hover:border-brand transition-all">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-display italic font-bold mb-8">Navigation</h4>
        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <li><a href="#" className="hover:text-brand">Home</a></li>
          <li><a href="#" className="hover:text-brand">About Us</a></li>
          <li><a href="#" className="hover:text-brand">Our Services</a></li>
          <li><a href="#" className="hover:text-brand">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-display italic font-bold mb-8">Contact Info</h4>
        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <li className="flex items-start gap-3">
            <MapPin size={12} className="shrink-0 mt-1 text-brand" /> 
            <span>SHOP NO 2, NIRAJ PARK, WAYLE NAGAR,<br /> KHADAKPADA, KALYAN (W) 421301</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={12} className="text-brand" /> 
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={12} className="text-brand" /> 
            <span>HELLO@SHINYSHELL.COM</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-display italic font-bold mb-8">Newsletter</h4>
        <div className="flex bg-zinc-900 border border-white/5 p-1 rounded-sm">
          <input type="email" placeholder="YOUR EMAIL" className="bg-transparent px-4 py-3 text-[10px] w-full outline-none font-bold uppercase tracking-widest" />
          <button className="bg-brand px-4 text-[10px] font-bold uppercase tracking-widest">SEND</button>
        </div>
      </div>
    </div>
    <div className="text-center pt-16 border-t border-white/5 text-[10px] font-bold text-zinc-600 tracking-[0.3em] uppercase">
      © {new Date().getFullYear()} Shiny Shell Salon. The Art of Excellence.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <PricingSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white/20"
        title="Contact us on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute inset-0 bg-white/20 scale-0 hover:scale-100 transition-transform rounded-full" />
      </motion.a>
    </div>
  );
}
