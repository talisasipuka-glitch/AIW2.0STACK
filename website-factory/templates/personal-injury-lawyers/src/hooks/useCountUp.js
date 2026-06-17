import { useEffect, useRef, useState } from 'react';

function parseValue(value) {
  const match = String(value).match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const target = parseInt(numStr.replace(/,/g, ''), 10);
  if (Number.isNaN(target)) return null;
  return { prefix, suffix, target };
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Animates a numeric display value from 0 up to its target the first time
 * the returned ref scrolls into view. Accepts strings like "$1,325,000" and
 * preserves any non-numeric prefix/suffix. Falls back to the static value
 * when `prefers-reduced-motion` is set or the value has no parsable number.
 */
export function useCountUp(value, { duration = 800 } = {}) {
  const parsed = parseValue(value);
  const animatable = parsed && !prefersReducedMotion();

  const [display, setDisplay] = useState(() =>
    animatable ? `${parsed.prefix}0${parsed.suffix}` : value
  );
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const parsedValue = parseValue(value);
    if (!parsedValue || prefersReducedMotion()) return;

    const node = ref.current;
    if (!node) return;

    const { prefix, suffix, target } = parsedValue;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplay(`${prefix}${current.toLocaleString('en-US')}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return [display, ref];
}
