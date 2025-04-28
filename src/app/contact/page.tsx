import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-600">
            Have questions about our business management platform? We&apos;re here to
            help. Fill out the form and our team will get back to you as soon as
            possible.
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">support@businessapp.com</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9AM - 5PM EST</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Looking for more information about our services?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/features">Explore Features</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
