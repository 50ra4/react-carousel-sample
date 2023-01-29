import { useEffect, useState } from 'react';

/**
 * @see https://usehooks.com/useHover/
 */
export function useIsHover<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

    target.addEventListener('mouseenter', handleMouseEnter);
    target.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      target.removeEventListener('mouseleave', handleMouseEnter);
      target.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);

  return isHover;
}
