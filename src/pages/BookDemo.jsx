import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock,
  Database,
  CreditCard,
  Shield,
  Check,
  ArrowLeft,
  Send,
  CheckCircle2,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';

const trustPoints = [
  { icon: Clock, text: '15-minute personalized demo' },
  { icon: Database, text: 'See your data analyzed live' },
  { icon: CreditCard, text: 'No credit card required' },
  { icon: Shield, text: 'Your data stays private' },
];

const dataSourceOptions = [
  'QuickBooks',
  'Notion',
  'Google Drive',
  'Spreadsheets / CSV',
  'Other',
];

const companySizeOptions = [
  { value: '', label: 'Select company size' },
  { value: '1-10', label: '1–10 employees' },
  { value: '11-50', label: '11–50 employees' },
  { value: '51-200', label: '51–200 employees' },
  { value: '200+', label: '200+ employees' },
];

const initialFormState = {
  fullName: '',
  email: '',
  company: '',
  role: '',
  companySize: '',
  dataSources: [],
  message: '',
};

export default function BookDemo() {
  const { theme } = useTheme();
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const dark = theme === 'dark';

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function handleCheckbox(source) {
    setForm((prev) => ({
      ...prev,
      dataSources: prev.dataSources.includes(source)
        ? prev.dataSources.filter((s) => s !== source)
        : [...prev.dataSources, source],
    }));
  }

  function validate() {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email';
    if (!form.company.trim()) newErrors.company = 'Company name is required';
    if (!form.role.trim()) newErrors.role = 'Role is required';
    if (!form.companySize) newErrors.companySize = 'Please select a company size';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Wire up to a real endpoint (Formspree, API, etc.)
    // Example: fetch('/api/book-demo', { method: 'POST', body: JSON.stringify(form) })
    console.log('Demo booking submitted:', form);
    setSubmitted(true);
  }

  const inputBase = `w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 border ${
    dark
      ? 'bg-[#111] border-[#262626] text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-[#0f0f0f]'
      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:bg-white'
  }`;

  const labelClass = `block text-sm font-medium mb-1.5 ${
    dark ? 'text-gray-300' : 'text-slate-700'
  }`;

  const errorClass = 'text-xs text-red-400 mt-1';

  return (
    <section
      className={`min-h-screen pt-28 pb-24 ${
        dark ? 'bg-[#0a0a0a]' : 'bg-white'
      }`}
    >
      <div className="section-container">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              dark
                ? 'text-gray-400 hover:text-white'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className={`text-4xl md:text-5xl font-semibold leading-tight mb-4 ${
                dark ? 'text-white' : 'text-slate-900'
              }`}
            >
              See Seyvin Analyze{' '}
              <span
                className={`font-serif italic ${
                  dark ? 'text-gray-400' : 'text-slate-500'
                }`}
              >
                Your Data
              </span>
            </h1>

            <p
              className={`text-lg mb-8 max-w-lg ${
                dark ? 'text-gray-400' : 'text-slate-600'
              }`}
            >
              In 15 minutes, we'll connect to your data source and show you how
              Seyvin generates dashboards, answers questions, and produces
              shareable updates — from your actual business data.
            </p>

            {/* What to expect */}
            <div className="mb-8">
              <h3
                className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                  dark ? 'text-gray-500' : 'text-slate-500'
                }`}
              >
                What to expect
              </h3>
              <ul className="space-y-3">
                {[
                  'We connect to a data source you choose (or use sample data)',
                  'You see dashboards and KPIs generated automatically',
                  'Ask questions in plain English — watch the AI answer live',
                  'Walk away with a clear picture of what Seyvin can do for your team',
                ].map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm ${
                      dark ? 'text-gray-300' : 'text-slate-700'
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        dark ? 'text-cyan-400' : 'text-cyan-600'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-4">
              {trustPoints.map((point) => (
                <div
                  key={point.text}
                  className={`flex items-center gap-2 text-sm ${
                    dark ? 'text-gray-500' : 'text-slate-500'
                  }`}
                >
                  <point.icon
                    className={`w-4 h-4 ${
                      dark ? 'text-cyan-400/60' : 'text-cyan-600/60'
                    }`}
                  />
                  {point.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card hover={false} padding="p-0" className="overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10 text-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${
                        dark ? 'bg-cyan-500/10' : 'bg-cyan-50'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-8 h-8 ${
                          dark ? 'text-cyan-400' : 'text-cyan-600'
                        }`}
                      />
                    </div>
                    <h2
                      className={`text-2xl font-semibold mb-3 ${
                        dark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Request received!
                    </h2>
                    <p
                      className={`mb-6 ${
                        dark ? 'text-gray-400' : 'text-slate-600'
                      }`}
                    >
                      We'll review your details and reach out within one business
                      day to schedule your personalized demo.
                    </p>
                    <Link to="/">
                      <Button variant="secondary" size="md">
                        <ArrowLeft className="w-4 h-4" />
                        Back to home
                      </Button>
                    </Link>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="p-6 md:p-8 space-y-5"
                    noValidate
                  >
                    <div>
                      <h2
                        className={`text-xl font-semibold mb-1 ${
                          dark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        Book your demo
                      </h2>
                      <p
                        className={`text-sm ${
                          dark ? 'text-gray-500' : 'text-slate-500'
                        }`}
                      >
                        Fill in a few details so we can tailor the session to you.
                      </p>
                    </div>

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className={labelClass}>
                          Full name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Jane Smith"
                          value={form.fullName}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.fullName && (
                          <p className={errorClass}>{errors.fullName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Work email <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.email && (
                          <p className={errorClass}>{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Company + Role row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className={labelClass}>
                          Company name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Acme Inc."
                          value={form.company}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.company && (
                          <p className={errorClass}>{errors.company}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="role" className={labelClass}>
                          Your role / title{' '}
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="role"
                          name="role"
                          type="text"
                          placeholder="COO, Head of Finance, etc."
                          value={form.role}
                          onChange={handleChange}
                          className={inputBase}
                        />
                        {errors.role && (
                          <p className={errorClass}>{errors.role}</p>
                        )}
                      </div>
                    </div>

                    {/* Company size */}
                    <div>
                      <label htmlFor="companySize" className={labelClass}>
                        Company size <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={form.companySize}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none cursor-pointer`}
                      >
                        {companySizeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.companySize && (
                        <p className={errorClass}>{errors.companySize}</p>
                      )}
                    </div>

                    {/* Data sources */}
                    <div>
                      <label className={labelClass}>
                        Primary data sources{' '}
                        <span className={dark ? 'text-gray-600' : 'text-slate-400'}>
                          (optional)
                        </span>
                      </label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {dataSourceOptions.map((source) => {
                          const isActive = form.dataSources.includes(source);
                          return (
                            <button
                              key={source}
                              type="button"
                              onClick={() => handleCheckbox(source)}
                              className={`px-3 py-1.5 rounded-full text-sm border transition-colors duration-200 ${
                                isActive
                                  ? dark
                                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400'
                                    : 'bg-cyan-50 border-cyan-300 text-cyan-700'
                                  : dark
                                    ? 'bg-[#111] border-[#262626] text-gray-400 hover:border-[#3a3a3a]'
                                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                              }`}
                            >
                              {isActive && (
                                <Check className="w-3 h-3 inline mr-1" />
                              )}
                              {source}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={labelClass}>
                        What are you hoping Seyvin helps with?{' '}
                        <span className={dark ? 'text-gray-600' : 'text-slate-400'}>
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="e.g. We spend 10+ hours/week on manual reporting and need a faster way to get board-ready updates..."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      <Send className="w-4 h-4" />
                      Request your demo
                    </Button>

                    <p
                      className={`text-xs text-center ${
                        dark ? 'text-gray-600' : 'text-slate-400'
                      }`}
                    >
                      We'll reach out within one business day. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
