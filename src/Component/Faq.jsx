import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, faqRef.current, ctaRef.current], {
      opacity: 0,
      y: 60
    });

    gsap.set(backgroundRef.current, {
      scale: 1.1,
      opacity: 0
    });

    // Set initial states for FAQ items
    gsap.set('.faq-item', {
      opacity: 0,
      y: 50,
      scale: 0.95
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate elements in sequence
    tl.to(backgroundRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(faqRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.2");

    // Animate FAQ items with stagger
    gsap.utils.toArray('.faq-item').forEach((item, index) => {
      gsap.fromTo(item, {
        opacity: 0,
        y: 50,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.1
      });
    });

    // Continuous background animation
    gsap.to(backgroundRef.current, {
      rotation: 360,
      duration: 70,
      ease: "none",
      repeat: -1
    });

    // FAQ item hover animations
    gsap.utils.toArray('.faq-item').forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // FAQ button hover animations
    gsap.utils.toArray('.faq-button').forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

  }, []);

  const faqs = [
    {
      id: "faq-01",
      title: "Do you create custom websites or use templates?",
      content: "I build fully custom websites tailored to your brand, ensuring uniqueness, responsiveness, and top-notch functionality. No generic templates—only high-quality, hand-crafted designs.",
      delay: 50,
    },
    {
      id: "faq-02",
      title: "Will my website be mobile-friendly?",
      content: "Absolutely! Every website I develop is fully responsive, ensuring seamless performance across desktops, tablets, and mobile devices.",
      delay: 100,
    },
    {
      id: "faq-03",
      title: "Can you fix bugs and improve website performance?",
      content: "Yes! I identify and resolve issues, optimize loading speed, enhance security, and ensure smooth user experience across all browsers and devices.",
      delay: 150,
    },
    {
      id: "faq-04",
      title: "Do you provide ongoing website maintenance?",
      content: "Yes, I offer website maintenance services, including updates, security patches, bug fixes, and performance optimizations to keep your website running smoothly.",
      delay: 200,
    },
    {
      id: "faq-05",
      title: "Can you automate business tasks and workflows?",
      content: "Definitely! I develop automation solutions that streamline repetitive tasks, integrate APIs, and improve business efficiency with smart automation tools.",
      delay: 250,
    },
    {
      id: "faq-06",
      title: "What technologies do you use for development?",
      content: "I use modern technologies including React, Node.js, Python, JavaScript, HTML5, CSS3, and various frameworks to create robust, scalable solutions.",
      delay: 300,
    },
    {
      id: "faq-07",
      title: "How long does a typical project take?",
      content: "Project timelines vary based on complexity, but most websites are completed within 2-6 weeks. For apps and automation, timelines depend on scope and requirements.",
      delay: 350,
    },
    {
      id: "faq-08",
      title: "How do we get started?",
      content: "Simply contact me with your project details! We'll discuss your needs, set goals, and create a roadmap to bring your vision to life.",
      delay: 400,
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      >
        {/* Enhanced Background Elements */}
        <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg rotate-45 opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-12 opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-32 right-32 text-blue-400/30 text-2xl animate-float">
            <i className="fas fa-question-circle"></i>
          </div>
          <div className="absolute top-1/2 left-16 text-purple-400/30 text-xl animate-float" style={{animationDelay: '1s'}}>
            <i className="fas fa-lightbulb"></i>
          </div>
          <div className="absolute bottom-32 right-16 text-indigo-400/30 text-lg animate-float" style={{animationDelay: '2s'}}>
            <i className="fas fa-comments"></i>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Enhanced Section Title */}
          <div ref={titleRef} className="text-center mb-16">
            <div ref={subtitleRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
              <i className="fas fa-question-circle text-blue-600 dark:text-blue-400 animate-pulse"></i>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">FAQ's</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p ref={descriptionRef} className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Got questions? I've got answers! Here are some common questions about my services and development process.
            </p>
          </div>

          {/* Enhanced FAQ Items */}
          <div ref={faqRef} className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="faq-item group"
              >
                <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/30 dark:border-slate-700/40 shadow-xl overflow-hidden">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                  
                  <button
                    className="faq-button relative z-10 w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left transition-all duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-700/50 rounded-2xl sm:rounded-3xl"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 dark:text-white pr-4 sm:pr-6 md:pr-8 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {faq.title}
                      </h3>
                      {/* Mobile: Simple arrow icon without background */}
                      <div className="sm:hidden">
                        <i className={`fas fa-chevron-down text-blue-600 dark:text-blue-400 text-sm transition-transform duration-300 ${
                          openFaq === faq.id ? 'rotate-180' : ''
                        }`}></i>
                      </div>
                      {/* Desktop: Arrow icon with background */}
                      <div className={`hidden sm:flex w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full items-center justify-center transition-transform duration-300 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}>
                        <i className="fas fa-chevron-down text-white text-sm"></i>
                      </div>
                    </div>
                  </button>
                  
                  {/* FAQ Content */}
                  <div className={`relative z-10 overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                      <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-3 sm:pt-4">
                        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.content}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced FAQ CTA */}
          <div ref={ctaRef} className="text-center">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-600/50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Feel free to reach out and I'll be happy to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <a 
                    href="#contact" 
                    className="btn-primary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    <i className="fas fa-envelope text-sm sm:text-base md:text-lg lg:text-xl"></i>
                    <span>Contact Me</span>
                  </a>
                  <a 
                    href="#portfolio" 
                    className="btn-secondary group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    <i className="fas fa-eye text-sm sm:text-base md:text-lg lg:text-xl"></i>
                    <span>View My Work</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}