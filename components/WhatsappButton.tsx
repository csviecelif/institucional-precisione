'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Link
        href="https://wa.me/5541984300319?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Precisione."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#128C7E] shadow-lg transition-colors hover:bg-[#0f7c70] group"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]" />
        <span className="absolute -top-1 -right-1 flex items-center justify-center h-6 px-2 rounded-full bg-[#0c5f59] text-xs font-bold text-white shadow-md transition-colors group-hover:bg-[#094b46]">
          Online
        </span>
      </Link>
    </div>
  );
}
