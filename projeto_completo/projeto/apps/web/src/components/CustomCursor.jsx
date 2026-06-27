import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState('default');
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const fineHover =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fineHover) return undefined;

    setEnabled(true);
    document.documentElement.classList.add('cursor-custom-active');

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      raf.current = window.requestAnimationFrame(tick);
    };
    raf.current = window.requestAnimationFrame(tick);

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, input, textarea, [role="button"]');
      setVariant(interactive ? 'hover' : 'default');
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.cancelAnimationFrame(raf.current);
      document.documentElement.classList.remove('cursor-custom-active');
    };
  }, []);

  if (!enabled) return null;

  const isHover = variant === 'hover';

  return (
    <>
      {/* Ponto central — segue o mouse instantaneamente */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-200"
      />
      {/* Anel — flutua com inércia */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full border border-primary/60 transition-[width,height,margin,background-color] duration-300"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          width: isHover ? 48 : 24,
          height: isHover ? 48 : 24,
          marginLeft: isHover ? -24 : -12,
          marginTop: isHover ? -24 : -12,
          backgroundColor: isHover ? 'hsl(var(--primary) / 0.12)' : 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
