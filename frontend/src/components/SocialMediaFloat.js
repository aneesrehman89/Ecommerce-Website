"use client";

import WhatsAppIcon from "./icons/WhatsAppIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import YouTubeIcon from "./icons/YouTubeIcon";

export default function SocialMediaFloat() {
  return (
    <div className="fixed bottom-6 right-2 md:right-12 z-50 flex flex-col gap-3">
      <a
        href="https://www.youtube.com/@AMBoutique.Pakistan"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Visit our YouTube channel"
      >
        <YouTubeIcon width={16} height={16} className="text-white" />
      </a>

      <a
        href="https://wa.me/923219570971"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon width={16} height={16} className="text-white" />
      </a>

      <a
        href="https://www.facebook.com/amboutique.pk"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Follow us on Facebook"
      >
        <FacebookIcon width={16} height={16} className="text-white" />
      </a>

      <a
        href="https://www.instagram.com/amboutique.pk/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Follow us on Instagram"
      >
        <InstagramIcon width={16} height={16} className="text-white" />
      </a>
    </div>
  );
}
