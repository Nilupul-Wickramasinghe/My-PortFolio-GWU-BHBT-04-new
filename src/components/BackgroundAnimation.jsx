import React, {useEffect, useRef} from 'react';

export function BackgroundAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll('.bg-blob');
    let raf = null;

    function update() {
      const s = window.scrollY || window.pageYOffset;
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed || '0.05');
        const x = parseFloat(el.dataset.x || '0');
        const y = s * speed;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }

    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="bg-anim pointer-events-none fixed inset-0 z-0">
      <div className="bg-blob blob-large" data-speed="0.12" data-x="-80" />
      <div className="bg-blob blob-mid" data-speed="0.07" data-x="120" />
      <div className="bg-blob blob-small" data-speed="0.03" data-x="40" />
    </div>
  );
}

export default BackgroundAnimation;
