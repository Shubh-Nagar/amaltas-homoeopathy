import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send, MessageSquare,
  CheckCircle2, AlertCircle, Navigation,
} from 'lucide-react';
import { T, fontDisplay } from '../../styles/tokens';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import useInView from '../../hooks/useInView';
import { CONTACT } from '../../data/navigation';

const MONO = { fontFamily: "'DM Mono', 'Courier New', monospace" };

const slide = (inView, delay = 0, dir = 'up') => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? 'translateY(0) translateX(0)'
    : dir === 'left'  ? 'translateX(-28px)'
    : dir === 'right' ? 'translateX(28px)'
    : 'translateY(28px)',
  transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s,
               transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
});

// ─── Info card ────────────────────────────────────────────────────────
const InfoCard = ({ icon: Icon, label, lines, accent = T.forest800, delay = 0, inView }) => (
  <div
    className="flex items-start gap-4 rounded-2xl p-5"
    style={{
      background: '#FFFFFF',
      border: `1px solid ${T.ink900}0C`,
      boxShadow: `0 2px 14px -4px ${T.ink900}07`,
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.72s ease ${delay}s, transform 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = `${T.gold600}30`; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = `${T.ink900}0C`; }}
  >
    <div
      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ background: `${accent}12`, border: `1.5px solid ${accent}22` }}
    >
      <Icon size={18} strokeWidth={1.9} style={{ color: accent }} />
    </div>
    <div className="min-w-0">
      <div className="text-[11px] tracking-[0.18em] uppercase font-semibold mb-1.5"
        style={{ ...MONO, color: T.muted500 }}>
        {label}
      </div>
      {lines.map((line, i) => (
        <div key={i} className="text-[15px] leading-[1.65] break-all" style={{ color: T.ink900, fontWeight: i === 0 ? 500 : 400 }}>
          {line}
        </div>
      ))}
    </div>
  </div>
);

