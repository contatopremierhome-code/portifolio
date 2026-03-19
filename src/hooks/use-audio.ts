'use client';

const audioFiles = {
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // Tech click
  hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // Metallic slide
};

export function useAudio() {
  const playSound = (type: keyof typeof audioFiles) => {
    if (typeof window === 'undefined') return;
    const audio = new Audio(audioFiles[type]);
    audio.volume = 0.15;
    audio.play().catch(() => {}); // Catch browser blocking
  };

  return { playSound };
}
