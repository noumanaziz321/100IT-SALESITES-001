import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                Our Story: <span className="text-indigo-600">Local Roots</span>, Global Standards.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Founded in the heart of Cumbria, we set out to bridge the gap between high-end enterprise IT and the local businesses that drive our community.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we are a leading provider of managed IT services, helping companies across the UK navigate the complexities of digital transformation with confidence and clarity.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/5 rounded-3xl blur-2xl" />
              <img
                src="https://picsum.photos/seed/cumbria-landscape/800/600"
                alt="Cumbria Landscape"
                className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide accessible, high-quality IT solutions that empower UK businesses to achieve their full potential through secure and efficient technology.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the most trusted IT partner in the North West, recognised for our technical excellence, integrity, and commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', icon: Shield, desc: 'We do what we say, with complete transparency in every interaction.' },
              { title: 'Excellence', icon: Award, desc: 'We strive for the highest standards in technical delivery and support.' },
              { title: 'Community', icon: Heart, desc: 'We are proud of our Cumbrian roots and support local growth.' },
              { title: 'Innovation', icon: Lightbulb, desc: 'We constantly evolve our services to meet future challenges.' },
            ].map((value, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-400">The experts behind our technical strategy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Robert Harrison', role: 'Technical Director', bio: '20+ years in enterprise architecture and cyber security.' },
              { name: 'Emma Wilson', role: 'Head of Operations', bio: 'Expert in IT service management and client relations.' },
              { name: 'James Miller', role: 'Cloud Strategy Lead', bio: 'Specialist in Azure migration and scalable infrastructure.' },
            ].map((leader, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center text-indigo-400 font-bold text-3xl">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-indigo-400 text-sm font-medium mb-4">{leader.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 p-12 rounded-3xl border border-indigo-100">
            <div className="flex items-center space-x-4 mb-8">
              <Shield className="text-indigo-600" size={32} />
              <h2 className="text-3xl font-bold text-slate-900">GDPR Compliance</h2>
            </div>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              As a UK-based IT provider, we take data protection seriously. We are fully committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'Regular Security Audits',
                'Data Encryption at Rest',
                'Staff Security Training',
                'Secure Data Processing',
                'Incident Response Planning',
                'Privacy by Design',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-600">
                  <CheckCircle2 size={18} className="text-indigo-600 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const Lightbulb = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);
