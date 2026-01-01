import React from 'react';
import { Instagram, MessageCircle, Linkedin, Github } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="mt-8 flex items-center justify-center gap-6">
      <a href="https://www.instagram.com/itz_nilupul_wick?igsh=NXgyZHlrZTgzODM5&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-pink-500 hover:opacity-80">
        <Instagram className="w-6 h-6" />
      </a>

      <a href="https://wa.me/94701308648" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-green-500 hover:opacity-80 flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        <span className="text-white"></span>
      </a>

      <a href="https://www.linkedin.com/in/nilupul-piyumantha-b8604334" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-blue-500 hover:opacity-80">
        <Linkedin className="w-6 h-6" />
      </a>

      <a href="https://github.com/Nilupul-Wickramasinghe" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-200 hover:opacity-80">
        <Github className="w-6 h-6" />
      </a>
    </div>
  );
}
