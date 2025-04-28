import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

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
          At Business App, we respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>
            Identity Data: includes first name, last name, username or similar
            identifier
          </li>
          <li>Contact Data: includes email address and telephone numbers</li>
          <li>
            Technical Data: includes internet protocol (IP) address, browser
            type and version, time zone setting and location, browser plug-in
            types and versions, operating system and platform
          </li>
          <li>
            Usage Data: includes information about how you use our website and
            services
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          3. How We Use Your Data
        </h2>
        <p>
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>To register you as a new customer</li>
          <li>To provide and manage your account</li>
          <li>To manage our relationship with you</li>
          <li>
            To improve our website, products/services, marketing or customer
            relationships
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used, or accessed in an
          unauthorized way, altered, or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors, and
          other third parties who have a business need to know.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Retention</h2>
        <p>
          We will only retain your personal data for as long as necessary to
          fulfill the purposes we collected it for, including for the purposes
          of satisfying any legal, accounting, or reporting requirements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          6. Your Legal Rights
        </h2>
        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data, including the right to:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update our privacy policy from time to time. We will notify you
          of any changes by posting the new privacy policy on this page and
          updating the &quot;last updated&quot; date at the top of this privacy policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy
          practices, please{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
