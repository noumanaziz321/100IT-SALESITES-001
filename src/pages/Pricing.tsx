import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Transparent <span className="text-indigo-400">Pricing</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Simple, predictable monthly plans to keep your business running smoothly. No hidden fees, just expert support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.highlighted
                    ? 'border-indigo-600 shadow-2xl shadow-indigo-100 scale-105 z-10 bg-white'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Recommended
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{plan.idealFor}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 ml-2">/ month</span>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Support Level</p>
                    <p className="text-sm font-semibold text-slate-900">{plan.supportLevel}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What's Included</p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <Check size={18} className="text-indigo-600 mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* VAT Notice */}
          <div className="mt-16 flex items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
            <Info size={20} className="text-slate-400 mr-4 shrink-0" />
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">VAT Clarification:</span> All prices listed are subject to VAT at the standard UK rate (20%). Bespoke enterprise contracts may vary based on specific service level agreements (SLAs).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            {[
              { q: 'Is there a minimum contract length?', a: 'Most of our managed plans are on a 12-month rolling contract, but we offer flexible monthly options for specific services.' },
              { q: 'Can I upgrade my plan later?', a: 'Absolutely. As your business grows, you can upgrade your support level or add additional services at any time.' },
              { q: 'Do you offer discounts for charities?', a: 'Yes, we provide special pricing for registered UK charities and non-profit organisations.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
