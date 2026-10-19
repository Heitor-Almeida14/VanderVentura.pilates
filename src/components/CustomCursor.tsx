import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on non-touch desktop screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, select, textarea, [data-interactive="true"]');
        setIsPointer(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-vv-lime -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_10px_#D1FF00]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 0.4 : 1})`,
        }}
      />
      {/* Trailing Ring */}
      <div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-vv-lime/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out backdrop-blur-[1px]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 1.7 : 1})`,
          borderColor: isPointer ? '#D1FF00' : 'rgba(209, 255, 0, 0.4)',
          backgroundColor: isPointer ? 'rgba(209, 255, 0, 0.12)' : 'transparent',
        }}
      />
    </div>
  );
};
