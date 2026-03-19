'use client';

import { useEffect } from 'react';
import { useAudio } from './use-audio';

export function useReveal() {
  const { playSound } = useAudio();

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          if (!element.classList.contains('active')) {
            element.classList.add('active');
            // Play construction sound when a new section is "built" on screen
            playSound('construct');
          }
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    return () => window.removeEventListener('scroll', reveal);
  }, [playSound]);
}
