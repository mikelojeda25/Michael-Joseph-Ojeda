import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Clock,
  Briefcase,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Email
    const object = {
      ...formData,
      access_key: "522f4a40-dff6-4a75-9d04-70c49ac4d06d",
      subject: `${formData.subject}`,
      from_name: formData.name,
    };

    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to connect to the email service.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* LEFT: Contact + Availability */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="bg-[#0B2F2A] rounded-2xl p-8 border border-white/10 shadow-2xl flex-1">
              <h3 className="text-2xl text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                    <Mail className="text-[#D4AF37]" size={22} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:mikelojeda25@gmail.com"
                      className="text-white hover:text-[#D4AF37]"
                    >
                      mikelojeda25@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                    <MessageCircle className="text-[#D4AF37]" size={22} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                      Viber
                    </p>
                    <a
                      href="viber://add?number=639266320370"
                      className="text-white hover:text-[#D4AF37]"
                    >
                      +63 926 632 0370
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                    <MapPin className="text-[#D4AF37]" size={22} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="text-white">
                      Philippines / Available Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B2F2A] rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl text-white flex items-center gap-3">
                  <Briefcase className="text-[#D4AF37]" size={20} />{" "}
                  Availability
                </h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-emerald-500 text-[10px] font-bold uppercase">
                    Active
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-4">
                I am currently{" "}
                <span className="text-[#D4AF37] font-bold">
                  Available for Hire
                </span>
                .
              </p>
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <Clock size={14} className="text-[#D4AF37]" /> Mon - Fri: 9AM -
                6PM
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0B2F2A] rounded-2xl p-8 border border-white/10 shadow-2xl h-full flex flex-col"
            >
              <h3 className="text-2xl text-white mb-6">Send a Message</h3>
              <div className="space-y-4 flex-1 flex flex-col">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                />
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none resize-none flex-1"
                />

                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-lg text-xs flex items-center gap-2 ${submitStatus.type === "success" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 size={14} />
                    ) : (
                      <AlertCircle size={14} />
                    )}
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 disabled:opacity-50 mt-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
