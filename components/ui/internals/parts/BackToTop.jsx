import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed z-40 bottom-5 right-[104px] md:bottom-10 md:right-32 hover:md:text-white bg-white hover:md:bg-bermuda-200 shadow-lg text-gray-600 border border-gray-300 py-2 px-2 rounded-3xl ${
        isVisible ? 'visible' : 'hidden'
      }`}
      onClick={handleBackToTop}
    >
      <HiArrowUp />
    </button>
  );
};

export default BackToTop;
