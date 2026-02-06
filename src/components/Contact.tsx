import { useState, FormEvent } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SITE_CONFIG } from '@/lib/constants';
import { validateEmail, sanitizeInput, trackEvent } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with your actual backend endpoint
      // Option 1: Formspree (Easiest)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: sanitizeInput(formData.name),
      //     email: sanitizeInput(formData.email),
      //     subject: sanitizeInput(formData.subject),
      //     message: sanitizeInput(formData.message),
      //   }),
      // });

      // Option 2: EmailJS
      // const response = await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: sanitizeInput(formData.name),
      //     from_email: sanitizeInput(formData.email),
      //     subject: sanitizeInput(formData.subject),
      //     message: sanitizeInput(formData.message),
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );

      // Temporary simulation (remove in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
      });

      setSubmitStatus('success');
      trackEvent('contact_form_submit', { subject: formData.subject });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Let's Talk</h2>
          <p className="section-subtitle mt-4">
            Feel free to contact me for any questions or opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                I'm currently open to new opportunities and collaborations. Whether you have a
                question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.author.email}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.author.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <div className="p-3 rounded-lg bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
                  <a
                    href={`tel:${SITE_CONFIG.author.phone}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.author.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <div className="p-3 rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {SITE_CONFIG.author.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={e => handleChange('subject', e.target.value)}
                  className={`input-field ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Your message..."
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full group">
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <FiCheck className="w-5 h-5 mr-2" />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 flex items-start gap-3">
                  <FiCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 flex items-start gap-3">
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Oops! Something went wrong. Please try again or email me directly at{' '}
                    <a
                      href={`mailto:${SITE_CONFIG.author.email}`}
                      className="underline font-medium"
                    >
                      {SITE_CONFIG.author.email}
                    </a>
                  </p>
                </div>
              )}

              {/* TODO Note */}
              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                <strong>Note:</strong> Configure form backend in Contact.tsx (Formspree/EmailJS)
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
