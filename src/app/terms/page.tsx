import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <main className="flex-1"> */}
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-gray-600 mb-4">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Leave Management. These Terms of Service govern your use
            of our website and services. By accessing or using our platform, you
            agree to be bound by these Terms. If you disagree with any part of
            the terms, you may not access the service.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate,
            complete, and current information. You are responsible for
            safeguarding the password and for all activities that occur under
            your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Service Usage</h2>
          <p>
            Our platform provides tools for business management, employee
            time-off tracking, and company administration. You agree to use
            these services only for their intended purposes and in compliance
            with all applicable laws and regulations.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            4. Intellectual Property
          </h2>
          <p>
            The service and its original content, features, and functionality
            are owned by Leave Management and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property laws.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior
            notice, for conduct that we believe violates these Terms or is
            harmful to other users of the Service, our business, or third
            parties, or for any other reason.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall Leave Management, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of
            or inability to access or use the service.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 day&apos;s notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
