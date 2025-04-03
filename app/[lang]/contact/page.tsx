import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div id="patterns-bg" className="!fixed"></div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-5xl text-foreground">
                  Contact Us
                </h1>
                <p className="max-w-[600px] text-foreground/65 md:text-xl">
                  Get in touch with our team to learn more about our cloud services.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                  <p className="text-foreground/65">
                    Have questions about our cloud services? Our team is here to help.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="">
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-gray-600">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-gray-600">info@heritagecloud.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-gray-600">
                        123 Cloud Street, Tech City, Africa
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-foreground">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-foreground">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      Send us a message
                    </h3>
                    <p className="text-sm text-gray-600">
                      Fill out the form below and we'll get back to you as soon as
                      possible.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium text-foreground">
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="w-full rounded-md border border-gray-200 p-2 text-sm bg-white text-foreground"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium text-foreground">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="w-full rounded-md border border-gray-300 p-2 text-sm bg-white text-foreground"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm bg-white text-foreground"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm bg-white text-foreground"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm bg-white text-foreground"
                        placeholder="Tell us more about your inquiry..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container p-6 w-max glass-bg-alt shadow-md rounded-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[600px] text-gray-600">
                  Find answers to common questions about our cloud services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-8">
              <div className="rounded-lg border p-4 border-gray-400">
                <h3 className="text-lg font-medium text-foreground">
                  How do I get started with Heritage Cloud?
                </h3>
                <p className="mt-2 text-gray-600">
                  Getting started is easy. Simply click the "Access Cloud" button at the
                  top of the page to create an account. Our team will guide you through
                  the onboarding process.
                </p>
              </div>
              <div className="rounded-lg border p-4 border-gray-400">
                <h3 className="text-lg font-medium text-foreground">
                  What payment methods do you accept?
                </h3>
                <p className="mt-2 text-gray-600">
                  We accept all major credit cards, bank transfers, and mobile money
                  payments. You can manage your payment methods in your account settings.
                </p>
              </div>
              <div className="rounded-lg border p-4 border-gray-400">
                <h3 className="text-lg font-medium text-foreground">
                  Do you offer technical support?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, we provide 24/7 technical support for all our customers. You can
                  reach our support team via phone, email, or through the support portal
                  in your account.
                </p>
              </div>
              <div className="rounded-lg border p-4 border-gray-400">
                <h3 className="text-lg font-medium text-foreground">
                  Where are your data centers located?
                </h3>
                <p className="mt-2 text-gray-600">
                  We have data centers in multiple locations across Africa, including
                  South Africa, Kenya, Nigeria, and Egypt, ensuring low latency and high
                  availability for your applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
