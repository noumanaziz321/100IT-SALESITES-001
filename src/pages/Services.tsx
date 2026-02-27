import { motion } from 'motion/react';
import { ShieldCheck, Lock, Cloud, Lightbulb, Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Lock,
  Cloud,
  Lightbulb,
  Network,
};

export const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Our <span className="text-indigo-600">IT Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Tailored technology solutions designed to help your business grow, stay secure, and operate efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Target Audience</h3>
                        <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">The Process</h3>
                          <ul className="space-y-2">
                            {service.process.map((step, i) => (
                              <li key={i} className="flex items-center text-slate-600">
                                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center mr-3 font-bold">
                                  {i + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Key Benefits</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center text-slate-600">
                                <CheckCircle2 size={16} className="text-emerald-500 mr-3" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Starting from</p>
                          <p className="text-3xl font-bold text-slate-900">{service.startingPrice}<span className="text-sm text-slate-400 font-normal"> / month</span></p>
                        </div>
                        <Link
                          to="/contact"
                          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center"
                        >
                          Enquire Now
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="absolute -inset-4 bg-indigo-500/5 rounded-[2.5rem] blur-2xl" />
                    <img
                      src={`https://picsum.photos/seed/${service.id}/800/600`}
                      alt={service.title}
                      className="rounded-[2rem] shadow-xl relative z-10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a custom solution?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Every business is unique. We can design a bespoke IT strategy that fits your specific operational requirements and budget.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};
