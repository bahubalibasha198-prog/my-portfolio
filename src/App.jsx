import React from 'react';
import { Instagram, Send, Youtube } from 'lucide-react';

export default function SocialLinks() {
  const links = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bahu_creations?igsh=NXRpNm1yd2RwejV2',
      icon: Instagram,
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-700 hover:to-pink-700'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/FDproductss',
      icon: Send,
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Bahu_Creations',
      icon: Youtube,
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:from-red-600 hover:to-red-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-md w-full space-y-6 sm:space-y-8">
        <div className="text-center animate-fade-in space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img 
                src="/profile.jpg" 
                alt="Bahubali Basha"
                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">Bahubali Basha</h1>
            <p className="text-gray-300 text-base sm:text-lg">Let's Connect</p>
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex items-center justify-between w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl
                  bg-gradient-to-r ${link.color} ${link.hoverColor}
                  transform transition-all duration-300 ease-out
                  active:scale-95 sm:hover:scale-105 hover:shadow-2xl
                  animate-slide-up
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:bg-white/30 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-semibold text-white">
                    {link.name}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-2 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}