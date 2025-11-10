"use client";

import Footer from "../components/Footer";

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const lastUpdated = "January 2025";

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">amboutique</span>, we are
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or make a purchase from us.
          </p>
        </div>

        {/* Information We Collect */}
        <PolicySection title="1. Information We Collect">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Personal Information
            </h3>
            <p>
              When you place an order or create an account, we collect personal
              information such as:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Name and contact information (email, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Order history and preferences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
            </ul>
          </div>
        </PolicySection>

        {/* How We Use Your Information */}
        <PolicySection title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and customer service</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </PolicySection>

        {/* Information Sharing */}
        <PolicySection title="3. Information Sharing and Disclosure">
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <span className="font-semibold">Service Providers:</span> Third-party
              companies that help us operate our business (payment processors,
              shipping companies, email service providers)
            </li>
            <li>
              <span className="font-semibold">Legal Requirements:</span> When
              required by law or to protect our rights and safety
            </li>
            <li>
              <span className="font-semibold">Business Transfers:</span> In the
              event of a merger, acquisition, or sale of assets
            </li>
          </ul>
        </PolicySection>

        {/* Data Security */}
        <PolicySection title="4. Data Security">
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. These measures
            include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Secure Socket Layer (SSL) encryption for data transmission</li>
            <li>Regular security assessments and updates</li>
            <li>Restricted access to personal information</li>
            <li>Secure payment processing through trusted partners</li>
          </ul>
          <p className="mt-4">
            However, no method of transmission over the internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </PolicySection>

        {/* Cookies and Tracking */}
        <PolicySection title="5. Cookies and Tracking Technologies">
          <p>
            We use cookies and similar tracking technologies to enhance your
            browsing experience, analyze site traffic, and understand user
            preferences. You can control cookie settings through your browser,
            but disabling cookies may affect your ability to use certain
            features of our website.
          </p>
        </PolicySection>

        {/* Your Rights */}
        <PolicySection title="6. Your Rights and Choices">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Access and review your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your personal information</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:Info@amboutique.pk"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Info@amboutique.pk
            </a>
          </p>
        </PolicySection>

        {/* Third-Party Links */}
        <PolicySection title="7. Third-Party Links">
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>
        </PolicySection>

        {/* Children's Privacy */}
        <PolicySection title="8. Children's Privacy">
          <p>
            Our website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children. If you
            believe we have collected information from a child, please contact
            us immediately.
          </p>
        </PolicySection>

        {/* Changes to Privacy Policy */}
        <PolicySection title="9. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the updated policy on our website
            and updating the "Last Updated" date. Your continued use of our
            website after such changes constitutes your acceptance of the
            updated policy.
          </p>
        </PolicySection>

        {/* Contact Information */}
        <PolicySection title="10. Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">amboutique</p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:Info@amboutique.pk"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Info@amboutique.pk
              </a>
            </p>
            <p className="text-gray-700">Phone: +92 321 9570971</p>
          </div>
        </PolicySection>

        {/* Acknowledgment */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="text-gray-800">
            By using our website and services, you acknowledge that you have
            read and understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}