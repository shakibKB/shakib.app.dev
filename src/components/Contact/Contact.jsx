import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy, FaEnvelope, FaPhoneAlt, FaCheck } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);

    toast.success(`${type} copied to clipboard! 📋`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_vtroy0n",
        "template_3jjnk8i",
        form.current,
        "cAxiVXL4rVCc8rJoo"
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current.reset();
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
          setIsSubmitting(false);
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
      aria-label="Contact and inquiries"
      className="section-container py-16 sm:py-24 relative"
    >
      <ToastContainer />

      <SectionHeader
        eyebrow="Get In Touch"
        title="Contact & Direct Inquiries"
        subtitle="Have a mobile app project, full-time role, or contract inquiry? Reach out directly or send a message below."
      />

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto items-stretch">
        {/* Direct Contact Info */}
        <div className="flex-1 bg-surface-card p-6 sm:p-8 rounded-2xl border border-surface-border flex flex-col justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 tracking-tight">
              Direct Contact
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              Prefer direct communication? Click to copy my email or phone number anytime.
            </p>
          </div>

          <div className="space-y-4 my-auto">
            {/* Email Box */}
            <div className="bg-surface-elevated border border-surface-border rounded-xl p-4 flex items-center justify-between group hover:border-brand-500/40 transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
                    Primary Email
                  </p>
                  <p className="text-text-primary text-xs sm:text-sm font-mono truncate">
                    shakib.app.dev@gmail.com
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("shakib.app.dev@gmail.com", "Email")}
                aria-label="Copy primary email to clipboard"
                className="p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-brand-400 text-text-muted hover:text-text-primary transition-all active:scale-95 shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedType === "Email" ? (
                  <FaCheck className="text-emerald-400 text-sm" />
                ) : (
                  <FaCopy className="text-sm" />
                )}
              </button>
            </div>

            {/* Phone Box */}
            <div className="bg-surface-elevated border border-surface-border rounded-xl p-4 flex items-center justify-between group hover:border-brand-500/40 transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
                    Phone Number
                  </p>
                  <p className="text-text-primary text-xs sm:text-sm font-mono truncate">
                    +8801405120644
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("+8801405120644", "Phone Number")}
                aria-label="Copy phone number to clipboard"
                className="p-2.5 rounded-lg bg-surface-card border border-surface-border hover:border-brand-400 text-text-muted hover:text-text-primary transition-all active:scale-95 shrink-0 ml-2"
                title="Copy Phone Number"
              >
                {copiedType === "Phone Number" ? (
                  <FaCheck className="text-emerald-400 text-sm" />
                ) : (
                  <FaCopy className="text-sm" />
                )}
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-elevated/50 border border-surface-border text-xs text-text-muted">
            📍 Based in Bangladesh • Open to remote worldwide and on-site opportunities.
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-surface-card p-6 sm:p-8 rounded-2xl border border-surface-border shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 tracking-tight">
            Send a Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="user_name" className="sr-only">
                Your Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3.5 rounded-xl bg-surface-elevated text-text-primary placeholder:text-text-muted border border-surface-border focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 text-sm transition-colors"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="sr-only">
                Your Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3.5 rounded-xl bg-surface-elevated text-text-primary placeholder:text-text-muted border border-surface-border focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 text-sm transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3.5 rounded-xl bg-surface-elevated text-text-primary placeholder:text-text-muted border border-surface-border focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 text-sm transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows="4"
                required
                className="w-full p-3.5 rounded-xl bg-surface-elevated text-text-primary placeholder:text-text-muted border border-surface-border focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 text-sm transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-md shadow-brand-500/25 active:scale-98 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-surface-canvas mt-2"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

