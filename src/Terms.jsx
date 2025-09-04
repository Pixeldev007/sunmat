import React from "react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();
  return (
    <div className="min-h-full flex items-center justify-center p-6" style={{
      background: "linear-gradient(135deg, #ff8a00 0%, #ffc107 50%, #ffe082 100%)",
    }}>
      <div className="w-full max-w-3xl bg-amber-50 rounded-2xl shadow-2xl border border-amber-100 p-6 md:p-10">
        <div className="flex justify-between items-start">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">Terms & Conditions</h1>
          <button onClick={() => navigate(-1)} className="text-sm text-blue-700 hover:underline font-semibold">← Back to Home</button>
        </div>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Accessing, registering, or using Sun Matrimony's website, mobile application, or related services signifies that the user acknowledges, understands, and agrees to be bound by the terms and conditions outlined herein, forming a legally binding agreement between the individual and Sun Matrimony.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          The platform is intended solely for individuals who have attained the legal marriageable age as per the laws of India (currently 18 years for women and 21 years for men), and registration constitutes a declaration that these criteria are met and that all information provided is truthful, accurate, and complete.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Users are entirely responsible for maintaining the confidentiality of their login credentials and for all activities occurring under their account, with any provision of false, misleading, or fraudulent information resulting in immediate suspension or termination without refund and potential legal action.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          While Sun Matrimony endeavors to verify certain user details, no guarantee is provided regarding the authenticity, accuracy, or reliability of any profile, content, or communication on the platform, and users are urged to exercise due diligence before making commitments, whether personal or financial.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          The service is strictly for lawful, personal use to facilitate matrimonial alliances, and misuse for purposes such as commercial solicitation, dating without intent to marry, harassment, abuse, threatening behavior, posting obscene or offensive content, infringing intellectual property rights, or engaging in illegal activities is prohibited and may lead to permanent removal of the account, legal proceedings, or both.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Any copying, modification, distribution, transmission, display, performance, reproduction, publication, licensing, derivative work creation, transfer, or sale of content, software, or services from Sun Matrimony without prior written permission is forbidden.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          All payments for premium features, subscriptions, or services are final and non-refundable unless otherwise stated in writing, and prices are subject to change without notice, with continued use after such changes implying acceptance.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Sun Matrimony bears no responsibility for direct, indirect, incidental, consequential, or exemplary damages arising from use of the service, inability to access it, reliance on information from other members, or interactions occurring as a result of platform usage.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Although strong measures are implemented to secure the site, complete privacy or security of internet-based communications cannot be guaranteed, and users engage with the platform at their own risk.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Third-party websites, advertisers, or services linked on the platform operate independently of Sun Matrimony, which holds no accountability for their content, policies, or practices.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          The right is reserved to modify, suspend, or discontinue any part of the service without prior notice, and to update these terms periodically, with continued usage constituting acceptance of the revised terms.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          The agreement is governed by the laws of India, with disputes falling under the exclusive jurisdiction of the courts in [Your City, State]. If any provision is deemed invalid, illegal, or unenforceable, the remainder shall continue in full force.
        </p>
      </div>
    </div>
  );
}
