import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
export const Footer = () => {
  return <footer className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Subscribe Now!</h3>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="bg-transparent border-b border-white/20 px-2 py-1 flex-grow" />
            <button className="text-white">SEND NOW ↗</button>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Our Location:</h3>
            <p className="text-gray-400 mb-6">
              Schweizer Skischule Iohnerhubels
              <br />
              Mtrasse 95 CH-3123 Belp
            </p>
            <div className="flex gap-4">
              <button className="border border-white/20 px-4 py-2 rounded-full hover:bg-white/10">
                FACEBOOK
              </button>
              <button className="border border-white/20 px-4 py-2 rounded-full hover:bg-white/10">
                TWITTER
              </button>
              <button className="border border-white/20 px-4 py-2 rounded-full hover:bg-white/10">
                INSTAGRAM
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Make Appointment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Department
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Meet Our Experts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                IT Management
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-8">
            <h3 className="text-gray-400 mb-2">Our phone number</h3>
            <p className="text-2xl font-bold">+1800 123 456789 99</p>
          </div>
          <div className="mb-8">
            <h3 className="text-gray-400 mb-2">Our email address</h3>
            <p className="text-xl">altech123@gmail.com</p>
          </div>
          <p className="text-gray-400">
            Copyright © 2023 Altech Advanced Template
          </p>
        </div>
      </div>
    </footer>;
};