import React, { useState } from "react";
import useCustomUltraSmoothScroll from "../hooks/useCustomUltraSmoothScroll";

export default function Faq() {
  const { scrollToElement } = useCustomUltraSmoothScroll();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: "faq-01",
      title: "Do you create custom websites or use templates?",
      content: "I build fully custom websites tailored to your brand, ensuring uniqueness, responsiveness, and top-notch functionality. No generic templates—only high-quality, hand-crafted designs.",
    },
    {
      id: "faq-02",
      title: "Will my website be mobile-friendly?",
      content: "Absolutely! Every website I develop is fully responsive, ensuring seamless performance across desktops, tablets, and mobile devices.",
    },
    {
      id: "faq-03",
      title: "Can you fix bugs and improve website performance?",
      content: "Yes! I identify and resolve issues, optimize loading speed, enhance security, and ensure smooth user experience across all browsers and devices.",
    },
    {
      id: "faq-04",
      title: "Do you provide ongoing website maintenance?",
      content: "Yes, I offer website maintenance services, including updates, security patches, bug fixes, and performance optimizations to keep your website running smoothly.",
    },
    {
      id: "faq-05",
      title: "Can you automate business tasks and workflows?",
      content: "Definitely! I develop automation solutions that streamline repetitive tasks, integrate APIs, and improve business efficiency with smart automation tools.",
    },
    {
      id: "faq-06",
      title: "What technologies do you use for development?",
      content: "I use modern technologies including React, Next.js, React Native, Node.js, Python, JavaScript, HTML5, CSS3, and various frameworks to create robust, scalable solutions.",
    },
    {
      id: "faq-07",
      title: "How long does a typical project take?",
      content: "Project timelines vary based on complexity, but most websites are completed within 2-6 weeks. For apps and automation, timelines depend on scope and requirements.",
    },
    {
      id: "faq-08",
      title: "How do we get started?",
      content: "Simply contact me with your project details! We'll discuss your needs, set goals, and create a roadmap to bring your vision to life.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <section 
        className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        id="faq"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6 fade-in-scale stagger-1">
              <i className="fas fa-question-circle text-blue-600 dark:text-blue-400"></i>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">FAQ&apos;s</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 fade-in-up stagger-2">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <div className="flex justify-center mb-8 fade-in-up stagger-3">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-4">
              Got questions? I&apos;ve got answers! Here are some common questions about my services and development process.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6 mb-16">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`group ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                } stagger-${index + 5}`}
              >
                <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left transition-all duration-300 cursor-pointer"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-6">
                        {faq.title}
                      </h3>
                      <div className={`w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}>
                        <i className="fas fa-chevron-down text-white text-sm"></i>
                      </div>
                    </div>
                  </button>
                  
                  {/* FAQ Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-5">
                      <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl fade-in-scale stagger-1">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl fade-in-scale stagger-2">
                <i className="fas fa-comments text-white text-3xl"></i>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 fade-in-up stagger-3">
                Still Have Questions?
              </h3>
              
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-6 fade-in-up stagger-4"></div>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed fade-in-up stagger-5">
                Can&apos;t find the answer you&apos;re looking for? Feel free to reach out and I&apos;ll be happy to help!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center fade-in-up stagger-6">
                <button 
                  onClick={() => scrollToElement(document.getElementById('contact'), -80)}
                  className="btn-primary group flex items-center justify-center gap-3 cursor-pointer"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Contact Me</span>
                </button>
                <button 
                  onClick={() => scrollToElement(document.getElementById('portfolio'), -80)}
                  className="btn-secondary group flex items-center justify-center gap-3 cursor-pointer"
                >
                  <i className="fas fa-eye"></i>
                  <span>View My Work</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}