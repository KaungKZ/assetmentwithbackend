import { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const AnimatedText = ({ className, tag, children }) => {
  const elementRef = useRef(null);
  const AnimatedTag = animated[tag] || animated.p;

  const [animation, setAnimation] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimation({ opacity: 1 });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as per your needs
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, [setAnimation]);

  return (
    <AnimatedTag className={className || ""} ref={elementRef} style={animation}>
      {children}
    </AnimatedTag>
  );
};

export default AnimatedText;
