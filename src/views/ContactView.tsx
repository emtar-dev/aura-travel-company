import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, Shield, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Maldives',
    travelDates: '',
    travelersCount: 2,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.travelDates.trim()) newErrors.travelDates = 'Travel window is required';
    if (!formData.message.trim()) newErrors.message = 'Please share a brief note about your journey desires';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div id="contact-view" className="pt-28 sm:pt-36 pb-24 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
          Personal Travel Concierge
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717]">
          Let's plan something unforgettable.
        </h1>
        <p className="text-sm font-light text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
          Whether you have a specific itinerary in mind or wish to begin with a blank canvas, our senior curators are ready to bring your vision to life.
        </p>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#D8CFC1] p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div id="contact-success-state" className="py-12 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#596056] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717]">
                    Thank you. Your travel inquiry has been received.
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-[#6F6B63] max-w-md mx-auto leading-relaxed">
                    An AURA Private Travel Specialist will review your destination preferences and connect with you within 24 hours to begin designing your bespoke journey.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E1D6] max-w-md mx-auto text-left bg-[#F7F5F0] p-4 text-xs space-y-1">
                  <p className="font-semibold text-[#171717]">Inquiry Summary:</p>
                  <p className="text-[#6F6B63]">Traveler: {formData.name} ({formData.email})</p>
                  <p className="text-[#6F6B63]">Destination: {formData.destination}</p>
                  <p className="text-[#6F6B63]">Travel Dates: {formData.travelDates}</p>
                  <p className="text-[#6F6B63]">Guests: {formData.travelersCount}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      destination: 'Maldives',
                      travelDates: '',
                      travelersCount: 2,
                      message: '',
                    });
                  }}
                  className="text-xs uppercase tracking-wider text-[#171717] underline hover:text-[#596056]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#E8E1D6] pb-4">
                  <h3 className="font-serif text-2xl text-[#171717]">
                    Bespoke Journey Inquiry
                  </h3>
                  <p className="text-xs text-[#6F6B63] mt-1 font-light">
                    Please provide your travel parameters and preferences below.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Victoria Sterling"
                      className={`w-full bg-[#F7F5F0] border px-4 py-3 text-xs text-[#171717] focus:outline-none ${
                        errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-[#D8CFC1] focus:border-[#171717]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. victoria@domain.com"
                      className={`w-full bg-[#F7F5F0] border px-4 py-3 text-xs text-[#171717] focus:outline-none ${
                        errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-[#D8CFC1] focus:border-[#171717]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-[#F7F5F0] border px-4 py-3 text-xs text-[#171717] focus:outline-none ${
                        errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-[#D8CFC1] focus:border-[#171717]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                      Destination of Interest
                    </label>
                    <select
                      id="contact-destination-select"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#D8CFC1] px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.country})
                        </option>
                      ))}
                      <option value="Multi-Destination">Multi-Destination / Undecided</option>
                    </select>
                  </div>
                </div>

                {/* Dates & Travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                      Estimated Travel Dates *
                    </label>
                    <input
                      type="text"
                      id="contact-dates-input"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      placeholder="e.g. October 15 – 25, 2026"
                      className={`w-full bg-[#F7F5F0] border px-4 py-3 text-xs text-[#171717] focus:outline-none ${
                        errors.travelDates ? 'border-rose-500 bg-rose-50/20' : 'border-[#D8CFC1] focus:border-[#171717]'
                      }`}
                    />
                    {errors.travelDates && <p className="text-[11px] text-rose-500 mt-1">{errors.travelDates}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                      Number of Travelers
                    </label>
                    <select
                      id="contact-travelers-select"
                      value={formData.travelersCount}
                      onChange={(e) => setFormData({ ...formData, travelersCount: parseInt(e.target.value) })}
                      className="w-full bg-[#F7F5F0] border border-[#D8CFC1] px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                    >
                      <option value={1}>1 Traveler (Solo)</option>
                      <option value={2}>2 Travelers (Couple / Duo)</option>
                      <option value={3}>3 Travelers</option>
                      <option value={4}>4 Travelers</option>
                      <option value={6}>5+ Travelers (Private Group / Family)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171717] mb-1.5">
                    Your Travel Desires & Special Requests *
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the mood, pacing, preferred hotel style, celebrations, or specific excursions you wish to experience..."
                    className={`w-full bg-[#F7F5F0] border px-4 py-3 text-xs text-[#171717] focus:outline-none ${
                      errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-[#D8CFC1] focus:border-[#171717]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium py-4 hover:bg-[#333333] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Send Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Concierge Contacts & Assurances (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#171717] text-white p-8 space-y-6 border border-[#333333]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8CFC1] font-semibold block">
                Direct Contact
              </span>
              <h3 className="font-serif text-2xl text-white">
                Private Client Concierge
              </h3>
              <p className="text-xs font-light text-[#E8E1D6]/80 leading-relaxed">
                For time-sensitive private charter inquiries or direct phone consultations, our senior client advisory team is available worldwide.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#333333] text-xs text-[#E8E1D6]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center shrink-0 text-[#D8CFC1]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#6F6B63]">Email Concierge</span>
                    <span className="font-mono text-sm text-white">curator@aura-travel.portfolio</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center shrink-0 text-[#D8CFC1]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#6F6B63]">Client Advisory</span>
                    <span className="font-mono text-sm text-white">+1 (800) 489-AURA</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center shrink-0 text-[#D8CFC1]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#6F6B63]">Concierge Hours</span>
                    <span>Monday – Saturday • 24/7 On-Trip Care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Assurances Card */}
            <div className="bg-white border border-[#E8E1D6] p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#596056]">
                <Shield className="w-4 h-4" />
                <h4 className="font-serif text-sm text-[#171717] font-semibold">
                  Discretion & Privacy Guaranteed
                </h4>
              </div>
              <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                All client consultations, travel schedules, and personal requests are managed under strict confidentiality. We never disclose client identities or share data with third parties.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
