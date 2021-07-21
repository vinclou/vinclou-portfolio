/*
	Custom Hook which can be used to determine if element was scrolled or not
*/
import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(false);

  const listenScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolledFloat = windowScroll / height;

    const scrolled = scrolledFloat > 0.05;

    setScrollPos(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);

    return () => {
      window.removeEventListener('scroll', listenScroll);
    };
  });

  return { scrollPos };
}

export { useScrollPosition };
