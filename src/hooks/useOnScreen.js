import { useState, useEffect } from 'react'

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const ovserver = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin,
        threshold: 0.5
      }
    );
    const currentRef = ref.current;
    if(currentRef) {
      ovserver.observe(currentRef);
    }
    return () => {
      if(currentRef) {
        ovserver.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export default useOnScreen;