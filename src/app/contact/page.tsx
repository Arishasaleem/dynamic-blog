'use client';
import { BackgroundLines } from "@/components/ui/background-lines";
import React, { FormEvent, useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <main className="mt-40">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="min-h-screen py-12 flex items-center justify-center mt-8">
          {/* Contact Container */}
          <div className="w-full max-w-[95%] sm:max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4 text-blue-500">
                Contact Us
              </h1>
              <p className="text-neutral-600 text-sm sm:text-base max-w-md mx-auto mb-6">
                We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your journey.
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-6 rounded-lg shadow-md"
            >
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-sm sm:text-base placeholder:text-gray-400"
                required
              />

              {/* Message Textarea */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-sm sm:text-base placeholder:text-gray-400"
                rows={4}
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm sm:text-base font-medium py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </BackgroundLines>
    </main>
  );
}

export default Contact;