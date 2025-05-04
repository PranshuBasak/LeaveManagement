"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone,  Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setSubmitStatus({
          success: true,
          message: data.message || "Your message has been sent successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        
        toast.success("Failed to send message. Please try again.");
        setSubmitStatus({
          success: false,
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later."+error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-1" /> We&apos;d love to hear from
                you
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Get in Touch With Our Team
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
                Have questions about our business management platform? We&apos;re
                here to help you streamline your company&apos;s operations and boost
                productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form and our team will get back to you as soon
                    as possible. We&apos;re looking forward to hearing from you!
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Us</h3>
                        <p className="text-gray-600">support@pranshubasak.site</p>
                        <p className="text-sm text-gray-500 mt-1">
                          We&apos;ll respond within 24 hours
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <p className="text-gray-600">+91 9589366643</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Monday to Sunday, 9AM-5PM EST
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9AM - 5PM EST
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Closed on weekends and holidays
                        </p>
                      </div>
                    </CardContent>
                  </Card> */}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">
                      Send Us a Message
                    </h2>

                    {submitStatus.success ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-green-700">{submitStatus.message}</p>
                        <Button
                          onClick={() => setSubmitStatus({})}
                          className="mt-4"
                          variant="outline"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="What is this regarding?"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium"
                          >
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="How can we help you?"
                            required
                          ></textarea>
                        </div>

                        {submitStatus.success === false && (
                          <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                            {submitStatus.message}
                          </div>
                        )}

                        <Button
                          type="submit"
                          className="w-full py-3 flex items-center justify-center space-x-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span>Sending...</span>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16 bg-blue-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Looking for more information?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our features and pricing plans to find the perfect
              solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default">
                <Link href="/features">Explore Features</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
