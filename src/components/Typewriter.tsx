// src/components/Typewriter.tsx
import { useEffect, useState } from 'react';

const Typewriter: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Welcome to my website! 👋';
  const typingSpeed = 100; // ms

  useEffect(() => {
    let index = -1;
    const timer = setInterval(() => {
      index++;
      setText((prev) => prev + fullText[index]);
      if (index === fullText.length - 1) {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-3xl font-mono select-none">
      <span>{text}</span>
    </div>
  );
};

export default Typewriter;
