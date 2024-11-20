import React from 'react';
import fb from "../utils/Img/svg/fb.svg";
import insta from "../utils/Img/svg/instagram.svg";
import linkedIn from "../utils/Img/svg/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-10 px-4">
      <div className="flex flex-col md:flex-row md:justify-between w-full md:w-3/4 mx-auto">
        {/* Locate Section */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/2">
          <div className="mb-4 w-full">
            <div className="p-2 text-xl md:text-2xl px-2">Locate</div>
            <div className="flex flex-col justify-center py-6 px-4">
              <iframe
                className="w-full outline outline-neonblue outline-3"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.40934140514!2d80.20517417404153!3d12.945638087367369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dcaf1158b69%3A0x2faed53a93b675d8!2sJerusalem%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1724333299768!5m2!1sen!2sin"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="pt-2 px-4 text-sm text-gray-300">
              <p>Jerusalem College of Engineering (JCE),</p>
              <p>Pallikarnai <br /> Chennai 600028</p>
            </div>
          </div>
        </div>

        {/* Queries Section */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/2">
          <h3 className="text-xl md:text-xl mb-2">For Queries:</h3>
          <a
            href="tel:+123456789"
            className="bg-gray-700/60 text-lg hover:bg-gray-800/80 transition-all border border-gray-400/60 px-5 py-1 rounded-2xl inline-block"
          >
            +91 123456789
          </a>
          <div className="mt-4 text-sm">
            <h3 className="text-xl md:text-xl mb-2">Reach Us On:</h3>
            <a
              href="mailto:email2@gmail.com"
              className="bg-gray-700/60 hover:bg-gray-800/80 transition-all border border-gray-400/60 px-5 py-1 rounded-2xl inline-block text-lg"
            >
              email2@gmail.com
            </a>
          </div>
        </div>

        {/* Media Section */}
        <div className="flex flex-col items-center md:w-1/2">
          <p className="text-lg mt-4 md:text-2xl mb-4">Media</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transform transition-all text-neonblue text-2xl"
            >
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transform transition-all text-blue-500 text-2xl"
            >
              <img src={fb} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transform transition-all text-neonblue text-2xl"
            >
              <img src={linkedIn} alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-sm text-gray-400 text-center">
        © 2024 - NCSE | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
