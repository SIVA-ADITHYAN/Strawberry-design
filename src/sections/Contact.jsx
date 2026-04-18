import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#f8f1f3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold font-[Poppins] tracking-widest uppercase" style={{ color: '#E63946' }}>
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-[Poppins] text-gray-900 mt-2">
            Visit or <span style={{ color: '#E63946' }}>Contact Us</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 font-[Lato] text-lg">
            We'd love to hear from you! Drop us a message or visit the farm directly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            {[
              { icon: MapPin, label: 'Location', text: 'Berry Farm Road, Mahabaleshwar, Maharashtra, India', color: '#E63946' },
              { icon: Phone, label: 'Phone', text: '+91 XXXXX XXXXX', color: '#2A9D8F' },
              { icon: Mail, label: 'Email', text: 'info@berrypatch.com', color: '#F4A261' },
              { icon: Clock, label: 'Hours', text: 'Mon–Sat: 7 AM – 7 PM  |  Sun: 8 AM – 2 PM', color: '#E63946' },
            ].map(({ icon: Icon, label, text, color }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-2xl shadow-sm"
                style={{ background: 'white', border: '1px solid #f3e8ea' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="font-bold font-[Poppins] text-gray-800 text-sm">{label}</div>
                  <div className="text-gray-500 font-[Lato] text-sm mt-1">{text}</div>
                </div>
              </div>
            ))}

            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: 220 }}>
              <iframe
                title="Berry Patch Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30379.534009038285!2d73.65!3d17.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b3e3ac0fffff%3A0x0!2sMahabaleshwar%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                allowFullScreen referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl shadow-xl"
            style={{ background: 'white', border: '1px solid #f3e8ea' }}
          >
            <h3 className="text-2xl font-black font-[Poppins] text-gray-900 mb-6">Send a Message</h3>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 px-4 py-3 rounded-xl text-sm font-semibold font-[Poppins] text-white"
                style={{ background: '#2A9D8F' }}
              >
                ✅ Message sent! We'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Priya Sharma' },
                { key: 'email', label: 'Email Address', type: 'email', placeholder: 'priya@example.com' },
                { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold font-[Poppins] text-gray-700 mb-1.5">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm font-[Lato] outline-none transition-all duration-200 focus:ring-2"
                    style={{ background: '#FFF9F5', border: '1.5px solid #e5e7eb', focusRingColor: '#E63946' }}
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold font-[Poppins] text-gray-700 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="I'd like to order strawberries..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm font-[Lato] outline-none resize-none transition-all duration-200"
                  style={{ background: '#FFF9F5', border: '1.5px solid #e5e7eb' }}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold font-[Poppins] transition-shadow hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #E63946, #c1121f)' }}
              >
                <Send size={16} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
