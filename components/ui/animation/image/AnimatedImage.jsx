import { animated } from 'react-spring';

const AnimatedImage = ({ src, alt, className, style }) => {
  return (
    <animated.img style={style} src={src} alt={alt} className={className} />
  );
};

export default AnimatedImage;
