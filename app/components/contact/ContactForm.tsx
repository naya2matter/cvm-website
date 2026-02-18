"use client"; // Marking as a client component

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactForm: React.FC = () => {
  // Refs for form fields to apply animations
  const formRef = useRef<HTMLDivElement | null>(null);
  const inputsRef = useRef<HTMLDivElement | null>(null);

  // GSAP Animation for smooth entry
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );
    }

    if (inputsRef.current) {
      gsap.fromTo(
        inputsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 },
      );
    }
  }, []);

  return (
    <section id="contact" className="bg-[#EEEEEE] py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E1E1E] mb-2">Book a Free Consultation</h2>
          <p className="text-[#1E1E1E] text-lg">A conversation to clarify what you actually need next.</p>
        </div>

        <div ref={formRef} className="max-w-[900px] mx-auto bg-[#EEEEEE] p-8 md:p-12  ">
          <form className="space-y-6">
            <div ref={inputsRef} className="space-y-6">
              {/* Full Name */}
              <div className="bg-[#EEEEEE] border border-[#F68620] rounded-[15px] px-4 py-3">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent  outline-none   text-[#1E1E1E] placeholder-[#1E1E1E]/70" />
              </div>

              {/* Email */}
              <div className="bg-[#EEEEEE] border border-[#F68620] rounded-[15px] px-4 py-3">
                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none  rounded-[15px]  text-[#1E1E1E] placeholder-[#1E1E1E]/70" />
              </div>

              {/* Phone Number */}
              <div className="bg-[#EEEEEE] border border-[#F68620] rounded-[15px] px-4 py-3">
                <input type="tel" placeholder="Phone Number" className="w-full bg-transparent outline-none  rounded-[15px]  text-[#1E1E1E] placeholder-[#1E1E1E]/70" />
              </div>

              {/* Project Details */}
              <div className="bg-[#EEEEEE] border border-[#F68620] rounded-[15px] px-4 py-3">
                <textarea placeholder="Project Details" rows={4} className="w-full bg-transparent outline-none  text-[#1E1E1E] placeholder-[#1E1E1E]/70 resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F68620] text-[#1E1E1E] font-bold py-3 rounded-[10px] hover:bg-[#F68F20] hover:text-white transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
