import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set, get) => ({
      // Loader state
      hasSeenLoader: false,
      setHasSeenLoader: (value) => set({ hasSeenLoader: value }),
      
      // Favorite projects
      favoriteProjects: [],
      addToFavorites: (project) => {
        const { favoriteProjects } = get();
        if (!favoriteProjects.find(p => p.title === project.title)) {
          set({ favoriteProjects: [...favoriteProjects, project] });
        }
      },
      removeFromFavorites: (projectTitle) => {
        const { favoriteProjects } = get();
        set({ 
          favoriteProjects: favoriteProjects.filter(p => p.title !== projectTitle) 
        });
      },
      isFavorite: (projectTitle) => {
        const { favoriteProjects } = get();
        return favoriteProjects.some(p => p.title === projectTitle);
      },
      clearFavorites: () => set({ favoriteProjects: [] }),
      
      // User preferences
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      
      // Portfolio view preferences
      portfolioViewMode: 'grid', // grid or list
      setPortfolioViewMode: (mode) => set({ portfolioViewMode: mode }),
      
      // Portfolio category filter
      selectedCategory: 'all',
      setSelectedCategory: (category) => set({ selectedCategory }),
      
      // Social sharing
      shareProject: async (project, platform) => {
        const url = window.location.origin;
        const projectUrl = `${url}/portfolio/${encodeURIComponent(project.title)}`;
        const text = `Check out this amazing project: ${project.title} - ${project.description}`;
        
        let shareUrl = '';
        
        switch (platform) {
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(projectUrl)}`;
            break;
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projectUrl)}`;
            break;
          case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(projectUrl)}`;
            break;
          case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + projectUrl)}`;
            break;
          case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(projectUrl)}&text=${encodeURIComponent(text)}`;
            break;
          case 'copy':
            try {
              await navigator.clipboard.writeText(projectUrl);
              return { success: true, message: 'Link copied to clipboard!' };
            } catch (err) {
              return { success: false, message: 'Failed to copy link' };
            }
          default:
            return { success: false, message: 'Invalid platform' };
        }
        
        if (shareUrl) {
          window.open(shareUrl, '_blank', 'noopener,noreferrer');
          return { success: true, message: `Shared on ${platform}` };
        }
        
        return { success: false, message: 'Failed to share' };
      },
      
      // Share entire portfolio
      sharePortfolio: async (platform) => {
        const url = window.location.origin;
        const text = 'Check out my amazing portfolio of web and mobile development projects!';
        
        let shareUrl = '';
        
        switch (platform) {
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
          case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
          case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
          case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
          case 'copy':
            try {
              await navigator.clipboard.writeText(url);
              return { success: true, message: 'Portfolio link copied to clipboard!' };
            } catch (err) {
              return { success: false, message: 'Failed to copy link' };
            }
          default:
            return { success: false, message: 'Invalid platform' };
        }
        
        if (shareUrl) {
          window.open(shareUrl, '_blank', 'noopener,noreferrer');
          return { success: true, message: `Portfolio shared on ${platform}` };
        }
        
        return { success: false, message: 'Failed to share portfolio' };
      },
      
      // Analytics tracking
      trackProjectView: (projectTitle) => {
        // You can integrate with analytics services here
        console.log(`Project viewed: ${projectTitle}`);
      },
      
      trackShare: (projectTitle, platform) => {
        // You can integrate with analytics services here
        console.log(`Project shared: ${projectTitle} on ${platform}`);
      },
    }),
    {
      name: 'portfolio-app-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage
      partialize: (state) => ({
        hasSeenLoader: state.hasSeenLoader,
        favoriteProjects: state.favoriteProjects,
        theme: state.theme,
        portfolioViewMode: state.portfolioViewMode,
        selectedCategory: state.selectedCategory,
      }), // only persist these fields
    }
  )
);

export default useAppStore;
