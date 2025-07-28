import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import useWidth from '../../lib/hooks/useWidth';
import useHeight from '../../lib/hooks/useHeight';

const MyConfetti = ({ numberOfPieces = 500 }) => {
  const { width } = useWidth();
  const { height } = useHeight();

  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={confettiActive}
      numberOfPieces={numberOfPieces}
    />
  );
};

export default MyConfetti;
