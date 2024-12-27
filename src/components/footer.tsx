import Link from "next/link"


export default function Footer(){
    return(
        <footer className="bg-[#1f1f1f] text-white py-12 mt-20 md:mt-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 mb-4 sm:mb-6 text-center sm:text-left">
              About Us
          </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Sharing curated stories and insights on health, wellness, and lifestyle. Empowering our readers to lead healthier, happier lives.
              </p>
            </div>
      
            {/* Navigation Links */}
            <div>
              <h2 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-400 hover:text-[#d67e1a] transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#d67e1a] transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-sm text-gray-400 hover:text-[#d67e1a] transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-gray-400 hover:text-[#d67e1a] transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
      
            
      {/* Social Media */}
      <div>
        <h2 className="text-lg font-semibold text-gray-200 mb-4">Connect with Us</h2>
        <p className="text-sm text-gray-400 mb-4">
          Follow us on social platforms for updates.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-[#d67e1a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 12C22 5.372 17.627 1 11 1S0 5.372 0 12c0 5.981 4.805 10.93 10.986 11.925V14.75H8.106v-2.75h2.88V9.547c0-2.848 1.716-4.402 4.338-4.402 1.262 0 2.58.229 2.58.229v2.846h-1.453c-1.435 0-1.873.893-1.873 1.805v2.193h3.196l-.511 2.75h-2.685V24C19.195 22.93 24 18.98 24 12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-[#d67e1a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M24 4.557a9.829 9.829 0 0 1-2.829.775 4.932 4.932 0 0 0 2.165-2.724 9.867 9.867 0 0 1-3.127 1.196 4.917 4.917 0 0 0-8.38 4.482C7.691 8.095 4.067 6.13 1.64 3.161a4.917 4.917 0 0 0 1.523 6.573 4.902 4.902 0 0 1-2.23-.616v.061a4.918 4.918 0 0 0 3.946 4.827 4.936 4.936 0 0 1-2.224.084 4.918 4.918 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.9 13.9 0 0 0 7.548 2.211c9.057 0 14.01-7.513 14.01-14.01 0-.214-.005-.426-.014-.637A10.004 10.004 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-[#d67e1a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 0C8.741 0 8.333.013 7.053.072 5.77.13 4.879.268 4.14.515a5.373 5.373 0 0 0-1.909.991 5.371 5.371 0 0 0-.991 1.909c-.247.739-.385 1.631-.443 2.913C.073 8.333.06 8.741.06 12c0 3.259.013 3.667.072 4.947.058 1.283.197 2.175.443 2.913a5.371 5.371 0 0 0 .991 1.909 5.371 5.371 0 0 0 1.909.991c.739.247 1.631.385 2.913.443 1.28.059 1.688.072 4.947.072 3.259 0 3.667-.013 4.947-.072 1.283-.058 2.175-.197 2.913-.443a5.371 5.371 0 0 0 1.909-.991 5.371 5.371 0 0 0 .991-1.909c.247-.739.385-1.631.443-2.913.059-1.28.072-1.688.072-4.947 0-3.259-.013-3.667-.072-4.947-.058-1.283-.197-2.175-.443-2.913a5.373 5.373 0 0 0-.991-1.909 5.371 5.371 0 0 0-1.909-.991c-.739-.247-1.631-.385-2.913-.443C15.667.013 15.259 0 12 0zm0 2.88c3.187 0 3.563.011 4.822.068 1.14.051 1.756.237 2.169.399.541.21.93.461 1.337.868.407.407.658.796.868 1.337.162.413.348 1.029.399 2.169.057 1.259.068 1.635.068 4.822s-.011 3.563-.068 4.822c-.051 1.14-.237 1.756-.399 2.169a3.595 3.595 0 0 1-.868 1.337 3.595 3.595 0 0 1-1.337.868c-.413.162-1.029.348-2.169.399-1.259.057-1.635.068-4.822.068s-3.563-.011-4.822-.068c-1.14-.051-1.756-.237-2.169-.399a3.595 3.595 0 0 1-1.337-.868 3.595 3.595 0 0 1-.868-1.337c-.162-.413-.348-1.029-.399-2.169-.057-1.259-.068-1.635-.068-4.822s.011-3.563.068-4.822c.051-1.14.237-1.756.399-2.169a3.595 3.595 0 0 1 .868-1.337A3.595 3.595 0 0 1 5.885 2.94c.413-.162 1.029-.348 2.169-.399 1.259-.057 1.635-.068 4.822-.068zM12 5.82A6.18 6.18 0 1 0 18.18 12 6.188 6.188 0 0 0 12 5.82zm0 10.224A4.044 4.044 0 1 1 16.044 12 4.044 4.044 0 0 1 12 16.044zM18.406 4.594a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-[#d67e1a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.447 20.452H16.89v-5.569c0-1.33-.027-3.042-1.851-3.042-1.853 0-2.135 1.445-2.135 2.94v5.671h-3.56V9.97h3.414v1.428h.049c.476-.901 1.637-1.85 3.367-1.85 3.6 0 4.267 2.367 4.267 5.451v5.453zM5.337 8.436a2.07 2.07 0 1 1 .002-4.141 2.07 2.07 0 0 1-.002 4.141zM6.119 20.452H4.558V9.97h1.561v10.482zm18.557-18H1.313C.587 2.452 0 3.037 0 3.762v16.475c0 .726.587 1.313 1.313 1.313h23.362c.726 0 1.313-.587 1.313-1.313V3.762c0-.726-.587-1.313-1.313-1.313z" />
            </svg>
          </a>
        </div>
      </div>
    
      
            {/* Newsletter */}
            <div>
              <h2 className="text-lg font-semibold text-gray-200 mb-4">Subscribe</h2>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest blog updates and exclusive content.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-md bg-[#333333] text-gray-200 placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 bg-[#d67e1a] text-white font-medium rounded-r-md hover:bg-[#f3d2af] transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
      
          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} HEALTH EASE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      

    )
}


