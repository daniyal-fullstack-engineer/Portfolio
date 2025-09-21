'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import useCustomUltraSmoothScroll from "../hooks/useCustomUltraSmoothScroll";

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

export default function Testimonials() {
  const { scrollToElement } = useCustomUltraSmoothScroll();
  const [displayedTestimonials, setDisplayedTestimonials] = useState(testimonials.slice(0, 6));
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive testimonials display
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      
      if (mobile) {
        // Show 3 testimonials on mobile
        setDisplayedTestimonials(testimonials.slice(0, 3));
      } else {
        // Show 6 testimonials on desktop
        setDisplayedTestimonials(testimonials.slice(0, 6));
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
      id="testimonials" 
      data-scroll-index={5}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-4 md:right-20 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-4 md:left-20 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg rotate-12 opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Testimonial Icons */}
        <div className="absolute top-32 right-8 md:right-32 text-blue-400/30 text-xl md:text-2xl animate-bounce-slow">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="absolute top-64 left-8 md:left-32 text-purple-400/30 text-lg md:text-xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-star"></i>
        </div>
        <div className="absolute bottom-64 right-8 md:right-40 text-indigo-400/30 text-xl md:text-2xl animate-bounce-slow" style={{animationDelay: '1s'}}>
          <i className="fas fa-heart"></i>
        </div>
        <div className="absolute bottom-32 left-8 md:left-40 text-cyan-400/30 text-lg md:text-xl animate-bounce-slow" style={{animationDelay: '1.5s'}}>
          <i className="fas fa-thumbs-up"></i>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <i className="fas fa-quote-left text-blue-600 dark:text-blue-400 animate-pulse"></i>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 fade-in-up stagger-1">
            What Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid gap-6 sm:gap-8 max-w-7xl mx-auto ${
          isMobile 
            ? 'grid-cols-1 sm:grid-cols-2' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {displayedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300 dark:hover:border-blue-600 group"
            >
                {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <i className="fas fa-quote-right text-3xl text-blue-500"></i>
                </div>
                
                  {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-sm group-hover:text-yellow-500 transition-colors duration-300"></i>
                    ))}
                  </div>
                  
              {/* Testimonial Text */}
              <blockquote className="mb-6 text-center">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </blockquote>
                  
                  {/* Client Info */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 fade-in-scale stagger-1">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-3 border-blue-200 dark:border-blue-700 shadow-lg">
                    <Image 
                      src={testimonial.img} 
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 640px) 56px, 64px"
                      onError={(e) => {
                        console.log('Image failed to load:', testimonial.img);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', testimonial.img);
                      }}
                    />
                    {/* Fallback initial */}
                    <span className="text-white font-bold text-lg sm:text-xl relative z-10">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-check text-white text-xs"></i>
                      </div>
                    </div>
                <div className="fade-in-up stagger-2">
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {testimonial.name}
                      </h4>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {testimonial.country}
                      </p>
                    </div>
                  </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
                </div>
                
        {/* View All Testimonials Button Section */}
        <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-200/20 dark:border-blue-400/20 rounded-full animate-spin-slow"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-8 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
              
              {/* Animated Quote Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce-slow transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-xl group-hover:shadow-blue-500/25">
                <i className="fas fa-quote-left text-white text-2xl animate-pulse-slow"></i>
              </div>

              {/* Animated Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Read All <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent animate-pulse">Client Reviews</span>
              </h3>
              
              {/* Animated Description */}
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                Discover all {testimonials.length} client testimonials with detailed reviews, project information, and ratings. Currently showing {displayedTestimonials.length} of {testimonials.length} reviews. See what clients from around the world have to say about working with me.
              </p>
              
              {/* Animated Button */}
              <Link href="/all-testimonials" className="inline-block group/btn relative z-20">
            <Button
                  variant="primary"
                  size="lg"
                  icon="fas fa-arrow-right"
                  className="group hover:animate-pulse-slow relative z-30"
                >
                  View All Testimonials
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-slow">
                    <i className="fas fa-external-link-alt"></i>
                  </span>
            </Button>
              </Link>
              
              {/* Animated Features */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-slate-500 dark:text-slate-400 relative z-20">
                <div className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 animate-bounce-slow">
                  <i className="fas fa-check-circle text-green-500 animate-pulse-slow"></i>
                  <span>All {testimonials.length} Reviews</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                  <i className="fas fa-star text-blue-500 animate-pulse-slow"></i>
                  <span>5-Star Ratings</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 animate-bounce-slow" style={{animationDelay: '1s'}}>
                  <i className="fas fa-globe text-purple-500 animate-pulse-slow"></i>
                  <span>Global Clients</span>
          </div>
        </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            variant="primary"
            size="lg"
            icon="fas fa-rocket"
            onClick={() => scrollToElement(document.getElementById('contact'), -80)}
          >
            Ready to work together?
          </Button>
        </div>
      </div>
    </section>
  );
}
