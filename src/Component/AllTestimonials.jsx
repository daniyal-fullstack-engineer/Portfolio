import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from './SEOHead';
import ImageWithSkeleton from './ImageWithSkeleton';

// Import the same testimonials data
const testimonials = [
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d31612952c6eca7780ba29c670ecc9d8-1729845263690/39ef4fad-6a51-4223-abf5-6d19256880bd.jpg",
    name: "Valantism",
    country: "Greece",
    text: "Very good experience. Professional work and timely delivery. Highly satisfied with the results.",
    rating: 5,
    project: "E-commerce Website"
  },
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5f50a36de4ffcbddb7caec31d603f03b-1704065713606/5c4455ee-6fe6-4815-b5b7-30649b148a48.png",
    name: "Moemia",
    country: "United Kingdom",
    text: "Thanks for your help in creating the React Native front end, connecting it with Firebase, and handling user authentication and league creation. Great work!",
    rating: 5,
    project: "Mobile App Development"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/1.png",
    name: "Muzamil Pervaize",
    country: "United States",
    text: "Understood the task perfectly and delivered excellent work. Very happy with the outcome!",
    rating: 5,
    project: "Web Application"
  },
  {
    img: "https://i.postimg.cc/wMDzgx0C/2.png",
    name: "Xerophilic",
    country: "Australia 🇦🇺",
    text: "Fast service and exceeded expectations. Very satisfied with the results!",
    rating: 5,
    project: "Dashboard Development"
  },
  {
    img: "https://i.postimg.cc/7YyDX7Lw/3.png",
    name: "Habib786",
    country: "Spain 🇪🇸",
    text: "Great teaching style and good communication. Really satisfied with the overall experience.",
    rating: 5,
    project: "Training & Consultation"
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Johnson",
    country: "Canada 🇨🇦",
    text: "Outstanding React development work. The code quality and documentation were exceptional. Will definitely work together again!",
    rating: 5,
    project: "React Dashboard"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Emily Chen",
    country: "Singapore 🇸🇬",
    text: "Professional, responsive, and delivered exactly what was promised. The mobile app exceeded our expectations in every way.",
    rating: 5,
    project: "React Native App"
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "David Rodriguez",
    country: "Mexico 🇲🇽",
    text: "Excellent full-stack developer. Great communication throughout the project and delivered high-quality results on time.",
    rating: 5,
    project: "Full-Stack Web App"
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    country: "Germany 🇩🇪",
    text: "Amazing work on our e-commerce platform. The user experience and performance optimizations were top-notch.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Michael Brown",
    country: "United Kingdom 🇬🇧",
    text: "Highly skilled developer with great attention to detail. The project was completed ahead of schedule with excellent results.",
    rating: 5,
    project: "Business Management System"
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Jennifer Lee",
    country: "South Korea 🇰🇷",
    text: "Outstanding Node.js backend development. Clean code, proper documentation, and excellent performance optimization.",
    rating: 5,
    project: "API Development"
  },
  {
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    name: "Alex Kumar",
    country: "India 🇮🇳",
    text: "Professional, reliable, and technically excellent. Delivered a complex project with multiple integrations flawlessly.",
    rating: 5,
    project: "Integration Platform"
  }
];

