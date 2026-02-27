import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Building2, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES, SERVICES } from '../constants';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-6">
                Cumbria's Premier IT Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Empowering Your Business with <span className="text-indigo-600">Smarter IT</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                From managed support to advanced cyber security, we provide the technical foundation your British business needs to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center group shadow-lg shadow-indigo-200"
                >
                  Our Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-3xl" />
              <img
                src="https://picsum.photos/seed/it-office/800/600"
                alt="Modern IT Office"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Uptime Guarantee</p>
                  <p className="text-xl font-bold text-slate-900">99.9% Reliable</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Cumbria IT?</h2>
            <p className="text-slate-600">We don't just fix computers; we build partnerships that drive growth and security.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                desc: 'Based in Carlisle, we understand the unique challenges of businesses across Cumbria and the North West.',
                icon: Building2,
              },
              {
                title: 'Expert Support',
                desc: 'Our team of certified engineers provides jargon-free support when you need it most.',
                icon: Users,
              },
              {
                title: 'Proactive Security',
                desc: 'We monitor your systems 24/7 to catch and resolve issues before they impact your business.',
                icon: CheckCircle2,
              },
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Real Results for UK Businesses</h2>
              <p className="text-slate-400">See how we've helped local companies save money and improve efficiency through strategic IT implementation.</p>
            </div>
            <Link to="/services" className="text-indigo-400 font-bold flex items-center hover:text-indigo-300 transition-colors">
              View all services <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all">
                <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-4 block">{study.client}</span>
                <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">The Challenge</p>
                    <p className="text-slate-200">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">The Result</p>
                    <p className="text-emerald-400 font-bold text-lg">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Trusted by Local Leaders</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 relative">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to transform your IT?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Join dozens of Cumbria businesses who trust us with their digital infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};
