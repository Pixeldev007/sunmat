import React from "react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();
  return (
    <div className="min-h-full flex items-center justify-center p-6" style={{
      background: "linear-gradient(135deg, #ff8a00 0%, #ffc107 50%, #ffe082 100%)",
    }}>
      <div className="w-full max-w-3xl bg-amber-50 rounded-2xl shadow-2xl border border-amber-100 p-6 md:p-10">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">Privacy Policy</h1>
          <button onClick={() => navigate(-1)} className="text-sm text-blue-700 hover:underline font-semibold">← Back to Home</button>
        </div>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Sun Matrimony is committed to protecting the privacy and confidentiality of every registered member and takes all reasonable measures to ensure that your personal data is handled securely, lawfully, and transparently in accordance with applicable privacy laws. By registering on our platform or using any of our services, you acknowledge and consent to the collection, storage, processing, and use of your information as outlined herein.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          The personal information we collect may include, but is not limited to, your full name, date of birth, gender, marital status, religion, caste, sub-caste, mother tongue, education details, occupation, employment history, income, lifestyle preferences, photographs, family background, residential address, city, state, country, email address, mobile number, IP address, device information, location data, browsing behavior, search history, interests, partner preferences, and any other data you voluntarily share in your profile or communication. In addition, for premium services or paid features, we may collect payment information such as billing address and transaction details, which are processed through secure and trusted payment gateways and are not stored on our servers.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          This data is used for multiple purposes including creating and managing your user account, displaying your profile to other eligible members for matchmaking, enabling secure messaging and communication features, improving user experience, customizing match suggestions, processing payments, sending important notifications, resolving technical issues, detecting and preventing fraudulent activity, complying with legal obligations, and enforcing our terms of service.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          While Sun Matrimony does not sell, rent, or trade your personal information to any unaffiliated third party, we may share certain details with trusted service providers, verification agencies, or legal authorities when required by law, court order, or to protect the safety of our users.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          We employ industry-standard security measures such as encryption, secure socket layer (SSL) technology, firewalls, access control protocols, and regular security audits to protect your data against unauthorized access, alteration, disclosure, or destruction; however, due to the inherent nature of the internet, we cannot guarantee absolute security.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Cookies and similar technologies are used to store session information, remember user preferences, track activity for analytics, and enhance functionality; you may disable these through your browser settings, though this may affect certain features.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Your personal information will be retained for as long as your account is active or as required to fulfill the purposes outlined in this policy, resolve disputes, enforce agreements, and comply with applicable laws. You have the right to access, update, correct, or delete your personal information at any time, and you may also control your profile visibility or opt out of marketing communications through your account settings.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Sun Matrimony’s services are intended solely for individuals of legal marriageable age as per the laws of India, and we do not knowingly collect or store information from individuals under this age limit; any such accounts found will be removed immediately.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          We reserve the right to update, amend, or modify this Privacy Policy at our discretion, and any changes will be communicated through our website or via email; continued use of our services after such changes constitutes your acceptance of the revised terms. For any concerns, complaints, or requests regarding your privacy, you can reach our Data Protection Officer via email.
        </p>
      </div>
    </div>
  );
}
