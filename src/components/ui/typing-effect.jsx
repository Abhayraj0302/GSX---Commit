/**
 * TypingEffect — rotating word typewriter animation
 *
 * Adapted from shadcn/magic-ui TypingEffect component.
 * Converted to plain JSX + vanilla CSS (no TypeScript, no Tailwind).
 *
 * Cycles through an array of words, typing them out letter-by-letter
 * with a blinking cursor, then clears and types the next word.
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function TypingEffect({
  texts = ['Design', 'Development', 'Marketing'],
  className = '',
  style = {},
  rotationInterval = 3000,
  typingSpeed = 150,
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const currentText = texts[currentTextIndex % texts.length];

  useEffect(() => {
    if (!isInView) return;

    if (charIndex < currentText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else {
      const changeLabelTimeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, rotationInterval);
      return () => clearTimeout(changeLabelTimeout);
    }
  }, [charIndex, currentText, isInView, texts, rotationInterval, typingSpeed]);

  return (
    <span
      ref={containerRef}
      className={`typing-effect ${className}`}
      style={style}
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="typing-effect-cursor"
      />
    </span>
  );
}

export default TypingEffect;
