import { type KeyboardEvent, useEffect, useRef, useState } from 'react';

export const useKeyboardNavigation = <T>(items: T[], onSelect?: (item: T) => void) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (items.length === 0) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setFocusedIndex((prev) => {
        const next = prev === null ? 0 : (prev + 1) % items.length;
        itemRefs.current[next]?.focus();
        return next;
      });
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setFocusedIndex((prev) => {
        const next = prev === null ? items.length - 1 : (prev - 1 + items.length) % items.length;
        itemRefs.current[next]?.focus();
        return next;
      });
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();

      if (focusedIndex !== null && onSelect) {
        onSelect(items[focusedIndex]);
      }
    }
  };

  useEffect(() => {
    if (items.length > 0) {
      setFocusedIndex(0);
      itemRefs.current[0]?.focus();
    } else {
      setFocusedIndex(null);
    }
  }, [items]);

  return {
    focusedIndex,
    setFocusedIndex,
    itemRefs,
    handleKeyDown,
  };
};
