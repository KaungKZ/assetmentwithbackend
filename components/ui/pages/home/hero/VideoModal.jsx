import useWidth from '../../../../../lib/hooks/useWidth';

const VideoModal = ({ open, setOpen }) => {
  const { width } = useWidth();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={`fixed w-full inset-0 z-50 ${
        open ? 'flex' : 'hidden'
      } items-center duration-300 transition-all justify-center`}
    >
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black opacity-80"
      ></div>
      {open && (
        <div
          className={`relative w-full h-[500px] lg:w-[1360px] md:w-[700px] lg:h-[720px] px-10 rounded-lg`}
        >
          <span
            onClick={() => setOpen(false)}
            className="absolute text-white cursor-pointer right-10 -top-8"
          >
            X
          </span>
          <iframe
            title="Bermuda video player"
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${
              width < 450 ? 'tf9Gulj8bHI' : 'Ly65f0fXQqU'
            }?autoplay=1&mute=1&rel=0`}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
