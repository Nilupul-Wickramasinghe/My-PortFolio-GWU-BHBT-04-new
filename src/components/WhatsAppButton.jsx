import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '94701308648'; // Format: country code + number without + or spaces
  const message = 'Hello! I found your portfolio and would like to connect.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 dark:bg-green-600 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </button>
  );
}
