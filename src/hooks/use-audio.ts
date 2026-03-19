'use client';

const audioFiles = {
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // Tech click
  hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // Metallic slide
  construct: 'https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3', // Hammering/Construction sound
};

export function useAudio() {
  const playSound = (type: keyof typeof audioFiles) => {
    if (typeof window === 'undefined') return;
    const audio = new Audio(audioFiles[type]);
    audio.volume = type === 'construct' ? 0.05 : 0.15; // Scroll sound is more subtle
    audio.play().catch(() => {}); // Catch browser blocking
  };

  return { playSound };
}
