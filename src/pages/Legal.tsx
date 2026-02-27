import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.legalName} ("the Company", "we", "us", "our"). By engaging our services or using our website, you agree to comply with and be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
          <p>
            The Company provides IT services including but not limited to Managed IT Support, Cyber Security, Cloud Solutions, and Consultancy. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
          <p>
            All fees are quoted in Pounds Sterling (£) and are exclusive of VAT unless otherwise stated. Payment is due within 14 days of the invoice date unless otherwise agreed in writing. We reserve the right to charge interest on late payments at a rate of 8% above the Bank of England base rate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
          <p>
            All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company unless explicitly transferred in writing upon full payment of all fees.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all non-public information received from the other party during the course of the engagement. This obligation survives the termination of any agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic">
          Last updated: February 2026
        </div>
      </div>
    </div>
  );
};

export const Privacy = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
        <p>
          {COMPANY_DETAILS.legalName} is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR).
        </p>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data We Collect</h2>
          <p>We may collect and process the following data about you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email, phone number, business address).</li>
            <li>Technical data (IP address, browser type, usage patterns on our website).</li>
            <li>Communication records (emails, support tickets, meeting notes).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Purpose of Processing</h2>
          <p>We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and manage our IT services.</li>
            <li>Respond to your enquiries and provide support.</li>
            <li>Comply with legal and regulatory obligations.</li>
            <li>Improve our website and service offerings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
          <p>Under the UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data.</li>
            <li>The right to rectification of inaccurate data.</li>
            <li>The right to erasure ('right to be forgotten').</li>
            <li>The right to restrict or object to processing.</li>
            <li>The right to data portability.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
          </p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic">
          Last updated: February 2026
        </div>
      </div>
    </div>
  );
};