export default function AllTestimonials() {
  // Unique scroll implementation for AllTestimonials
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Set unique scroll behavior for this page only
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add page-specific class to body
    document.body.classList.add('all-testimonials-active');
    
    // Clean scroll event handlers
    const handleScroll = (e) => {
      // Prevent any scroll conflicts
      e.stopPropagation();
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      document.body.classList.remove('all-testimonials-active');
      window.removeEventListener('scroll', handleScroll);
      
      // Force scroll to top when leaving the page
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
  }, []);

  return (
    <>
      <SEOHead 
        title="Client Testimonials & Reviews - M Daniyal Portfolio"
        description="Read authentic client testimonials and reviews from satisfied customers who have worked with M Daniyal on web development, mobile app development, and full-stack projects. 5-star ratings from clients worldwide."
        keywords="client testimonials, customer reviews, web developer reviews, mobile app developer feedback, M Daniyal reviews, satisfied clients, 5-star ratings, development testimonials"
        url="https://daniyal-dev-portfolio.vercel.app/all-testimonials"
      />
      <div className="all-testimonials-page min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden" style={{
        scrollBehavior: 'smooth',
        overflowX: 'hidden'
      }}>
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 dark:from-purple-500/30 dark:to-indigo-500/30 rounded-lg rotate-45 animate-float opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 dark:from-indigo-500/30 dark:to-cyan-500/30 rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/30 dark:to-blue-500/30 rounded-lg rotate-12 animate-float opacity-60" style={{animationDelay: '3s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-400/20 dark:to-indigo-400/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 dark:from-indigo-400/20 dark:to-cyan-400/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Review Icons with Enhanced Movement */}
        <div className="absolute top-32 right-32 text-blue-400/40 dark:text-blue-300/50 text-2xl animate-bounce-slow hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="absolute top-64 left-32 text-purple-400/40 dark:text-purple-300/50 text-xl animate-bounce-slow hover:text-purple-500 dark:hover:text-purple-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-star"></i>
        </div>
        <div className="absolute bottom-64 right-40 text-indigo-400/40 dark:text-indigo-300/50 text-2xl animate-bounce-slow hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
          <i className="fas fa-heart"></i>
        </div>
        <div className="absolute bottom-32 left-40 text-cyan-400/40 dark:text-cyan-300/50 text-xl animate-bounce-slow hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}>
          <i className="fas fa-thumbs-up"></i>
        </div>
        <div className="absolute top-1/2 right-1/4 text-green-400/40 dark:text-green-300/50 text-xl animate-bounce-slow hover:text-green-500 dark:hover:text-green-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '2s'}}>
          <i className="fas fa-globe"></i>
        </div>
        <div className="absolute top-1/3 left-1/4 text-orange-400/40 dark:text-orange-300/50 text-lg animate-bounce-slow hover:text-orange-500 dark:hover:text-orange-400 hover:scale-125 transition-all duration-300 cursor-pointer" style={{animationDelay: '2.5s'}}>
          <i className="fas fa-user-check"></i>
        </div>

        {/* Additional Floating Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-200/10 dark:border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/60 dark:bg-blue-300/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400/60 dark:bg-purple-300/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-cyan-400/60 dark:bg-cyan-300/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-slate-300/30 dark:border-slate-600/30 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 dark:bg-slate-900 shadow-lg border-b border-slate-700 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-300 dark:text-slate-300 hover:text-blue-400 dark:hover:text-blue-400"
            >
              <i className="fas fa-arrow-left"></i>
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <span className="font-bold text-white dark:text-white">M Daniyal</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-700/50 dark:border-blue-700/50 mb-6">
            <i className="fas fa-quote-left text-blue-400 dark:text-blue-400"></i>
            <span className="text-sm font-medium text-blue-300 dark:text-blue-300">Client Reviews</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-6">
            All Client <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Testimonials</span>
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of {testimonials.length} client reviews showcasing successful projects and satisfied customers from around the world.
          </p>
        </div>
      </section>


      {/* Testimonials Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-slate-800 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700 dark:border-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                  <div className="p-6">
                    {/* Header with Stars and Quote */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                        ))}
                      </div>
                      <div className="opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <i className="fas fa-quote-right text-blue-500 text-2xl"></i>
                      </div>
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="mb-6">
                      <p className="text-slate-300 dark:text-slate-300 leading-relaxed italic text-sm">
                        "{testimonial.text}"
                      </p>
                    </blockquote>
                    
                    {/* Project Info */}
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-blue-900/30 dark:bg-blue-900/30 text-blue-300 dark:text-blue-300 text-xs font-medium rounded-full">
                        {testimonial.project}
                      </span>
                    </div>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <ImageWithSkeleton 
                          src={testimonial.img} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-700 shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300"
                          skeletonClassName="w-12 h-12 rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border border-white dark:border-slate-800">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white dark:text-white group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-400 dark:text-slate-400 text-sm group-hover:text-slate-300 dark:group-hover:text-slate-300 transition-colors duration-300">
                          {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Portfolio Button */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800 dark:bg-slate-800 rounded-2xl p-8 border border-slate-700 dark:border-slate-700 shadow-lg">
            <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
              Back to Featured Testimonials
            </h3>
            <p className="text-slate-300 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Return to the main testimonials section to see the curated selection of client reviews.
            </p>
            <Link to="/">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                Back to Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
