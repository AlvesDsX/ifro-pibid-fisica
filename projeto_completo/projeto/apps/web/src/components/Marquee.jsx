import React from 'react';

const Marquee = ({
  items = [],
  separator = '·',
  reverse = false,
  speed = 'default',
  variant = 'dark',
  className = '',
}) => {
  if (!items.length) return null;

  const speedMap = {
    slow: '60s',
    default: '35s',
    fast: '20s',
  };

  const variantClasses = {
    dark: 'bg-foreground text-background border-foreground',
    light: 'bg-background text-foreground border-border',
    primary: 'bg-primary text-primary-foreground border-primary',
    muted: 'bg-muted text-muted-foreground border-border',
  };

  const loop = [...items, ...items, ...items];
  const direction = reverse ? 'reverse' : 'normal';
  const duration = speedMap[speed] || speedMap.default;

  return (
    <div
      className={`relative w-full overflow-hidden border-y py-4 ${variantClasses[variant]} ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${duration} linear ${direction} infinite`,
        }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex shrink-0 items-center gap-6 px-6 text-xs font-bold uppercase tracking-[0.2em]"
          >
            <span>{item}</span>
            <span className="opacity-40" aria-hidden="true">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
