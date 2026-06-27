import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#298cc8] text-white py-8 mt-10">
      <div className="max-auto px-7">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Company */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              About RojgarBank
            </h2>
            <p className="text-white mt-3">
              Rojgar Bank is a trusted recruitment platform in Nepal, connecting talented job seekers with reputable employers through professional HR and staffing solutions.
              We simplify the hiring process with reliable, transparent, and efficient recruitment services.
              Empowering careers and helping businesses build stronger teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/training" className="hover:text-white">Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p>📧 info@rojgarbank.com</p>
            <p>📞 +977-9800000000</p>
            <p>📍 Kathmandu, Nepal</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          </div>

        </div>

        <hr className="border-white/70 my-6" />

        <p className="text-left">
          © {new Date().getFullYear()} Rojgar Bank. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer