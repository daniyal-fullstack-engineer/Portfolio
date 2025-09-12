import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    // Initialize smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: target,
              offsetY: 80
            },
            ease: "power2.inOut"
          });
        }
      }
    };

    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Enhanced scroll animations with more variety
    gsap.utils.toArray('.fade-in-up').forEach((element, index) => {
      gsap.fromTo(element, 
        {
          y: 50,
          opacity: 0,
          scale: 0.98
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: index * 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 98%",
            end: "bottom 2%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Slide in from left animation
    gsap.utils.toArray('.slide-in-left').forEach((element, index) => {
      gsap.fromTo(element,
        {
          x: -60,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          delay: index * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Slide in from right animation
    gsap.utils.toArray('.slide-in-right').forEach((element, index) => {
      gsap.fromTo(element,
        {
          x: 60,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          delay: index * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Scale in animation
    gsap.utils.toArray('.scale-in').forEach((element, index) => {
      gsap.fromTo(element,
        {
          scale: 0.8,
          opacity: 0,
          rotation: 5
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.3,
          delay: index * 0.03,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax effect for background elements
    gsap.utils.toArray('.parallax-bg').forEach(element => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Enhanced portfolio items animation
    gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
      gsap.fromTo(item,
        {
          scale: 0.9,
          opacity: 0,
          y: 40,
          rotationY: 8
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.3,
          delay: index * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: index * 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Text reveal animation
    gsap.utils.toArray('.text-reveal').forEach((element) => {
      const text = element.textContent;
      element.innerHTML = '';
      
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px)';
        element.appendChild(span);
      }
      
      gsap.to(element.children, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Floating animation for decorative elements
    gsap.utils.toArray('.float-element').forEach((element, index) => {
      gsap.to(element, {
        y: -30,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    });

    // Counter animation for numbers
    gsap.utils.toArray('.counter').forEach((counter) => {
      const target = parseInt(counter.textContent);
      gsap.fromTo(counter, 
        { textContent: 0 },
        {
          textContent: target,
          duration: 1.2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Progress bar animation
    gsap.utils.toArray('.progress-bar').forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0%';
      gsap.to(bar, {
        width: width,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Magnetic hover effect for buttons
    gsap.utils.toArray('.magnetic').forEach((element) => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(element, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });

    // Cleanup function
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SmoothScroll;
