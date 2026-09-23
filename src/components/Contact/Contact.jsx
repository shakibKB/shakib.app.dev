import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard! 📋`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vtroy0n",  // Replace with your EmailJS Service ID
        "template_3jjnk8i",  // Replace with your EmailJS Template ID
        form.current,
        "cAxiVXL4rVCc8rJoo"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[3vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Direct Contact Info */}
        <div className="flex-1 bg-[#0d081f] p-8 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.1)] border border-gray-700 flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Direct Inquiries
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Feel free to send a note directly to my inbox or give me a call.
            </p>
          </div>

          {/* Email Box */}
          <div className="bg-[#131025] border border-gray-700 rounded-xl p-4 flex items-center justify-between group hover:border-purple-500 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-purple-900/30 p-3 rounded-lg text-purple-400">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">Primary Email</p>
                <p className="text-white text-sm sm:text-base font-mono">shakib.app.dev@gmail.com</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy("shakib.app.dev@gmail.com", "Email")}
              className="p-3 bg-[#0d081f] border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-purple-400 transition-all active:scale-95"
              title="Copy Email"
            >
              <FaCopy />
            </button>
          </div>

          {/* Phone Box */}
          <div className="bg-[#131025] border border-gray-700 rounded-xl p-4 flex items-center justify-between group hover:border-purple-500 transition-colors mt-2">
            <div className="flex items-center gap-4">
              <div className="bg-purple-900/30 p-3 rounded-lg text-purple-400">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">Phone Number</p>
                <p className="text-white text-sm sm:text-base font-mono">+8801405120644</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy("+8801405120644", "Phone Number")}
              className="p-3 bg-[#0d081f] border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-purple-400 transition-all active:scale-95"
              title="Copy Phone Number"
            >
              <FaCopy />
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-[#0d081f] p-8 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.1)] border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send a Message <span className="ml-1">🚀</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            />
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 text-white font-bold rounded-xl hover:opacity-90 transition-opacity mt-2 shadow-lg shadow-purple-500/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
