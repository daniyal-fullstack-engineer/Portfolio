import React from 'react';

// Option 1: Pure CSS Spinner (Ultra Lightweight)
export const CSSSpinner = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-slate-300 text-sm">Loading...</p>
      </div>
    </div>
  );
};

// Option 2: Minimal Dots Loader
export const DotsLoader = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

// Option 3: Pulse Loader
export const PulseLoader = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  );
};

// Option 4: Progress Bar Loader
export const ProgressLoader = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="w-80 space-y-4">
        <div className="text-center text-slate-300">Loading Portfolio...</div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-center text-slate-400 text-sm">{progress}%</div>
      </div>
    </div>
  );
};

// Option 5: Skeleton Loader
export const SkeletonLoader = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="w-80 space-y-4">
        <div className="h-8 bg-slate-700 rounded animate-pulse"></div>
        <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-slate-700 rounded animate-pulse w-1/2"></div>
        <div className="h-4 bg-slate-700 rounded animate-pulse w-2/3"></div>
      </div>
    </div>
  );
};

// Option 6: Minimal Text Loader
export const TextLoader = ({ onComplete }) => {
  const [text, setText] = React.useState('Loading');
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setText(prev => {
        if (prev === 'Loading...') {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 'Loading...';
        }
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="text-slate-300 text-xl font-medium">{text}</div>
    </div>
  );
};

// Option 7: Wave Loader
export const WaveLoader = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="flex items-end space-x-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-1 bg-blue-500 rounded-full animate-pulse"
            style={{
              height: '20px',
              animationDelay: `${i * 0.1}s`,
              animationDuration: '0.6s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Default export - you can change this to any of the above
const LightweightLoader = CSSSpinner;

export default LightweightLoader;
