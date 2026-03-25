/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  HeartPulse, 
  Calendar,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "种植牙 / Dental Implants",
      description: "High-quality tooth replacement solutions for a natural-looking smile.",
      icon: <ShieldCheck className="w-6 h-6 text-cyan" />,
    },
    {
      title: "瓷贴面 / Porcelain Veneers",
      description: "Transform your smile with custom-made, durable porcelain shells.",
      icon: <Star className="w-6 h-6 text-cyan" />,
    },
    {
      title: "隐形牙套 / Invisible Braces",
      description: "Straighten your teeth discreetly with modern clear aligner technology.",
      icon: <HeartPulse className="w-6 h-6 text-cyan" />,
    },
    {
      title: "洗牙补牙 / Scaling & Filling",
      description: "Essential preventative care and restorative treatments for optimal oral health.",
      icon: <Calendar className="w-6 h-6 text-cyan" />,
    },
    {
      title: "牙根治疗 / Root Canal",
      description: "Specialized treatment to save damaged teeth and relieve pain.",
      icon: <ShieldCheck className="w-6 h-6 text-cyan" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="Jin Smile Dental Clinic Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-navy leading-none">
                  Jin Smile <span className="text-cyan">Dental</span>
                </span>
                <span className="text-[10px] font-bold text-navy tracking-widest uppercase">Sri Petaling</span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#makeovers" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Makeovers</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Services</a>
            <a href="#makeovers" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Makeovers</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold">
              Book Appointment
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-navy text-xs font-bold uppercase tracking-wider mb-6">
                <Star className="w-3 h-3 fill-current" />
                Trusted Local Care
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-navy leading-[1.1] mb-6">
                Your Smile, <br />
                <span className="text-cyan text-6xl md:text-7xl">Our Passion.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience world-class dental care in a comfortable and friendly environment. 
                We use the latest technology to ensure your visit is painless and effective.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/60198163838" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-navy text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all shadow-xl shadow-navy/20 flex items-center gap-2"
                >
                  Chat on WhatsApp <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Our Services
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="Patient" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-slate-500 font-medium">500+ Happy Patients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/home-page-hero.jpg" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center text-navy">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">Open Today</p>
                    <p className="text-xs text-slate-500">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-cyan font-bold text-sm uppercase tracking-widest mb-3">Our Services</h2>
            <p className="text-4xl font-bold text-navy mb-6">Comprehensive Care for Every Smile</p>
            <p className="text-slate-600 text-lg">
              From routine cleanings to advanced cosmetic procedures, we offer a full range of dental services 
              tailored to your unique needs.
            </p>
          </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Makeovers Section */}
      <section id="makeovers" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-cyan font-bold text-sm uppercase tracking-widest mb-3">Smile Makeovers</h2>
            <p className="text-4xl font-bold text-navy mb-6">Real Results, Real Smiles</p>
            <p className="text-slate-600 text-lg">
              Witness the life-changing transformations of our patients. Our expert team combines art and science 
              to create the perfect smile for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Advanced Smile Design",
                description: "Customized Treatment Plan",
                image: "/makeover.jpg"
              },
              {
                title: "Precision Restoration",
                description: "Full Arch Rehabilitation",
                image: "/makaover2.jpg"
              },
              {
                title: "Cosmetic Transformation",
                description: "Complete Aesthetic Overhaul",
                image: "/makeover3.jpg"
              }
            ].map((makeover, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={makeover.image} 
                    alt={makeover.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-cyan/80 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded backdrop-blur-sm">Result</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-1">{makeover.title}</h3>
                  <p className="text-cyan font-semibold text-sm">{makeover.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
              View More Transformations <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">15+</p>
              <p className="text-cyan text-sm uppercase tracking-wider font-semibold">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">5k+</p>
              <p className="text-cyan text-sm uppercase tracking-wider font-semibold">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">12</p>
              <p className="text-cyan text-sm uppercase tracking-wider font-semibold">Specialists</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-cyan text-sm uppercase tracking-wider font-semibold">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20">
                <h2 className="text-4xl font-bold text-navy mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-cyan/10 rounded-2xl flex items-center justify-center text-navy shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-1">Our Location</p>
                      <p className="text-slate-600">26G, Jln Radin Bagus 3,<br />Sri Petaling, 57000 Kuala Lumpur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-cyan/10 rounded-2xl flex items-center justify-center text-navy shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-1">Phone & WhatsApp</p>
                      <a href="https://wa.me/60198163838" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-cyan transition-colors">+6019-816 3838</a>
                      <a href="https://wa.me/6013-9163899" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-cyan transition-colors">+6013-916 3899</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-cyan/10 rounded-2xl flex items-center justify-center text-navy shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-navy mb-1">Email Address</p>
                      <p className="text-slate-600">hello@jinsmile.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-100">
                  <p className="font-bold text-navy mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-slate-100 rounded-full hover:bg-cyan hover:text-white transition-all cursor-pointer flex items-center justify-center">
                        <Star className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-navy p-12 lg:p-20 text-white">
                <h3 className="text-3xl font-bold mb-8">Request an Appointment</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-cyan/80">Full Name</label>
                      <input type="text" className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cyan/50 outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-cyan/80">Email</label>
                      <input type="email" className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cyan/50 outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-cyan/80">Service Needed</label>
                    <select className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan/50 outline-none appearance-none">
                      <option>Dental Implants</option>
                      <option>Porcelain Veneers</option>
                      <option>Invisible Braces</option>
                      <option>Scaling & Filling</option>
                      <option>Root Canal</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-cyan/80">Message</label>
                    <textarea className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cyan/50 outline-none min-h-[120px]" placeholder="Tell us about your needs..."></textarea>
                  </div>
                  <button className="w-full bg-white text-navy py-4 rounded-xl font-bold text-lg hover:bg-cyan hover:text-white transition-all shadow-lg">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="Jin Smile Dental Clinic Logo" 
                className="w-10 h-10 object-contain rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Jin Smile <span className="text-cyan">Dental</span>
                </span>
                <span className="text-[9px] font-bold text-cyan tracking-widest uppercase opacity-80">Sri Petaling</span>
              </div>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
            <p className="text-sm">© 2026 Jin Smile Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/60198163838"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-navy text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
