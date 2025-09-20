'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    img: "https://i.postimg.cc/CM8SjJSc/2.png",
    name: "Ahmad Hassan",
    country: "Pakistan",
    text: "Outstanding work! The developer was very professional and delivered exactly what was requested. Highly recommended!",
    rating: 5,
    project: "Full-Stack Development"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/3.png",
    name: "Sarah Johnson",
    country: "Canada",
    text: "Excellent communication and timely delivery. The project was completed with high quality and attention to detail.",
    rating: 5,
    project: "UI/UX Design"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/4.png",
    name: "Michael Chen",
    country: "Australia",
    text: "Great experience working with this developer. Professional, skilled, and delivered beyond expectations.",
    rating: 5,
    project: "React Development"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/5.png",
    name: "Emma Wilson",
    country: "United Kingdom",
    text: "Very satisfied with the work quality and communication. The developer understood the requirements perfectly.",
    rating: 5,
    project: "Node.js Backend"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/6.png",
    name: "David Rodriguez",
    country: "Spain",
    text: "Professional work with excellent attention to detail. Would definitely work with this developer again.",
    rating: 5,
    project: "Database Design"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/7.png",
    name: "Lisa Thompson",
    country: "United States",
    text: "Outstanding service! The developer was responsive, professional, and delivered high-quality work on time.",
    rating: 5,
    project: "Mobile App"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/8.png",
    name: "James Brown",
    country: "Ireland",
    text: "Excellent work quality and communication. The project was completed exactly as specified and on time.",
    rating: 5,
    project: "Web Development"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/9.png",
    name: "Anna Kowalski",
    country: "Poland",
    text: "Very professional and skilled developer. Delivered excellent results and was great to work with.",
    rating: 5,
    project: "Frontend Development"
  },
  {
    img: "https://i.postimg.cc/CM8SjJSc/10.png",
    name: "Robert Taylor",
    country: "New Zealand",
    text: "Great experience! The developer was knowledgeable, responsive, and delivered high-quality work.",
    rating: 5,
    project: "API Development"
  }
];

const AllTestimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      
      {/* Lightweight Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Minimal floating elements for performance */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full opacity-40"></div>
        <div className="absolute top-40 right-16 w-6 h-6 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 rounded-lg opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full opacity-40"></div>
        
        {/* Single gradient orb for subtle effect */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-full blur-xl"></div>
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 dark:bg-slate-900 shadow-lg border-b border-slate-700 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300"
            >
              <i className="fas fa-arrow-left text-lg"></i>
              <span className="font-semibold">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm">
                {testimonials.length} Testimonials
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Client <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Testimonials</span>
          </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us. 
              Real feedback from real projects.
            </p>
          </div>

      {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Client Info */}
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <ImageWithSkeleton
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/50"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-slate-400 text-sm">{testimonial.country}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                        ))}
                    </div>
                    
                    {/* Testimonial Text */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                {/* Project Type */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-xs font-medium bg-blue-400/10 px-2 py-1 rounded-full">
                        {testimonial.project}
                      </span>
                </div>
                </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Join Our Happy Clients?
              </h2>
              <p className="text-slate-300 mb-6">
                Let&apos;s work together to create something amazing for your business.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <i className="fas fa-rocket"></i>
                Start Your Project
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTestimonials;