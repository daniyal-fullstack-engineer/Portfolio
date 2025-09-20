import React, { useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const Toast = ({ message, type = 'success', duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const toastRef = React.useRef(null);

  useEffect(() => {
    if (toastRef.current) {
      // Animate in
      gsap.fromTo(toastRef.current, 
        { 
          opacity: 0, 
          y: -100, 
          scale: 0.8,
          rotationX: -90
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationX: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        }
      );

      // Auto close after duration
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, handleClose]);

  const handleClose = useCallback(() => {
    if (toastRef.current) {
      gsap.to(toastRef.current, {
        opacity: 0,
        y: -100,
        scale: 0.8,
        rotationX: -90,
        duration: 0.4,
        ease: "back.in(1.7)",
        onComplete: () => {
          setIsVisible(false);
          onClose && onClose();
        }
      });
    }
  }, [onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50 dark:bg-green-900/20',
          border: 'border-green-200 dark:border-green-800',
          icon: 'fas fa-check-circle',
          iconColor: 'text-green-500',
          textColor: 'text-green-800 dark:text-green-200',
          descColor: 'text-green-600 dark:text-green-300'
        };
      case 'error':
        return {
          bg: 'bg-red-50 dark:bg-red-900/20',
          border: 'border-red-200 dark:border-red-800',
          icon: 'fas fa-exclamation-circle',
          iconColor: 'text-red-500',
          textColor: 'text-red-800 dark:text-red-200',
          descColor: 'text-red-600 dark:text-red-300'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-50 dark:bg-yellow-900/20',
          border: 'border-yellow-200 dark:border-yellow-800',
          icon: 'fas fa-exclamation-triangle',
          iconColor: 'text-yellow-500',
          textColor: 'text-yellow-800 dark:text-yellow-200',
          descColor: 'text-yellow-600 dark:text-yellow-300'
        };
      case 'info':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-800',
          icon: 'fas fa-info-circle',
          iconColor: 'text-blue-500',
          textColor: 'text-blue-800 dark:text-blue-200',
          descColor: 'text-blue-600 dark:text-blue-300'
        };
      default:
        return {
          bg: 'bg-slate-50 dark:bg-slate-900/20',
          border: 'border-slate-200 dark:border-slate-800',
          icon: 'fas fa-bell',
          iconColor: 'text-slate-500',
          textColor: 'text-slate-800 dark:text-slate-200',
          descColor: 'text-slate-600 dark:text-slate-300'
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div
      ref={toastRef}
      className={`fixed top-4 right-4 z-[9999] max-w-sm w-full mx-4 ${styles.bg} ${styles.border} border rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className={`w-8 h-8 ${styles.iconColor} flex items-center justify-center flex-shrink-0`}>
            <i className={`${styles.icon} text-lg`}></i>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className={`${styles.textColor} font-semibold text-sm mb-1`}>
              {type === 'success' ? 'Success!' : 
               type === 'error' ? 'Error!' : 
               type === 'warning' ? 'Warning!' : 
               type === 'info' ? 'Info' : 'Notification'}
            </h4>
            <p className={`${styles.descColor} text-xs leading-relaxed`}>
              {message}
            </p>
          </div>
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className={`${styles.textColor} hover:${styles.iconColor} transition-colors duration-200 flex-shrink-0`}
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1 bg-black/10 dark:bg-white/10">
        <div 
          className={`h-full ${
            type === 'success' ? 'bg-green-500' :
            type === 'error' ? 'bg-red-500' :
            type === 'warning' ? 'bg-yellow-500' :
            type === 'info' ? 'bg-blue-500' : 'bg-slate-500'
          }`}
          style={{ 
            width: '100%',
            animation: `shrink ${duration}ms linear forwards`
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default Toast;
