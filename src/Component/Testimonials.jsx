import React, { useState, useEffect } from "react";
import Button from "./Button";

const testimonials = [
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d31612952c6eca7780ba29c670ecc9d8-1729845263690/39ef4fad-6a51-4223-abf5-6d19256880bd.jpg",
    name: "Valantism",
    country: "Greece",
    text: "Very good experience. Professional work and timely delivery. Highly satisfied with the results."
  },
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5f50a36de4ffcbddb7caec31d603f03b-1704065713606/5c4455ee-6fe6-4815-b5b7-30649b148a48.png",
    name: "Moemia",
    country: "United Kingdom",
    text: "Thanks for your help in creating the React Native front end, connecting it with Firebase, and handling user authentication and league creation. Great work!"
  },
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5f50a36de4ffcbddb7caec31d603f03b-1704065713606/5c4455ee-6fe6-4815-b5b7-30649b148a48.png",
    name: "Moemia",
    country: "United Kingdom",
    text: "Daniyal did a great job as a full-stack developer. Excellent professionalism, documentation, and timely delivery. Highly recommended!"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/1.png",
    name: "Muzamil Pervaize",
    country: "United States",
    text: "Understood the task perfectly and delivered excellent work. Very happy with the outcome!"
  },
  {
    img: "https://i.postimg.cc/wMDzgx0C/2.png",
    name: "Xerophilic",
    country: "Australia 🇦🇺",
    text: "Fast service and exceeded expectations. Very satisfied with the results!"
  },
  {
    img: "https://i.postimg.cc/7YyDX7Lw/3.png",
    name: "Habib786",
    country: "Spain 🇪🇸",
    text: "Great teaching style and good communication. Really satisfied with the overall experience."
  },
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative min-h-screen py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" 
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Enhanced Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div 
            className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
                {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
                  <i className="fas fa-quote-right text-4xl text-blue-500"></i>
                </div>
                
            {/* Testimonial Content */}
            <div className="text-center">
                  {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                    ))}
                  </div>
                  
              <blockquote className="mb-8">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                    </p>
                  </blockquote>
                  
                  {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="relative">
                      <img 
                    src={testimonials[currentIndex].img} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-3 border-blue-200 dark:border-blue-700 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                    <i className="fas fa-check text-white text-sm"></i>
                      </div>
                    </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-1">
                    {testimonials[currentIndex].name}
                      </h4>
                  <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
                    {testimonials[currentIndex].country}
                      </p>
                    </div>
                  </div>
                </div>
                
            {/* Navigation Arrows */}
            <Button
              onClick={prevTestimonial}
              variant="secondary"
              size="sm"
              icon="fas fa-chevron-left"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full p-0"
            />
            
            <Button
              onClick={nextTestimonial}
              variant="secondary"
              size="sm"
              icon="fas fa-chevron-right"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full p-0"
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
              </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              variant={isAutoPlaying ? 'primary' : 'secondary'}
              size="sm"
              icon={`fas fa-${isAutoPlaying ? 'pause' : 'play'}`}
              className="rounded-full"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotate
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            variant="primary"
            size="lg"
            icon="fas fa-rocket"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ready to work together?
          </Button>
        </div>
      </div>
    </section>
  );
}
