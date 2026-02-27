import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const Welcome: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [typingKey, setTypingKey] = useState(1);
  const fullText =
    "Hey, I'm Ahmed — a Full Stack Engineer specializing in secure, scalable web systems. \
I build production-ready applications using Next.js, Node.js, and modern database architectures — with a strong focus on performance, clean architecture, and real-world impact.";
  const typingSpeed = 70; // ms per character – slower for a calmer feel
  const soundIntervalMs = 140; // play sound at most every N ms (throttle) so it’s not overwhelming

  // Only restart typewriter when section has been in view for a moment (user landed on it, not just scrolling past)
  useEffect(() => {
    if (!isInView) return;
    const focusDelayMs = 500;
    const timeoutId = setTimeout(() => {
      setDisplayedText('');
      setIsTypingComplete(false);
      setTypingKey((k) => k + 1);
    }, focusDelayMs);
    return () => clearTimeout(timeoutId);
  }, [isInView]);

  // Run typing + sound only while section is in view; cleanup stops both when user navigates away
  useEffect(() => {
    if (!isInView) return;

    const audio = new Audio(
      'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0PVqzn77BfGAg+ltrzxnMpBSl+zPLaizsIGGS36+ihUBALTKXh8bllHAU2jtXzzn0uBSF1xe/glEILElyx6+2nVhELSKHf88BpJAU1i9Hy1YU2Bhxqvu7mnEoPD1Go5O+zYRsGPJPY88p2KwUme8rx3I0+CRZiturqpFIRC0ml4PK8aB8FM4vU8tN+MQYfcsLu45ZFDBFYr+ftr14bCECY3PLEcSYELIHO8diJOAgaaLrs56BODwxPpuPxt2IdBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7eSaRw0PVqzn77BfGAg+ltrzxnMpBSl+zPLaizsIGGS36+mjUhALTKXh8bllHAU2jtXzzn0uBSJ0xe/glEILElyx6+2nVhELSKHf88BpJAU1i9Hy1YU2Bhxqvu7mnEoPD1Go5O+zYRsGPJPY88p2KwUme8rx3I0+CRZiturqpFMQC0ml4PK8aB8FM4vU8tN+MQYfcsLu45ZFDBFYr+ftr14bCECY3PLEcSYELIHO8diJOAgaaLrs56BODwxPpuPxt2IdBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7eSaRw0PVqzn77BfGAg+ltrzxnMpBSl+zPLaizsIGGS36+mjUhALTKXh8bllHAU2jtXzzn0uBSJ0xe/glEILElyx6+2nVhELSKHf88BpJAU1i9Hy1YU2Bhxqvu7mnEoPD1Go5O+zYRsGPJPY88p2KwUme8rx3I0+CRZiturqpFMQC0ml4PK8aB8FM4vU8tN+MQYfcsLu45ZFDBFYr+ftr14bCECY3PLEcSYELIHO8diJOAgaaLrs56BODwxPpuPxt2IdBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7eSaRw0PVqzn77BfGAg='
    );
    audio.volume = 0.35; // lower volume (0 = mute, 1 = full)

    let index = 0;
    let lastSoundTime = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        const now = Date.now();
        if (now - lastSoundTime >= soundIntervalMs) {
          lastSoundTime = now;
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => {
      clearInterval(timer);
      audio.pause();
    };
  }, [typingKey, isInView]);

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="min-h-screen pt-28 flex flex-col text-white font-mono px-4 md:px-8 lg:px-16 relative md:max-h-screen md:overflow-hidden"
    >
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col items-center justify-center min-w-0">
        <div className="max-w-4xl w-full min-w-0 flex-shrink py-4">
          <h2
            className="font-bold text-custom-yellow mb-4 md:mb-8 text-center"
            style={{ fontSize: 'clamp(1.5rem, 5vmin, 3.75rem)' }}
          >
            Welcome to Ahmed Alaa
          </h2>
          <p
            className="text-custom-green leading-relaxed text-center"
            style={{ fontSize: 'clamp(0.875rem, 2.5vmin, 1.875rem)' }}
          >
            {displayedText}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-6 md:h-8 bg-custom-yellow ml-1 animate-pulse"></span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
