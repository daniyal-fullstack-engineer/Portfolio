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

    // Optimized scroll animations with reduced complexity
    gsap.utils.toArray('.fade-in-up').forEach((element, index) => {
      gsap.fromTo(element, 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            end: "bottom 5%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Simplified slide animations
    gsap.utils.toArray('.slide-in-left').forEach((element, index) => {
      gsap.fromTo(element,
        {
          x: -40,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.utils.toArray('.slide-in-right').forEach((element, index) => {
      gsap.fromTo(element,
        {
          x: 40,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Simplified scale animation
    gsap.utils.toArray('.scale-in').forEach((element, index) => {
      gsap.fromTo(element,
        {
          scale: 0.9,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
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

    // Simplified portfolio items animation
    gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
      gsap.fromTo(item,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Simplified service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Simplified text reveal animation
    gsap.utils.toArray('.text-reveal').forEach((element) => {
      gsap.fromTo(element, {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Simplified floating animation for decorative elements
    gsap.utils.toArray('.float-element').forEach((element, index) => {
      gsap.to(element, {
        y: -15,
        duration: 4 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    });

    // Simplified counter animation for numbers
    gsap.utils.toArray('.counter').forEach((counter) => {
      const target = parseInt(counter.textContent);
      gsap.fromTo(counter, 
        { textContent: 0 },
        {
          textContent: target,
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Simplified progress bar animation
    gsap.utils.toArray('.progress-bar').forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0%';
      gsap.to(bar, {
        width: width,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
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