// ─── Contact form ─────────────────────────────────────────────────────
const ContactForm = ({ inView }) => {
  const [form,   setForm]   = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent'

  const validate = () => {
    const e = {};
    if (!form.name.trim())                              e.name    = 'Full name is required.';
    if (!form.email.trim())                             e.email   = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.phone.trim())                             e.phone   = 'Phone number is required.';
    else if (!/^\d{10}$/.test(form.phone))              e.phone   = 'Enter a valid 10-digit number.';
    if (!form.subject)                                  e.subject = 'Please select a subject.';
    if (!form.message.trim())                           e.message = 'Message is required.';
    else if (form.message.length > 500)                 e.message = 'Message must be 500 characters or fewer.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value && !/^\d*$/.test(value)) return; // digits only
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');

    const subjectLabels = {
      admissions: 'Admissions / BHMS Enquiry',
      fees:       'Fees Structure',
      hospital:   'Hospital Services',
      academics:  'Academic Programmes',
      hostel:     'Hostel & Facilities',
      other:      'Other',
    };

    const text = [
      `*New Enquiry — Amaltas Institute of Homoeopathy*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Email:* ${form.email}`,
      `*Subject:* ${subjectLabels[form.subject] || form.subject}`,
      ``,
      `*Message:*`,
      form.message,
    ].join('\n');

    window.open(`https://wa.me/919685096500?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setStatus('sent');
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: 12,
    border: `1.5px solid ${errors[field] ? '#DC2626' : `${T.ink900}12`}`,
    background: errors[field] ? '#FEF2F2' : `${T.forest800}04`,
    color: T.ink900,
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    fontFamily: 'inherit',
  });

  const ErrorMsg = ({ field }) => errors[field] ? (
    <p className="mt-1.5 text-[12px] flex items-center gap-1" style={{ color: '#DC2626' }}>
      <AlertCircle size={12} strokeWidth={2} />
      {errors[field]}
    </p>
  ) : null;

  const Label = ({ children, htmlFor }) => (
    <label
      htmlFor={htmlFor}
      className="block text-[13px] font-semibold mb-1.5"
      style={{ color: T.ink900, ...MONO, letterSpacing: '0.06em' }}
    >
      {children}
    </label>
  );

  if (status === 'sent') {
    return (
      <div
        className="flex flex-col items-center justify-center text-center rounded-3xl p-12 h-full"
        style={{ background: `${T.forest800}07`, border: `1.5px solid ${T.forest800}18`, minHeight: 400 }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: `${T.forest800}14` }}
        >
          <CheckCircle2 size={32} strokeWidth={1.8} style={{ color: T.forest800 }} />
        </div>
        <h3 className="text-[22px] font-semibold mb-3" style={{ ...fontDisplay, color: T.ink900 }}>
          Message sent on WhatsApp
        </h3>
        <p className="text-[15px] leading-relaxed max-w-xs" style={{ color: T.muted500 }}>
          Your enquiry has been opened in WhatsApp. Our admissions team will get back to you shortly.
        </p>
        <button
          className="mt-8 text-[13px] font-semibold underline underline-offset-2"
          style={{ color: T.forest800, background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => { setStatus(null); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); setErrors({}); }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-24px)',
        transition: 'opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s',
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <input
            id="name" name="name" type="text"
            placeholder="Your full name"
            value={form.name} onChange={handleChange}
            style={inputStyle('name')}
            onFocus={e => { if (!errors.name) e.target.style.borderColor = T.forest800; }}
            onBlur={e =>  { if (!errors.name) e.target.style.borderColor = `${T.ink900}12`; }}
          />
          <ErrorMsg field="name" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <input
            id="phone" name="phone" type="tel"
            placeholder="10-digit mobile number"
            maxLength={10}
            value={form.phone} onChange={handleChange}
            style={inputStyle('phone')}
            onFocus={e => { if (!errors.phone) e.target.style.borderColor = T.forest800; }}
            onBlur={e =>  { if (!errors.phone) e.target.style.borderColor = `${T.ink900}12`; }}
          />
          <ErrorMsg field="phone" />
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <input
          id="email" name="email" type="email"
          placeholder="you@example.com"
          value={form.email} onChange={handleChange}
          style={inputStyle('email')}
          onFocus={e => { if (!errors.email) e.target.style.borderColor = T.forest800; }}
          onBlur={e =>  { if (!errors.email) e.target.style.borderColor = `${T.ink900}12`; }}
        />
        <ErrorMsg field="email" />
      </div>

      <div className="mb-4">
        <Label htmlFor="subject">Subject</Label>
        <select
          id="subject" name="subject"
          value={form.subject} onChange={handleChange}
          style={{ ...inputStyle('subject'), color: form.subject ? T.ink900 : T.muted500 }}
          onFocus={e => { if (!errors.subject) e.target.style.borderColor = T.forest800; }}
          onBlur={e =>  { if (!errors.subject) e.target.style.borderColor = `${T.ink900}12`; }}
        >
          <option value="" disabled>Select a topic…</option>
          <option value="admissions">Admissions / BHMS Enquiry</option>
          <option value="fees">Fees Structure</option>
          <option value="hospital">Hospital Services</option>
          <option value="academics">Academic Programmes</option>
          <option value="hostel">Hostel & Facilities</option>
          <option value="other">Other</option>
        </select>
        <ErrorMsg field="subject" />
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-1.5">
          <Label htmlFor="message">Message</Label>
          <span
            className="text-[12px]"
            style={{ color: form.message.length > 500 ? '#DC2626' : T.muted500 }}
          >
            {form.message.length}/500
          </span>
        </div>
        <textarea
          id="message" name="message"
          rows={5}
          placeholder="Write your message here…"
          value={form.message} onChange={handleChange}
          style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.7 }}
          onFocus={e => { if (!errors.message) e.target.style.borderColor = T.forest800; }}
          onBlur={e =>  { if (!errors.message) e.target.style.borderColor = `${T.ink900}12`; }}
        />
        <ErrorMsg field="message" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-200"
        style={{
          background: status === 'sending' ? `${T.forest800}88` : T.forest800,
          color: '#FFFFFF',
          border: 'none',
          cursor: status === 'sending' ? 'wait' : 'pointer',
          boxShadow: `0 6px 24px -6px ${T.forest800}40`,
        }}
        onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = T.ink900; }}
        onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.background = T.forest800; }}
      >
        <Send size={16} strokeWidth={2} />
        {status === 'sending' ? 'Opening WhatsApp…' : 'Send Message'}
      </button>

      <p className="mt-4 text-center text-[12px]" style={{ color: T.muted500 }}>
        We typically respond within 1–2 working days.
      </p>
    </form>
  );
};

// ─── Map placeholder ──────────────────────────────────────────────────
const MapBlock = ({ inView }) => (
  <div
    style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(24px)',
      transition: 'opacity 0.8s ease 0.22s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.22s',
    }}
  >
    {/* Embedded map */}
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${T.ink900}0C`, boxShadow: `0 8px 32px -8px ${T.ink900}12` }}
    >
      <iframe
        title="Amaltas Institute of Homoeopathy — Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0!2d76.05!3d22.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963172a57aaaf7d%3A0x26d7b30cd3b00226!2sAmaltas%20Homoeopathic%20Medical%20College%20%26%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="320"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* Directions card */}
    <div
      className="mt-4 rounded-2xl p-5 flex items-start gap-4"
      style={{
        background: T.forest800,
        boxShadow: `0 8px 28px -8px ${T.forest800}40`,
      }}
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${T.gold100}1A`, border: `1px solid ${T.gold100}28` }}
      >
        <Navigation size={18} strokeWidth={1.9} style={{ color: T.gold100 }} />
      </div>
      <div className="flex-1">
        <div className="text-[14px] font-semibold mb-1" style={{ color: T.cream50 }}>
          Village Bangar, Dewas–Ujjain Highway
        </div>
        <div className="text-[13px] leading-relaxed" style={{ color: `${T.cream50}88` }}>
          District Dewas, Madhya Pradesh — 455001
        </div>
        <a
          href="https://maps.google.com/?q=Amaltas+Homoeopathic+Medical+College+Dewas"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold"
          style={{ color: T.gold100, textDecoration: 'none' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          <MapPin size={13} strokeWidth={2} />
          Open in Google Maps
        </a>
      </div>
    </div>

    {/* Office hours */}
    <div
      className="mt-4 rounded-2xl p-5"
      style={{
        background: `${T.gold600}0A`,
        border: `1px solid ${T.gold600}22`,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Clock size={15} strokeWidth={2} style={{ color: T.gold700 }} />
        <span className="text-[11px] tracking-[0.18em] uppercase font-semibold" style={{ ...MONO, color: T.gold700 }}>
          Office Hours
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[14px]">
        {[
          ['Mon – Fri',   '9:00 am – 5:00 pm'],
          ['Saturday',    '9:00 am – 2:00 pm'],
          ['Sunday',      'Closed'],
        ].map(([day, hours]) => (
          <React.Fragment key={day}>
            <span style={{ color: T.ink900, fontWeight: 500 }}>{day}</span>
            <span style={{ color: T.muted500 }}>{hours}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────
export default function ContactSection() {
  const [heroRef,  heroInView]  = useInView(0.08);
  const [cardsRef, cardsInView] = useInView(0.06);
  const [formRef,  formInView]  = useInView(0.06);
  const [closeRef, closeInView] = useInView(0.08);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 400, background: T.forest800 }}
      >
        <img
          src="/campus/campus.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
            opacity: 0.14,
          }}
          draggable="false"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(145deg, ${T.forest800}F2 0%, ${T.ink900}D5 100%)`,
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}13 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        {/* Ghost icon */}
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }}>
          <MessageSquare size={240} strokeWidth={0.5} color={T.gold100} />
        </div>
        {/* Arcs */}
        <div style={{ position: 'absolute', top: -80, left: -80, width: 360, height: 360, borderRadius: '50%', border: `1px solid ${T.gold600}1A`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 260, height: 260, borderRadius: '50%', border: `1px solid ${T.gold600}10`, pointerEvents: 'none' }} />

        <Container className="relative flex flex-col items-center justify-center text-center py-20 lg:py-28">
          <div ref={heroRef}>
            <div style={slide(heroInView, 0)}>
              <Eyebrow light>Amaltas Institute of Homoeopathy</Eyebrow>
            </div>
            <h1
              className="mt-5 text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.06] tracking-tight font-semibold"
              style={{ ...fontDisplay, color: '#FFFFFF', ...slide(heroInView, 0.1) }}
            >
              Get in{' '}
              <em style={{ color: T.gold100, fontStyle: 'italic' }}>Touch</em>
            </h1>
            <p
              className="mt-5 text-[17px] leading-relaxed max-w-xl mx-auto"
              style={{ color: `${T.cream50}AA`, ...slide(heroInView, 0.2) }}
            >
              Whether you have questions about admissions, academics, hospital services,
              or campus facilities — our team is here to help.
            </p>
            <div
              className="mt-7 flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase"
              style={{ ...MONO, color: `${T.gold100}77`, ...slide(heroInView, 0.28) }}
            >
              <span>Home</span>
              <span style={{ color: T.gold600 }}>›</span>
              <span style={{ color: T.gold100 }}>Contact Us</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT INFO CARDS
      ═══════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: T.cream50 }}>
        <Container>
          <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <InfoCard
              icon={MapPin}
              label="Campus Address"
              lines={['Village Bangar, Dewas–Ujjain Hwy', 'District Dewas, MP — 455001']}
              accent={T.forest800}
              delay={0}
              inView={cardsInView}
            />
            <InfoCard
              icon={Phone}
              label="Phone"
              lines={[CONTACT.tollFree + ' (Toll-free)', CONTACT.phone]}
              accent={T.forest600}
              delay={0.08}
              inView={cardsInView}
            />
            <InfoCard
              icon={Mail}
              label="Email"
              lines={[CONTACT.email]}
              accent={T.gold700}
              delay={0.16}
              inView={cardsInView}
            />
            <InfoCard
              icon={Clock}
              label="Office Hours"
              lines={['Mon–Fri  9 am – 5 pm', 'Saturday  9 am – 2 pm']}
              accent={T.forest800}
              delay={0.24}
              inView={cardsInView}
            />
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          FORM  +  MAP
      ═══════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28"
        style={{ background: `${T.forest800}06`, borderTop: `1px solid ${T.forest800}0F`, borderBottom: `1px solid ${T.forest800}0F` }}
      >
        <Container>
          <div ref={formRef} className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left — form */}
            <div className="lg:col-span-6">
              <div style={slide(formInView, 0, 'left')}>
                <Eyebrow>Send a Message</Eyebrow>
                <h2
                  className="mt-4 text-[28px] lg:text-[36px] leading-[1.12] tracking-tight font-semibold mb-8"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Write to{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>us</em>
                </h2>
              </div>
              <ContactForm inView={formInView} />
            </div>

            {/* Right — map + info */}
            <div className="lg:col-span-6">
              <div style={slide(formInView, 0.1, 'right')}>
                <Eyebrow>Find Us</Eyebrow>
                <h2
                  className="mt-4 text-[28px] lg:text-[36px] leading-[1.12] tracking-tight font-semibold mb-8"
                  style={{ ...fontDisplay, color: T.ink900 }}
                >
                  Visit the{' '}
                  <em style={{ color: T.gold700, fontStyle: 'italic' }}>campus</em>
                </h2>
              </div>
              <MapBlock inView={formInView} />
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          IMPORTANT NOTE
      ═══════════════════════════════════════════════ */}
      <section className="py-10" style={{ background: `${T.gold600}0E`, borderBottom: `1px solid ${T.gold600}22` }}>
        <Container>
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: `${T.gold600}20`, border: `1.5px solid ${T.gold600}50` }}
            >
              <AlertCircle size={18} strokeWidth={2} style={{ color: T.gold700 }} />
            </div>
            <p className="text-[15px] leading-relaxed" style={{ color: T.ink900 }}>
              <span className="font-semibold">For admission-related queries, </span>
              please call our toll-free number{' '}
              <a
                href={`tel:${CONTACT.tollFree.replace(/-/g, '')}`}
                className="font-semibold underline underline-offset-2"
                style={{ color: T.gold700 }}
              >
                {CONTACT.tollFree}
              </a>{' '}
              or email{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold underline underline-offset-2"
                style={{ color: T.gold700 }}
              >
                {CONTACT.email}
              </a>
              {' '}— our admissions team is available during office hours.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          CLOSING CTA
      ═══════════════════════════════════════════════ */}
      <section
        ref={closeRef}
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ background: T.forest800 }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${T.gold600}12 1px, transparent 1px)`,
            backgroundSize: '42px 42px',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'absolute', bottom: -120, right: -120, width: 420, height: 420, borderRadius: '50%', border: `1px solid ${T.gold600}14`, pointerEvents: 'none' }} />

        <Container className="relative text-center">
          <div style={slide(closeInView, 0)}>
            <Eyebrow light>Begin Your Journey</Eyebrow>
          </div>
          <h2
            className="mt-5 text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.2] font-semibold max-w-2xl mx-auto"
            style={{ ...fontDisplay, color: '#FFFFFF', ...slide(closeInView, 0.1) }}
          >
            Ready to join Amaltas?{' '}
            <em style={{ color: T.gold100, fontStyle: 'italic' }}>Let's talk.</em>
          </h2>
          <p
            className="mt-5 text-[16px] leading-relaxed max-w-xl mx-auto"
            style={{ color: `${T.cream50}99`, ...slide(closeInView, 0.2) }}
          >
            Our admissions team is happy to answer any questions about the BHMS programme,
            campus life, fees, or the counselling process.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={slide(closeInView, 0.28)}
          >
            <a
              href={`tel:${CONTACT.tollFree.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200"
              style={{ background: T.gold600, color: T.ink900, textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = T.gold700; e.currentTarget.style.color = '#FFF'; }}
              onMouseLeave={e => { e.currentTarget.style.background = T.gold600; e.currentTarget.style.color = T.ink900; }}
            >
              <Phone size={15} strokeWidth={2.2} />
              Call {CONTACT.tollFree}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            >
              <Mail size={15} strokeWidth={2} />
              Email Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
