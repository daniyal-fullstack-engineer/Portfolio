'use client';

import React from 'react';
import useAppStore from '../store/useAppStore';

const FavoriteButton = ({ 
  project, 
  size = 'md',
  showText = false,
  className = ''
}) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useAppStore();
  const isFavorited = isFavorite(project.title);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(project.title);
    } else {
      addToFavorites(project);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`group relative ${sizeClasses[size]} ${
        isFavorited 
          ? 'bg-gradient-to-r from-red-500 to-pink-500' 
          : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-red-500 hover:to-pink-500'
      } rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-110 hover:rotate-3 flex items-center justify-center cursor-pointer ${className}`}
      title={isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"></div>
      
      {/* Heart Icon */}
      <div className="relative z-10">
        <i className={`${
          isFavorited ? 'fas fa-heart' : 'far fa-heart'
        } text-white transition-all duration-300 group-hover:scale-110 ${
          isFavorited ? 'animate-pulse' : ''
        }`}></i>
      </div>

      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-xl border-2 border-transparent ${
        isFavorited 
          ? 'bg-gradient-to-r from-red-400 to-pink-400' 
          : 'bg-gradient-to-r from-gray-400 to-gray-500 group-hover:from-red-400 group-hover:to-pink-400'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        <div className="absolute top-1 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-xl ${
        isFavorited 
          ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20' 
          : 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 group-hover:from-red-500/20 group-hover:to-pink-500/20'
      } blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150`}></div>

      {/* Text (if enabled) */}
      {showText && (
        <span className="ml-2 text-sm font-medium text-white">
          {isFavorited ? 'Favorited' : 'Add to Favorites'}
        </span>
      )}
    </button>
  );
};

export default FavoriteButton;
