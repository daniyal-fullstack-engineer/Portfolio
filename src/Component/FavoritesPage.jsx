'use client';

import React from 'react';
import Link from 'next/link';
import useAppStore from '../store/useAppStore';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import Button from './Button';

const FavoritesPage = () => {
  const { favoriteProjects, clearFavorites } = useAppStore();

  if (favoriteProjects.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 dark:bg-slate-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Empty State */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <i className="fas fa-heart text-4xl text-blue-500 dark:text-blue-400"></i>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              No <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Favorites</span> Yet
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Start exploring projects and add them to your favorites to see them here!
            </p>
            
            <Link href="/">
              <Button size="lg" className="btn-primary">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 dark:border-pink-500/20 mb-6">
            <i className="fas fa-heart text-red-500 dark:text-red-400 text-sm"></i>
            <span className="text-sm font-medium text-red-600 dark:text-red-400">Favorites</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 dark:from-red-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">Favorite</span> Projects
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your curated collection of amazing projects. {favoriteProjects.length} project{favoriteProjects.length !== 1 ? 's' : ''} saved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <ShareButton variant="portfolio" size="md" />
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Share your favorites
            </span>
          </div>
          
          <Button 
            onClick={clearFavorites}
            size="sm"
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            <i className="fas fa-trash mr-2"></i>
            Clear All
          </Button>
        </div>

        {/* Favorites Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {favoriteProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white ${
                    project.status === 'Live' ? 'bg-green-500' : 
                    project.status === 'Development' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    {project.status}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500">
                    <i className="fas fa-tag"></i>
                    {project.category}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShareButton project={project} size="sm" />
                  <FavoriteButton project={project} size="sm" />
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 text-sm"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Live
                  </a>
                  
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Portfolio */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" className="btn-primary">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
