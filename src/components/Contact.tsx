import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage(
      'Thank you for your message! I will get back to you soon.'
    );
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-24 pb-20 flex flex-col px-4 md:px-8 lg:px-16 relative md:max-h-screen md:overflow-hidden"
    >
      <div className="flex-1 min-h-0 flex flex-col items-start md:items-center min-w-0">
        <div className="max-w-6xl w-full min-h-0 flex flex-col flex-1 py-6">
          <h2
            className="font-bold text-custom-yellow mb-4 md:mb-8 text-left md:text-center flex-shrink-0"
            style={{ fontSize: 'clamp(1.5rem, 5vmin, 3.75rem)' }}
          >
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 min-h-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-custom-yellow mb-6">
                Let's Work Together
              </h3>
              <p className="text-lg text-custom-green mb-8 leading-relaxed">
                If you're building something meaningful and need a developer who
                understands both frontend experience and backend architecture —
                let's connect.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <EnvelopeIcon className="w-6 h-6 text-custom-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-custom-green font-semibold">Email</p>
                    <a
                      href="mailto:ahmed.alaa.hamdy.2000@gmail.com"
                      className="text-custom-green/80 hover:text-custom-yellow transition-colors"
                    >
                      ahmed.alaa.hamdy.2000@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <PhoneIcon className="w-6 h-6 text-custom-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-custom-green font-semibold">Phone</p>
                    <a
                      href="tel:+201023177483"
                      className="text-custom-green/80 hover:text-custom-yellow transition-colors"
                    >
                      +20 102 317 7483
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPinIcon className="w-6 h-6 text-custom-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-custom-green font-semibold">Location</p>
                    <p className="text-custom-green/80">Cairo, Egypt</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 flex gap-6">
                <motion.a
                  href="https://www.linkedin.com/in/ahmed-alaa-mahmoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-custom-green/20 border-2 border-custom-green rounded-lg flex items-center justify-center hover:bg-custom-green hover:text-custom-dark transition-all"
                >
                  <span className="text-custom-green hover:text-custom-dark font-bold">
                    in
                  </span>
                </motion.a>

                <motion.a
                  href="https://github.com/AhmedAlaa50"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-custom-green/20 border-2 border-custom-green rounded-lg flex items-center justify-center hover:bg-custom-green hover:text-custom-dark transition-all"
                >
                  <span className="text-custom-green hover:text-custom-dark font-bold">
                    gh
                  </span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="bg-custom-dark border-2 border-custom-green rounded-lg p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-custom-green font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-custom-dark border-2 border-custom-green rounded-lg text-custom-green focus:outline-none focus:border-custom-yellow transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-custom-green font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-custom-dark border-2 border-custom-green rounded-lg text-custom-green focus:outline-none focus:border-custom-yellow transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-custom-green font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-custom-dark border-2 border-custom-green rounded-lg text-custom-green focus:outline-none focus:border-custom-yellow transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-custom-green text-custom-dark font-bold py-3 px-6 rounded-lg hover:bg-custom-yellow transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <PaperAirplaneIcon className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-custom-green text-center"
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
