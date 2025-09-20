import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover-scale active:scale-95 focus:scale-105';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl active:from-blue-700 active:to-purple-700',
    secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-2 border border-slate-200 dark:border-slate-700 active:bg-slate-300 dark:active:bg-slate-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-600 active:border-blue-600',
    ghost: 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-500 focus:ring-offset-2 active:bg-slate-200 dark:active:bg-slate-700',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 focus:ring-offset-2 shadow-lg hover:shadow-xl active:bg-red-700',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 focus:ring-offset-2 shadow-lg hover:shadow-xl active:bg-green-700'
  };
  
  const sizes = {
    xs: 'px-3 py-1.5 text-xs min-h-[32px]',
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[48px] sm:min-h-[56px]',
    xl: 'px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl min-h-[56px] sm:min-h-[64px]'
  };
  
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-4 sm:w-5 h-4 sm:h-5',
    xl: 'w-5 sm:w-6 h-5 sm:h-6'
  };
  
  const iconSpacing = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-2',
    lg: 'gap-2 sm:gap-3',
    xl: 'gap-3'
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${iconSpacing[size]}
    ${className}
  `.trim();

  const renderIcon = () => {
    if (loading) {
      return (
        <div className={`${iconSizes[size]} animate-spin`}>
          <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      );
    }
    
    if (icon) {
      return <i className={`${icon} ${iconSizes[size]}`}></i>;
    }
    
    return null;
  };

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};

export default Button;
