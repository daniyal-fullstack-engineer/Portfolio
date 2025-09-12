import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target.closest('a, button, [role="button"], .clickable');
      if (target) {
        setIsHovering(true);
        setCursorText('Click');
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target.closest('a, button, [role="button"], .clickable');
      if (target) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Clean up
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div 
          className={`w-4 h-4 rounded-full transition-all duration-300 ease-out ${
            isHovering 
              ? 'bg-white border-2 border-blue-500 shadow-lg shadow-blue-500/50' 
              : 'bg-white/80'
          }`}
        />
      </div>

      {/* Cursor Text */}
      {isHovering && cursorText && (
        <div
          className="fixed pointer-events-none z-[9999] text-white text-xs font-medium bg-blue-500 px-2 py-1 rounded-full shadow-lg transition-all duration-200 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y - 30}px`,
            transform: 'translateX(-50%)',
            opacity: isHovering ? 1 : 0,
          }}
        >
          {cursorText}
        </div>
      )}

      {/* Cursor Trail */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1.5})`,
          opacity: isHovering ? 0.3 : 0.1,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm" />
      </div>

      <style jsx>{`
        * {
          cursor: none !important;
        }
        
        a, button, [role="button"], .clickable {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;