'use client';

import React, { useState } from 'react';
import useAppStore from '../store/useAppStore';

const ShareButton = ({ 
  project = null, 
  variant = 'project', // 'project' or 'portfolio'
  size = 'md',
  showText = true,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shareResult, setShareResult] = useState(null);
  const { shareProject, sharePortfolio, trackShare } = useAppStore();

  const platforms = [
    { name: 'Twitter', icon: 'fab fa-twitter', color: 'text-blue-400', bgColor: 'hover:bg-blue-500' },
    { name: 'Facebook', icon: 'fab fa-facebook', color: 'text-blue-600', bgColor: 'hover:bg-blue-600' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', color: 'text-blue-700', bgColor: 'hover:bg-blue-700' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: 'text-green-500', bgColor: 'hover:bg-green-500' },
    { name: 'Telegram', icon: 'fab fa-telegram', color: 'text-blue-500', bgColor: 'hover:bg-blue-500' },
    { name: 'Copy Link', icon: 'fas fa-copy', color: 'text-gray-500', bgColor: 'hover:bg-gray-500' },
  ];

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const handleShare = async (platform) => {
    try {
      let result;
      if (variant === 'project' && project) {
        result = await shareProject(project, platform.toLowerCase());
        trackShare(project.title, platform);
      } else {
        result = await sharePortfolio(platform.toLowerCase());
        trackShare('Portfolio', platform);
      }
      
      setShareResult(result);
      setIsOpen(false);
      
      // Clear result message after 3 seconds
      setTimeout(() => setShareResult(null), 3000);
    } catch (error) {
      setShareResult({ success: false, message: 'Failed to share' });
      setTimeout(() => setShareResult(null), 3000);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Share Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative ${sizeClasses[size]} bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 hover:rotate-3 flex items-center justify-center cursor-pointer`}
        title={variant === 'project' ? 'Share Project' : 'Share Portfolio'}
      >
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"></div>
        
        {/* Share Icon */}
        <div className="relative z-10">
          <i className="fas fa-share-alt text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"></i>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className="absolute top-1 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
      </button>

      {/* Share Options Dropdown */}
      {isOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-50 min-w-[200px]">
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-slate-800"></div>
          
          {/* Header */}
          <div className="px-3 py-2 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {variant === 'project' ? 'Share Project' : 'Share Portfolio'}
            </h3>
          </div>
          
          {/* Platform Options */}
          <div className="py-2">
            {platforms.map((platform, index) => (
              <button
                key={platform.name}
                onClick={() => handleShare(platform.name)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 ${platform.bgColor} hover:text-white`}
              >
                <i className={`${platform.icon} ${platform.color} w-4 h-4`}></i>
                <span className="font-medium">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Success/Error Message */}
      {shareResult && (
        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap z-50 ${
          shareResult.success 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}>
          {shareResult.message}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ShareButton;
