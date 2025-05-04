// src/components/Typewriter.tsx
import { useEffect, useState } from 'react';

const Typewriter: React.FC<{ txt: string }> = ({ txt }) => {
  const [text, setText] = useState('');
  const fullText = txt;
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
  }, [fullText]);

  return (
    <div className="flex items-center justify-center text-custom-green text-3xl font-mono select-none">
      <span>{text}</span>
    </div>
  );
};

export default Typewriter;
