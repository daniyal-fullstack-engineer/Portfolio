import React, { useState, useEffect } from 'react';

export default function AnimatedCodeEditor() {
  const [currentLine, setCurrentLine] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const codeLines = [
    "const developer = {",
    "  name: 'M Daniyal',",
    "  skills: ['React', 'Next.js', 'TypeScript'],",
    "  database: 'PostgreSQL + Prisma',",
    "  mobile: 'React Native',",
    "  styling: 'Tailwind CSS + Shadcn/ui',",
    "  ai: 'Prompt Engineering',",
    "  cloud: 'Firebase + AWS',",
    "  passion: 'Full Stack Development',",
    "  experience: '5+ years'",
    "};",
    "",
    "const createAmazing = () => {",
    "  return 'Digital Experiences';",
    "};",
    "",
    "// TypeScript Interface",
    "interface Developer {",
    "  name: string;",
    "  skills: string[];",
    "  experience: number;",
    "}",
    "",
    "// Database Schema with Prisma",
    "model User {",
    "  id    Int    @id @default(autoincrement())",
    "  name  String",
    "  email String @unique",
    "}",
    "",
    "developer.build(createAmazing());"
  ];

  const currentCode = codeLines[currentLine];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
      setTypingText('');
    }, 3000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  useEffect(() => {
    if (currentCode) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= currentCode.length) {
          setTypingText(currentCode.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentCode]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="animated-code-editor">
      <div className="code-editor-header">
        <div className="window-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
        <div className="file-name">portfolio.js</div>
      </div>
      
      <div className="code-editor-body">
        <div className="line-numbers">
          {Array.from({ length: codeLines.length }, (_, i) => (
            <div key={i} className={`line-number ${i === currentLine ? 'active' : ''}`}>
              {i + 1}
            </div>
          ))}
        </div>
        
        <div className="code-content">
          {codeLines.map((line, index) => (
            <div key={index} className={`code-line ${index === currentLine ? 'typing' : ''}`}>
              {index === currentLine ? (
                <>
                  <span className="code-text">{typingText}</span>
                  {showCursor && <span className="cursor">|</span>}
                </>
              ) : (
                <span className="code-text">{line}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="floating-tech-icons">
        <div className="tech-icon react" data-tech="React">
          <i className="fab fa-react"></i>
        </div>
        <div className="tech-icon nextjs" data-tech="Next.js">
          <i className="fab fa-react"></i>
        </div>
        <div className="tech-icon js" data-tech="JavaScript">
          <i className="fab fa-js-square"></i>
        </div>
        <div className="tech-icon node" data-tech="Node.js">
          <i className="fab fa-node-js"></i>
        </div>
        <div className="tech-icon git" data-tech="Git">
          <i className="fab fa-git-alt"></i>
        </div>
        <div className="tech-icon html" data-tech="HTML5">
          <i className="fab fa-html5"></i>
        </div>
        <div className="tech-icon css" data-tech="CSS3">
          <i className="fab fa-css3-alt"></i>
        </div>
        <div className="tech-icon postgresql" data-tech="PostgreSQL">
          <i className="fas fa-database"></i>
        </div>
        <div className="tech-icon prisma" data-tech="Prisma">
          <i className="fas fa-layer-group"></i>
        </div>
        <div className="tech-icon typescript" data-tech="TypeScript">
          <i className="fab fa-js-square"></i>
        </div>
        <div className="tech-icon firebase" data-tech="Firebase">
          <i className="fas fa-fire"></i>
        </div>
        <div className="tech-icon react-native" data-tech="React Native">
          <i className="fab fa-react"></i>
        </div>
        <div className="tech-icon tailwind" data-tech="Tailwind CSS">
          <i className="fab fa-css3-alt"></i>
        </div>
        <div className="tech-icon shadcn" data-tech="Shadcn/ui">
          <i className="fas fa-puzzle-piece"></i>
        </div>
      </div>

      {/* Particle System */}
      <div className="particle-system">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}
